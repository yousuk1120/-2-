# 기획자 포트폴리오

이 폴더에는 3개의 프로젝트 포트폴리오가 포함되어 있습니다.

## 폴더 구조

```
portfolio/
├── project1/          # 프로젝트 1: 사용자 큐레이션 기반 맛집 추천 앱
│   ├── README.md
│   ├── flowcharts/    # IA 및 사용자 플로우 다이어그램
│   └── wireframes/    # 와이어프레임 명세
├── project2/          # 프로젝트 2: 장바구니 전환율 개선 프로젝트
│   ├── README.md
│   ├── flowcharts/
│   └── wireframes/
├── project3/          # 프로젝트 3: 푸시 알림 오픈율 향상 프로젝트
│   ├── README.md
│   ├── flowcharts/
│   └── wireframes/
├── portfolio_complete.md  # 전체 포트폴리오 통합본
├── generate_pdf.py        # PDF 생성 스크립트
├── index.html             # 웹 페이지 메인
├── project1.html          # 프로젝트 1 상세 페이지
├── project2.html          # 프로젝트 2 상세 페이지
├── project3.html          # 프로젝트 3 상세 페이지
├── styles.css             # 웹 페이지 스타일
├── script.js              # 웹 페이지 스크립트
└── README.md              # 이 파일
```

## 프로젝트 개요

### 프로젝트 1: 사용자 큐레이션 기반 맛집 추천 앱
- **유형**: 신규 서비스 기획
- **기간**: 2024.01 ~ 2024.06 (6개월)
- **역할**: 서비스 기획자 (PM)
- **주요 성과**: MAU 95,000명 달성, 앱 평점 4.3점

### 프로젝트 2: 장바구니 전환율 개선 프로젝트
- **유형**: UX 개선 프로젝트
- **기간**: 2023.09 ~ 2024.02 (6개월)
- **역할**: UX 기획자
- **주요 성과**: 전환율 15% → 24.5% (63% 개선), 매출 35% 증가

### 프로젝트 3: 푸시 알림 오픈율 향상 프로젝트
- **유형**: 데이터 기반 개선
- **기간**: 2023.11 ~ 2024.04 (6개월)
- **역할**: 데이터 기반 기획자
- **주요 성과**: 오픈율 8% → 18.5% (131% 개선), 매출 45% 증가

## PDF 생성 방법

### 방법 1: Python 스크립트 사용 (권장)

1. 필요한 패키지 설치:
```bash
pip install markdown weasyprint
```

2. 스크립트 실행:
```bash
python generate_pdf.py
```

### 방법 2: 온라인 도구 사용

1. `portfolio_complete.md` 파일을 온라인 마크다운 → PDF 변환 도구에 업로드
2. 추천 도구:
   - [Markdown to PDF](https://www.markdowntopdf.com/)
   - [Dillinger](https://dillinger.io/)

### 방법 3: Pandoc 사용

```bash
pandoc portfolio_complete.md -o portfolio.pdf --pdf-engine=xelatex -V mainfont="Malgun Gothic"
```

## 파일 설명

- **README.md**: 각 프로젝트의 상세 포트폴리오 문서
- **flowcharts/**: Mermaid 형식의 IA 및 사용자 플로우 다이어그램
- **wireframes/**: 와이어프레임 상세 명세서
- **portfolio_complete.md**: 3개 프로젝트를 하나로 통합한 전체 포트폴리오

## 웹 페이지 사용 방법

포트폴리오를 웹 브라우저에서 확인할 수 있습니다!

### 방법 1: 직접 파일 열기

1. `index.html` 파일을 더블클릭하거나
2. 브라우저에서 `index.html` 파일을 열기

### 방법 2: 로컬 서버 실행 (권장)

Python이 설치되어 있다면:

```bash
# Python 3
python -m http.server 8000

# 또는
python3 -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000` 접속

### 웹 페이지 구성

- **index.html**: 메인 페이지 (3개 프로젝트 카드 형태)
- **project1.html**: 프로젝트 1 상세 페이지
- **project2.html**: 프로젝트 2 상세 페이지
- **project3.html**: 프로젝트 3 상세 페이지
- **styles.css**: 공통 스타일시트
- **script.js**: 인터랙티브 기능

### 주요 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱 지원)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 프로젝트 카드 호버 효과
- ✅ 깔끔한 노션 스타일 디자인
- ✅ 인쇄 최적화

## 참고사항

- 모든 문서는 노션 스타일 마크다운으로 작성되었습니다.
- Mermaid 다이어그램은 [Mermaid Live Editor](https://mermaid.live/)에서 확인할 수 있습니다.
- 와이어프레임은 실제 이미지 대신 상세한 텍스트 명세로 제공됩니다.
- 웹 페이지는 모든 최신 브라우저에서 정상 작동합니다.

