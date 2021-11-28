I found Two options for exporting md to pdf and html. The first one looks cleaner and I can control the layout using CSS.

## 1. VSCode
https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf

Install extension. open md file. right click, export to pdf (html is also an option).

add to ~/.config/Code/User/settings.json:
```
"markdown-pdf.styles": ["/home/oren/m/tech/markdown-pdf.css"],
```

Create new file ~/m/tech/vscode/markdown-pdf.css
```
body {
	font-size: 24px;
	line-height: 1.2;
}

hr {
	display: none;
}
```

## 2. CLI
https://github.com/c0bra/markdown-resume-js

### For usage on the command line
npm install -g markdown-resume

### Generate HTML file
md2resume oren.md

### Generate PDF file
md2resume --pdf oren.md


### Examples:
md2resume oren.md -t roboto --pdf
md2resume oren.md -t roboto

