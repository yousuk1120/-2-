"""
포트폴리오 PDF 생성 스크립트
마크다운 파일을 PDF로 변환합니다.
"""

import os
import subprocess
import sys

def check_dependencies():
    """필요한 패키지가 설치되어 있는지 확인"""
    try:
        import markdown
        import weasyprint
        return True
    except ImportError:
        return False

def install_dependencies():
    """필요한 패키지 설치"""
    print("필요한 패키지를 설치하는 중...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "markdown", "weasyprint"])
    print("패키지 설치 완료!")

def markdown_to_html(md_file, html_file):
    """마크다운을 HTML로 변환"""
    import markdown
    
    with open(md_file, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # 마크다운을 HTML로 변환
    html_content = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
    
    # HTML 템플릿에 삽입
    html_template = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            @page {{
                size: A4;
                margin: 2cm;
            }}
            body {{
                font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
                line-height: 1.6;
                color: #333;
            }}
            h1 {{
                color: #2c3e50;
                border-bottom: 3px solid #3498db;
                padding-bottom: 10px;
            }}
            h2 {{
                color: #34495e;
                border-bottom: 2px solid #95a5a6;
                padding-bottom: 5px;
                margin-top: 30px;
            }}
            h3 {{
                color: #7f8c8d;
                margin-top: 20px;
            }}
            table {{
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }}
            th, td {{
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }}
            th {{
                background-color: #3498db;
                color: white;
            }}
            tr:nth-child(even) {{
                background-color: #f2f2f2;
            }}
            code {{
                background-color: #f4f4f4;
                padding: 2px 5px;
                border-radius: 3px;
                font-family: 'Courier New', monospace;
            }}
            pre {{
                background-color: #f4f4f4;
                padding: 15px;
                border-radius: 5px;
                overflow-x: auto;
            }}
            blockquote {{
                border-left: 4px solid #3498db;
                padding-left: 15px;
                margin-left: 0;
                color: #555;
            }}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html_template)

def html_to_pdf(html_file, pdf_file):
    """HTML을 PDF로 변환"""
    from weasyprint import HTML
    
    HTML(filename=html_file).write_pdf(pdf_file)

def main():
    """메인 함수"""
    print("=" * 50)
    print("포트폴리오 PDF 생성 스크립트")
    print("=" * 50)
    
    # 의존성 확인
    if not check_dependencies():
        print("필요한 패키지가 설치되어 있지 않습니다.")
        response = input("자동으로 설치하시겠습니까? (y/n): ")
        if response.lower() == 'y':
            install_dependencies()
        else:
            print("다음 명령어로 패키지를 설치해주세요:")
            print("pip install markdown weasyprint")
            return
    
    # 파일 경로 설정
    base_dir = os.path.dirname(os.path.abspath(__file__))
    md_file = os.path.join(base_dir, "portfolio_complete.md")
    html_file = os.path.join(base_dir, "portfolio_temp.html")
    pdf_file = os.path.join(base_dir, "portfolio.pdf")
    
    # 마크다운 파일 확인
    if not os.path.exists(md_file):
        print(f"오류: {md_file} 파일을 찾을 수 없습니다.")
        return
    
    try:
        # 마크다운 → HTML
        print("마크다운을 HTML로 변환하는 중...")
        markdown_to_html(md_file, html_file)
        print("✓ HTML 변환 완료")
        
        # HTML → PDF
        print("HTML을 PDF로 변환하는 중...")
        html_to_pdf(html_file, pdf_file)
        print("✓ PDF 변환 완료")
        
        # 임시 HTML 파일 삭제
        if os.path.exists(html_file):
            os.remove(html_file)
        
        print("=" * 50)
        print(f"포트폴리오 PDF가 생성되었습니다: {pdf_file}")
        print("=" * 50)
        
    except Exception as e:
        print(f"오류 발생: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()




