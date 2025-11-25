// Simple markdown to HTML converter for project pages
function markdownToHTML(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^1\. (.*$)/gim, '<li>$1</li>');
    
    // Wrap consecutive list items in ul
    html = html.replace(/(<li>.*<\/li>\n?)+/g, function(match) {
        return '<ul>' + match + '</ul>';
    });
    
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    
    // Paragraphs (lines that aren't already HTML tags)
    html = html.split('\n').map(line => {
        if (line.trim() === '' || line.match(/^<[^>]+>/) || line.match(/^<\/[^>]+>/)) {
            return line;
        }
        if (!line.match(/^<[h|u|o|p|d|t|h]/)) {
            return '<p>' + line + '</p>';
        }
        return line;
    }).join('\n');
    
    // Tables - basic support
    const tableRegex = /^\|(.+)\|$/gm;
    const tables = html.match(tableRegex);
    if (tables) {
        tables.forEach(table => {
            const rows = table.split('\n').filter(r => r.trim().startsWith('|'));
            if (rows.length > 0) {
                let tableHTML = '<table>';
                rows.forEach((row, index) => {
                    const cells = row.split('|').filter(c => c.trim() !== '');
                    if (index === 0) {
                        tableHTML += '<thead><tr>';
                        cells.forEach(cell => {
                            tableHTML += '<th>' + cell.trim() + '</th>';
                        });
                        tableHTML += '</tr></thead><tbody>';
                    } else if (index === 1 && cells[0].includes('---')) {
                        // Skip separator row
                    } else {
                        tableHTML += '<tr>';
                        cells.forEach(cell => {
                            tableHTML += '<td>' + cell.trim() + '</td>';
                        });
                        tableHTML += '</tr>';
                    }
                });
                tableHTML += '</tbody></table>';
                html = html.replace(table, tableHTML);
            }
        });
    }
    
    return html;
}

// Fetch and convert markdown file
async function loadMarkdownAsHTML(filePath, containerId) {
    try {
        const response = await fetch(filePath);
        const markdown = await response.text();
        const html = markdownToHTML(markdown);
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error('Error loading markdown:', error);
        document.getElementById(containerId).innerHTML = '<p>Error loading content.</p>';
    }
}




