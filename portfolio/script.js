// Smooth scroll and interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all project cards and sections
    document.querySelectorAll('.project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on link
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('.project-link');
                if (link) {
                    link.click();
                }
            }
        });

        // Add cursor pointer
        card.style.cursor = 'pointer';
    });

    // Table of contents generator for project detail pages
    const projectDetail = document.querySelector('.project-detail');
    if (projectDetail) {
        generateTableOfContents();
    }
});

// Generate table of contents for project detail pages
function generateTableOfContents() {
    const headings = document.querySelectorAll('.project-detail h2');
    if (headings.length === 0) return;

    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>목차</h3><ul></ul>';

    const tocList = toc.querySelector('ul');
    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
        li.appendChild(a);
        tocList.appendChild(li);
    });

    // Insert TOC after first h1
    const firstH1 = document.querySelector('.project-detail h1');
    if (firstH1) {
        firstH1.parentNode.insertBefore(toc, firstH1.nextSibling);
    }

    // Add TOC styles
    const style = document.createElement('style');
    style.textContent = `
        .table-of-contents {
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: var(--radius);
            margin: 30px 0;
        }
        .table-of-contents h3 {
            margin-top: 0;
            margin-bottom: 15px;
            color: var(--text-primary);
        }
        .table-of-contents ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .table-of-contents li {
            margin-bottom: 8px;
        }
        .table-of-contents a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .table-of-contents a:hover {
            color: var(--primary-dark);
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
}

// Add print styles
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .header, .footer, .back-button {
            display: none;
        }
        .project-detail {
            box-shadow: none;
            padding: 0;
        }
        body {
            background: white;
        }
    }
`;
document.head.appendChild(printStyle);




