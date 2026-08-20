---
name: recipe
description: Add a new recipe to the CookBook at cook/. Creates the recipe folder (README.md, index.html, _navbar.md), resizes photos with convert-image.sh, and links it from cook/README.md and cook/index.html. Use when the user says "add a recipe", "new recipe", pastes a recipe or a link to one, or drops food photos to write up.
---

# Adding a recipe

Every recipe is a folder under `cook/` with a slug name: lowercase, hyphenated,
no articles. `gochujang-coconut-chicken`, `miso-chicken-thighs`.

The folder holds four things:

- `README.md` - the source of truth
- `index.html` - the same content, hand-rendered (this is what GitHub Pages serves)
- `_navbar.md` - one fixed line
- images, resized to 800px wide

Two index files also need a new line each: `cook/README.md` and `cook/index.html`.

## What to ask for

If the user hasn't given them, you need: the title, ingredients, instructions, and
a source link if there is one. Prep/cook/total time and servings go in the summary
line; estimate them from the instructions if the source doesn't say, and say that
you estimated. If the user pasted a URL, fetch it rather than asking them to
retype the recipe.

Do not invent a source. Recipes with no link just omit the `Source:` footer.

## Images

Any image the user provides gets resized before it is committed:

```
./convert-image.sh cook/<slug>/<image>.jpeg
```

The script resizes in place to 800px wide with `magick`. It has two leftover
lines at the bottom (`magick input.jpg ...` and `identify image.jpg`) that fail
with "unable to open image"; ignore those, the resize on line 9 already ran.

Run it on every image, every time. The last few recipes went in at 1600px because
this step was skipped. Name images after the dish or the main ingredient
(`chicken.jpeg`, `chicken2.jpeg`, `thai-soup.jpeg`), and put them right after the
H1 in the README.

## README.md template

```markdown
# Gochujang & coconut chicken

![chicken](chicken.jpeg)
![chicken](chicken2.jpeg)

**Summary**

Prep time: 10 mins | Cook time: 30 mins | Total time: 40 mins | Servings: 4

**Ingredients:**

Marinade:

- 6 chicken thighs, deboned
- 2 tsp gochugaru flakes

Sauce:

- 1 small red onion, diced
- 1 400ml tin coconut milk

**Instructions:**

1. Toss chicken with the spices and a bit of oil.
2. Fry skin side down until crispy.

---

Source: [Instagram](https://www.instagram.com/reels/DWOBD5QDXeU/)
```

Sub-group the ingredients (Marinade / Sauce / Meatballs / Soup) only when the
recipe really has separate components. A flat list is fine otherwise.

Older recipes in `cook/` predate the `**Summary**` block and the `Source:` footer.
Follow this template, not them.

## _navbar.md

One line, identical in every recipe folder:

```markdown
[Oren Home](/) > [Cook](cook/)
```

## index.html

Copy `cook/gochujang-coconut-chicken/index.html` and replace the title, the og
tags, and the `<article>` body. The head, the CSS block, and the breadcrumb
paragraph never change.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gochujang & coconut chicken</title>
<meta property="og:title" content="Gochujang & coconut chicken" />
<meta property="og:image" content="https://oren.github.io/cook/gochujang-coconut-chicken/chicken.jpeg" />
<meta property="og:type" content="website" />
```

The three `og:` lines are only there when the recipe has a photo. Point
`og:image` at the finished dish, with the full `https://oren.github.io/cook/<slug>/`
prefix. That is often the last photo rather than the first, since photo sets tend
to run ingredients, then cooking, then the plated result. The link preview should
show the food as you eat it, not a bag of goji berries on a cutting board.
Recipes without photos go straight from `<title>` to the stylesheet link.

Body opens with the breadcrumb, then the article:

```html
<body data-color-mode="dark" data-dark-theme="dark">
<p><a href="https://oren.github.io">Oren Home</a> &gt; <a href="https://oren.github.io/cook/">Cook</a></p>

<article class="markdown-body">
```

Rendering conventions inside the article, matching what's already there:

- `**Summary**` becomes `<p><strong>Summary</strong></p>`, each ingredient group
  heading its own `<p>`, ingredient lists `<ul>`, instructions `<ol>`
- both images in a single `<p>`, one `<img>` per line
- `---` becomes `<hr>`
- apostrophes are `&rsquo;`, `&` is `&amp;`, quotes are `&ldquo;`/`&rdquo;`
- fractions are typographic: `1/2` becomes `<sup>1</sup>&frasl;<sub>2</sub>`

Don't reach for pandoc here. Its output doesn't match the existing files (it emits
literal curly quotes and leaves fractions alone), so hand-render it.

## Linking it from the two indexes

Add the recipe to `cook/README.md` under the right heading, alphabetically within
that list. Categories are: Chicken, Fish & Seafood, Soups & Stews, Salads,
Vegetables, Eggs & Breakfast, Grains & Legumes, Snacks & Drinks, Collections,
"I want to try these recipes", Misc.

```markdown
* [Gochujang & Coconut Chicken](gochujang-coconut-chicken/)
```

Then the same entry in `cook/index.html`, inside the `<ul>` under the matching
`<h2>`, same alphabetical position:

```html
<li><a href="gochujang-coconut-chicken/">Gochujang &amp; Coconut Chicken</a></li>
```

The link text here is title case even when the H1 in the recipe isn't.

## Before committing

- [ ] every image is 800px wide (`identify -format "%w\n" cook/<slug>/*`)
- [ ] `README.md`, `index.html`, `_navbar.md` all present in the folder
- [ ] `index.html` title, og tags, and body match the README
- [ ] new bullet in `cook/README.md` and new `<li>` in `cook/index.html`

Commit message is just the dish name, lowercase-ish and short, matching the log:
`Gochujang & coconut chicken`, `miso chicken`, `lentil soup`.

## Note on cook/temp

`cook/temp/` is a leftover staging folder holding a Thai meatball soup that was
never finished (its image is missing and nothing links to it). Don't use it as a
template and don't treat it as a live recipe.
