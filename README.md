# Wandering Eric 🔵

Your personal site: vlogs, projects, writing, reading, and hobbies in one warm feed.
Built with [Astro](https://astro.build) — fast, free to host, and **you never need a terminal to run it**.

---

## 1. How this site works (30-second version)

- Every post is **one text file** in `src/content/feed/`.
- Everything personal (your name, intro, socials, the "Now" list, About section) lives in **one file**: `src/config.ts`.
- All colors and styling live in **one file**: `src/styles/global.css`.
- When these files change on GitHub, your live site rebuilds itself automatically in about a minute.

That's the whole system. The 11 posts already in the feed folder are **samples** — edit them into real ones or delete them.

---

## 2. Put it online (one-time setup, ~15 minutes, no coding)

You'll create two free accounts and click through a few screens. After this, you never do it again.

### Step A — Put the code on GitHub

1. Go to [github.com](https://github.com) and create a free account (skip if you have one).
2. Click the **+** in the top-right → **New repository**.
3. Name it `wandering-eric`, keep it **Public**, and click **Create repository**.
4. On the next screen, click the small link **"uploading an existing file"**.
5. Unzip the `wandering-eric.zip` you downloaded, open the folder, **select everything inside it**, and drag it all into the GitHub upload box. Wait for every file to finish.
6. Click **Commit changes**.

> If the hidden `.gitignore` file didn't survive the drag (some computers hide it), no problem: in your repo click **Add file → Create new file**, name it `.gitignore`, paste the four lines below, and commit.
> ```
> node_modules/
> dist/
> .astro/
> .DS_Store
> ```

### Step B — Connect Vercel (this is your free hosting)

1. Go to [vercel.com](https://vercel.com) → **Sign up** → choose **Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find `wandering-eric` in the list and click **Import**.
4. Vercel auto-detects Astro. Don't change anything — just click **Deploy**.
5. ~1 minute later: 🎉 you get a live URL like `https://wandering-eric-xxxx.vercel.app`.

### Step C — Tell the site its own address (last step!)

1. In your GitHub repo, open `astro.config.mjs` → click the ✏️ pencil to edit.
2. Change the `site:` line to the URL Vercel just gave you.
3. Commit. (This makes your sitemap, RSS, and social previews point to the right place.)

**You're live.** From now on, any file you edit on GitHub redeploys the site automatically.

---

## 3. Posting (this is your daily workflow)

To post anything: in GitHub, open `src/content/feed/` → **Add file → Create new file** → name it something like `my-post-title.md` (lowercase, dashes, ends in `.md`) → paste a template below → edit → **Commit changes**. Live in ~1 minute.

To edit or delete a post: open the file → ✏️ to edit, or the trash icon to delete.

> This works from your phone too — github.com in a mobile browser, or the GitHub app.

### 📹 Vlog

```md
---
type: vlog
title: My video title
date: 2026-07-09
youtube: ""
duration: "08:24"
location: Kansai
---

A sentence or two about the video. This shows on the vlog's own page.
```

**When your video is on YouTube:** copy the ID — the part after `v=` in the URL.
For `https://www.youtube.com/watch?v=dQw4w9WgXcQ` the ID is `dQw4w9WgXcQ`.
Put it in the quotes: `youtube: "dQw4w9WgXcQ"`.
The site then automatically shows the real thumbnail on the card **and** a fast, privacy-friendly player on the page. Until then, visitors see a tasteful "coming soon" frame.

### ✍️ Writing

```md
---
type: writing
title: My post title
date: 2026-07-09
description: One sentence that appears on the card.
---

Write your article here in plain text.

Blank line = new paragraph. You can also use **bold**, *italics*,
[links](https://example.com), ## headings, > quotes, and - lists.
Reading time is calculated automatically.
```

### 🛠 Project

```md
---
type: project
title: Project name
date: 2026-07-09
description: One-line summary for the card.
tech: Python
status: in progress
link: https://github.com/you/project
---

What it is, why you built it, how it works. (`link` is optional.)
```

### 📚 Reading

```md
---
type: reading
title: Book title
date: 2026-07-09
author: Author Name
description: Optional one-liner for the card.
status: Now reading
---

Your notes on the book (optional). Change status to "Finished" when done.
```

### 🌱 Hobby

```md
---
type: hobby
title: The hobby
date: 2026-07-09
description: One-liner for the card.
meta: 35mm
---

More about it (optional).
```

### Handy extras

- **Drafts:** add `draft: true` under the date → the post is hidden from the live site until you remove it.
- **Order:** the feed always shows newest `date` first.
- **Filenames become URLs:** `night-market.md` → `yoursite.com/vlogs/night-market/`.

---

## 4. Make it yours

| I want to change… | Open this file |
| --- | --- |
| My name, intro, location line, footer sign-off | `src/config.ts` |
| The **Now** list under the hero | `src/config.ts` → `NOW` |
| Social links (replace the `#`s!) | `src/config.ts` → `SOCIALS` |
| The About section + spec card | `src/config.ts` → `ABOUT` |
| Colors (blues, background, gradient) | `src/styles/global.css` → the `:root` block at the top |
| Search/social description | `src/config.ts` → `description` |

The heat-tint gradient, temper blue `#34648c`, and steel-blue footer `#16283a` are all named tokens at the top of the CSS — change a hex code and the whole site follows.

---

## 5. Custom domain (whenever you buy one)

1. Buy a domain anywhere (Namecheap, Cloudflare, Google-successor registrars — ~$10–15/yr).
2. In Vercel: your project → **Settings → Domains** → **Add** → type your domain.
3. Vercel shows you 1–2 DNS records; paste them into your registrar's DNS page.
4. Wait a few minutes; HTTPS is automatic.
5. Update `site:` in `astro.config.mjs` to the new domain.

---

## 6. Running it on your own computer (optional, for tinkering)

Only needed if you want instant local preview while editing:

1. Install [Node.js LTS](https://nodejs.org) (v20+).
2. In a terminal, inside the project folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open the printed `localhost` address. Edits appear live.
4. `npm run build` creates the production site in `dist/`.

---

## 7. If a deploy fails

99% of the time it's a typo in a post's front-matter (the part between `---` lines). Vercel emails you and shows the error log; the message names the file and field. Common causes:

- Missing quotes around values containing `:` — write `title: "Osaka: a walk"` not `title: Osaka: a walk`.
- A `type:` that isn't one of `vlog / writing / project / reading / hobby`.
- A malformed `date:` — use `YYYY-MM-DD`.
- Deleted a field a type requires (e.g. `description` on writing/projects).

Fix the file, commit, and it redeploys.

---

## 8. What's already built in

- **Speed:** static pages, fonts self-hosted, ~zero JavaScript except the feed filter and video player.
- **Lite YouTube player** — loads only a thumbnail until pressed; uses the no-cookie embed.
- **SEO:** per-page titles/descriptions, canonical URLs, Open Graph + Twitter preview image, JSON-LD, `sitemap-index.xml`, `robots.txt`.
- **RSS** at `/rss.xml` so people can subscribe.
- **Smooth page transitions**, keyboard-friendly navigation, honored `prefers-reduced-motion`.
- **A friendly 404** for anyone who wanders off the map.

### Nice upgrades for later (ask me any time)
Analytics (Vercel Analytics or Plausible — one snippet) · comments on writing posts (giscus, free via GitHub) · a newsletter (Buttondown reads your RSS automatically) · a proper photo gallery for the film scans.

---

*Struck an arc in Osaka — 2026.* 🔵
