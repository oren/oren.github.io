<!--
theme: uncover
class: invert
paginate: true
-->

# Create Presentations Fast!

Presentation by Oren Golan

---

What you will learn?

- Understand what Marp is
- Understand the value of using Marp
- Build your own presentation in one minute

---

Topics
1. What is Marp
2. Why you should use it
3. Basic Marp's features
4. Marp's Themes
4. Build a presentation with Marp in 1 minute

---

# Marp is a tool for creating presentation super fast

---

# Features

---

watch mode, convert to pdf, pptx, or generate images

---

Watch mode

```
./marp readme.md -w
```

---

Convert to PDF

```
./marp readme.md --pdf
```

---

Convert to PowerPoint

```
./marp readme.md --pptx
```

---

Generate images

```
./marp readme.md --images
```

---

# Themes

---

Set theme with the CLI
```
./marp readme.md --theme gaia
```

Or at the beginning of the markdown file
```
<!--
theme: gaia
-->
```

---

This presentation is using
```
<!--
theme: uncover
class: invert
paginate: true
-->
```

(These are called [Directive](https://marpit.marp.app/directives))

---

How to create a presentation:
1. Install [Marp CLI](https://github.com/marp-team/marp-cli/releases)
2. Write some markdown in readme.md
3. `./marp readme.md`
4. Open readme.html in the browser

---

Amazing. Questions? orengolan@gmail.com
