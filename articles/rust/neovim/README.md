<!-- numbers -->

# Use Rust with Neovim

## 1. What is this?
A how-to guide for adding autocomplete and 'jump to function definition' for Rust in Neovim.



## 2. Why?
Save you time when you want to navigate a Rust project or learn about a Rust feature.

## 3. How?
Rust has a language server called rust-analyzer. A language server is a process that runs on your laptop and interacts with your text editor (Neovim in our case). Using a language server enables features like autocomplete and jump to definition which are enabled by default on most IDEs like VSCode.

Before installing rust-analyzer we need to install a Neovim plugin called [Conquer of Completion](https://github.com/neoclide/coc.nvim). After installing it we will install something called [coc-rust-analyzer](https://github.com/fannheyward/coc-rust-analyzer) which is an extention for coc.nvim.

### Install
**a. Add coc.nvim to init.vim**
```
Plug 'neoclide/coc.nvim', {'branch': 'release'}
```

**b. Install coc.nvim**

Open neovim and type: `Pluginstall`

**c. Install coc-rust-analyzer**

Open neovim and type: `:CocInstall coc-rust-analyzer`

**d. Setup coc.nvim to enable code navigation and documentation preview window**

```
" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Use K to show documentation in preview window.
nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  else
    call CocAction('doHover')
  endif
endfunction

```

### Use

* Jump to function definition: stand on a function call and type `gd`
* Show documentation: stand on any type and type `K`

