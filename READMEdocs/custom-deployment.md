# Sapna Suthar | Portfolio

Personal portfolio website built with React and Bootstrap. It is based on the open-source developer portfolio template by hashirshoaeb (LGPL-3.0).

**Hosting:** this site is hosted on [Netlify](https://www.netlify.com/).

---

## How to Edit the Site

Almost everything on the page is controlled by one file:

```
src/editable-stuff/config.js
```

Edit the text, save, and the local dev server reloads automatically.

### What to change in `config.js`

| Section (variable) | What it controls |
| --- | --- |
| `mainBody` | Name, tagline, and GitHub / LinkedIn icon links |
| `about` | About Me text, profile picture, and resume PDF |
| `repos` | Recent GitHub projects (pulled automatically from the GitHub API) |
| `schoolProjects` | School project cards (title, subtitle, image, report link, repo, description) |
| `personalProjects` | Personal / hackathon project cards |
| `skills` | `hardSkills` (languages) and `softSkills` (tools), each with an icon |
| `experiences` | Work, team, and leadership experience cards |
| `getInTouch` | Closing message and contact prompt |
| `leadership` | Optional section (currently hidden with `show: false`) |

Every section has a `show: true/false` switch to turn it on or off.

### Adding a project or experience

Copy an existing entry in the matching `data: [ ... ]` list, paste it below, and edit the fields:

```js
{
  title: 'Project Name',
  subtitle: 'Short tagline',
  img: require('../assets/img/projects/YourImage.png'),
  link: 'https://link-to-report-or-demo',   // optional
  repo: 'https://github.com/sapnasuthar/repo', // optional
  description: 'One or two sentences about what you built.',
},
```

Experiences use `picture`, `title`, `company`, `dates`, `description`, and `link`.

### Images and files

- Project images: `src/assets/img/projects/`
- Skill icons: `src/assets/img/skills/`
- Experience logos: `src/assets/img/experiences/`
- Resume PDF: `src/assets/img/SapnaSutharResume.pdf` (replace the file, keep the name)
- Profile picture: `src/editable-stuff/`

Every `require('...')` in `config.js` must point to a file that exists, or the build will fail with `Module not found`. If you add a skill or experience, add its image first (or use a temporary placeholder with the right filename).

### Other files worth knowing

- `public/index.html`: page title and meta description
- `public/social-image.png`: thumbnail shown when the link is shared

---

## Running Locally

Requires Node 20 (see `.nvmrc`).

```bash
nvm use          # or: nvm install
npm install
npm start
```

Then open http://localhost:3000. The first compile can take a minute or two, so wait for `Compiled successfully!`.

Do **not** run `npm audit fix --force` on this project. It can break `react-scripts`.

---

## Deployment (Netlify)

The site is hosted on Netlify and deploys from the GitHub repository.

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 20 (matches `.nvmrc`)

To update the live site, commit and push your changes to the connected branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Netlify then rebuilds and publishes automatically. You can check build status and logs in the Netlify dashboard.

Note: the original template deployed to GitHub Pages with `npm run deploy`. That step is not needed with Netlify.

---

## Tech Stack

React, Bootstrap, Typist, GitHub API

## License

LGPL-3.0, inherited from the original template.