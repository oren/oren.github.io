---
name: article
description: Add a new article to the site at articles/. Creates the article folder (README.md, index.html, _navbar.md), resizes images with convert-image.sh, and links it from articles/README.md and articles/index.html. Use when the user says "add an article", "new blog post", "write this up as a post", points at a draft under articles/, or pastes notes to turn into an article.
---

# Adding an article

Every article is a folder under `articles/` with a slug name: lowercase,
hyphenated, descriptive on its own. `double-loop-learning`, `how-to-apologize`,
`drama-triangle`. The slug becomes the URL, so `triangle` is too vague where
`drama-triangle` is not. If the user already made the folder under a thin name,
write the article first and offer the rename before committing.

The folder holds:

- `README.md` - the source of truth
- `index.html` - the same content, hand-rendered (this is what GitHub Pages serves)
- `_navbar.md` - one fixed line
- images, resized to 800px wide

Two index files also need a new line each: `articles/README.md` and
`articles/index.html`.

## Starting from a draft

The user often writes a rough draft into `articles/<slug>/README.md` first and
then asks for it to be turned into a post. Rewrite that draft, do not just
reformat it. What usually needs fixing:

- **No context.** Drafts jump into the model assuming the reader knows it. Open
  by naming the idea, who came up with it, and why it matters.
- **Chatbot endings.** A draft that was pasted out of a chat ends with something
  like "What kind of conflict are you dealing with right now?" Cut it and end
  on an observation instead.
- **Headline-speak headings.** "Flip the Script to Empowerment" becomes a plain
  verb: "Swap the role". Sentence case, always.
- **No sources.** Find the real ones and add a `## Links` section.

Apply the unslop rules. These posts are written in Oren's voice: first person
where it fits, short sentences, an opinion rather than a neutral summary.

Do not invent sources or links. Verify a URL exists before putting it in Links.

## Images

Any image gets resized before it is committed:

```
./convert-image.sh articles/<slug>/<image>.jpeg
```

The script resizes in place to 800px wide with `magick`. Run it every time,
including on images the user points at in `~/Downloads`; copy the file into the
article folder first, then resize the copy.

Put the image right after the H1. Name it after the subject
(`triangle.jpeg`, `double-loop-learning.jpg`). Alt text is the subject in
lowercase, not a sentence.

If the image is someone else's diagram, credit it in `## Links`:

```markdown
* Image above: [Management 3.0](https://management30.com/)
```

Read the image before writing about it. The credit and the alt text both come
from what is actually in the picture.

## README.md template

```markdown
# Reduce conflicts using the Drama Triangle

![drama triangle](triangle.jpeg)

Stephen Karpman mapped the three roles people fall into during a conflict:
Victim, Persecutor, Rescuer.

## 1. Pause

Stop talking. Take a breath.

## 2. Name your corner

* Feeling helpless? **Victim**.
* Attacking? **Persecutor**.

## Links

* [Karpman drama triangle](https://en.wikipedia.org/wiki/Karpman_drama_triangle)
```

Numbered H2s suit a process. A topic summary uses plain H2s instead
(`## The process`, `## Links`). Look at a neighbouring article in the same
index category and match it.

## _navbar.md

One line, identical in all 113 article folders that have one:

```markdown
[Oren Home](/) > [Articles](articles/)
```

## index.html

Copy `articles/template/index.html`, which is the empty shell with the head,
CSS block, and breadcrumb already right, then fill in the title and the
`<article>` body. The head, the CSS, and the breadcrumb never change.

```html
<title>Reduce conflicts using the Drama Triangle</title>
<meta property="og:title" content="Reduce conflicts using the Drama Triangle" />
<meta property="og:image" content="https://oren.github.io/articles/drama-triangle/triangle.jpeg" />
<meta property="og:type" content="website" />
```

The three `og:` lines are only there when the article has an image. Point
`og:image` at the full `https://oren.github.io/articles/<slug>/` URL. About 42
of the 114 articles have them. Articles without an image go straight from
`<title>` to the stylesheet link.

The breadcrumb in the body, unchanged from the template:

```html
<body data-color-mode="dark" data-dark-theme="dark">
<p><a href="https://oren.github.io">Oren Home</a> &gt; <a href="https://oren.github.io/articles/">Articles</a></p>

<article class="markdown-body">
```

Note the breadcrumb here uses absolute `https://oren.github.io` links while
`_navbar.md` uses relative ones. That is not a mistake, they are rendered by
different things. Leave both as they are.

Rendering conventions inside the article:

- every paragraph its own `<p>`, keeping the README's line breaks inside it
- `##` becomes `<h2>`, lists `<ul>`/`<ol>`, `>` quotes `<blockquote><p>`
- an image is `<p><img src="triangle.jpeg" alt="drama triangle" /></p>`
- apostrophes are `&rsquo;`, `&` is `&amp;`, quotes are `&ldquo;`/`&rdquo;`
- a blank line between every block element

Don't reach for pandoc. Its output doesn't match the existing files (literal
curly quotes, different wrapping), so hand-render it.

## Linking it from the two indexes

Add the article to `articles/README.md` under the right numbered heading.
Within a list, new entries go at the end of that category rather than
alphabetically, which is how the existing lists grew.

Categories are: 1. Leadership, 2. Product, 3. Engineering, 4. Relationships and
Communication, 5. Technology, 6. Programing Languages, 7. Front-end Technology,
8. Algorithms, 9. Tools, 10. Misc, 11. Work in Progress. (The typo in
"Programing" is in the live site. Leave it.)

```markdown
* [Reduce conflicts using the Drama Triangle](drama-triangle/)
```

Then the same entry in `articles/index.html`, inside the `<ul>` under the
matching `<h2>`, same position:

```html
<li><a href="drama-triangle/">Reduce conflicts using the Drama Triangle</a></li>
```

Link text matches the article's H1. Both index files open with a
`<!-- numbers -->` marker. Don't touch it and don't renumber the headings.

## Before committing

- [ ] every image is 800px wide (`identify -format "%w\n" articles/<slug>/*`)
- [ ] `README.md`, `index.html`, `_navbar.md` all present in the folder
- [ ] `index.html` title, og tags, and body match the README
- [ ] new bullet in `articles/README.md` and new `<li>` in `articles/index.html`
- [ ] every link in `## Links` is a URL that actually exists

Commit message is the article title, short, matching the log: `Reduce conflicts
using the Drama Triangle`, `Double-Loop Learning`. A follow-up image commit is
just `Drama triangle image`.

## Notes on the neighbours

`articles/template/` is the empty shell to copy from, not a live article. Don't
link it from the indexes. `articles/test/`, `articles/stoicism-test/`, and
`articles/stoicism-test2/` are scratch folders, same deal. `articles/5-pillars/`
is the one folder with no `_navbar.md`; that is an oversight in an old article,
not the pattern to follow.
