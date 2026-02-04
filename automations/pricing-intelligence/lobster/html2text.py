"""Extract readable text from HTML file. Usage: python3 html2text.py <input.html>"""
import sys, re, html
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.result = []
        self.skip = False
        self.skip_tags = {'script', 'style', 'noscript', 'svg', 'head'}
    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip = True
    def handle_endtag(self, tag):
        if tag in self.skip_tags:
            self.skip = False
        if tag in ('p', 'div', 'br', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'tr'):
            self.result.append('\n')
    def handle_data(self, data):
        if not self.skip:
            self.result.append(data)
    def get_text(self):
        text = ''.join(self.result)
        text = html.unescape(text)
        text = re.sub(r'[ \t]+', ' ', text)
        text = re.sub(r'\n{3,}', '\n\n', text)
        return text.strip()

with open(sys.argv[1], 'r', errors='replace') as f:
    content = f.read()
p = TextExtractor()
p.feed(content)
print(p.get_text())
