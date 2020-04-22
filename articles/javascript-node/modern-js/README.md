# Modern Javascript
I am using the Neovim to write code. This page is documents best practices of using it with Javascript.

## 1. Prettier
This is tool formats the JavaScript code based on whatever rules you want. To use it you also want to use a Neovim plugin called ALE.

### Install

```
npm install -g prettier
```

Add to your `~/.config/nvim/init.vim`:
```
Plug 'w0rp/ale'
```

Also add the following:
```
" ALE Plugin
let g:ale_linters_explicit = 1
let g:ale_javascript_prettier_options = '--single-quote --no-semi'
let g:ale_fixers = { 'javascript': ['prettier'], 'css': ['prettier'], }
let g:ale_linters = { 'javascript': ['eslint'], }
" let g:ale_fix_on_save = 1 "run it on save
```

Save the init.vim

### How to use it

Open a JavaScript file and type `:ALEFix`. Your file should be fixed based on your settings
