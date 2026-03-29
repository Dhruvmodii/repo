# Portfolio — Setup & Deployment Guide

A modern personal portfolio with a hidden admin panel powered by Decap CMS and Netlify Identity.

---

## 🚀 Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

---

## 📁 Project Structure

```
portfolio/
├── content/              ← Edit your portfolio data here (JSON files)
│   ├── site.json           Personal info, bio, social links
│   ├── projects.json       Project list
│   ├── skills.json         Skill categories
│   └── experience.json     Work history
│
├── public/admin/         ← Decap CMS admin panel (do not modify)
│   ├── index.html
│   └── config.yml          CMS schema configuration
│
├── src/
│   ├── components/         All UI components
│   ├── pages/              Portfolio page
│   ├── hooks/              useInView scroll hook
│   └── utils/data.js       Data loader
│
├── netlify.toml          ← Netlify build + redirect config
├── vite.config.js
└── tailwind.config.js
```

---

## 🌐 Deploy to Netlify

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and log in
2. Click **"Add new site" → "Import an existing project"**
3. Choose GitHub and select your repository
4. Build settings should auto-detect from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

### Step 3: Enable Netlify Identity

1. In Netlify dashboard → **Site configuration → Identity**
2. Click **"Enable Identity"**
3. Under **Registration**, set to **"Invite only"** (important!)
4. Under **Services → Git Gateway**, click **"Enable Git Gateway"**

### Step 4: Invite yourself as admin

1. In Netlify dashboard → **Identity → Invite users**
2. Enter your email address
3. Check your email and accept the invite — this sets up your admin password

### Step 5: Access the admin panel

Visit: `https://YOUR-SITE.netlify.app/admin`

Log in with the email/password from Step 4.

---

## ✏️ Editing Content

### Via Admin Panel (recommended, no code needed)
- Visit `/admin` on your live site
- Log in with Netlify Identity
- Edit Site Info, Projects, Skills, or Experience
- Click **Publish** — triggers a new deploy automatically

### Via JSON files (for bulk edits or local development)
Edit files in `/content/`:

- **`site.json`** — name, bio, email, social links, resume URL
- **`projects.json`** — project list (array)
- **`skills.json`** — skill categories (array)
- **`experience.json`** — work history (array)

Push changes to GitHub → Netlify auto-deploys.

---

## 🎨 Customisation

### Colors
Edit `tailwind.config.js`:
- `ink` palette — base neutral colors
- `accent` — the gold highlight color (`#c8a96e` by default)

### Fonts
Edit `index.html` Google Fonts import and `tailwind.config.js` `fontFamily` section.

### Stats in About section
Edit the `stats` array in `src/components/About.jsx`.

---

## 📬 Contact Form

The contact form uses **Netlify Forms** — it works automatically when deployed to Netlify. No backend needed.

To view submissions: Netlify dashboard → **Forms**

---

## 🔐 Security Notes

- Admin panel is at `/admin` — it's not linked anywhere in the public UI
- Protected by Netlify Identity login
- Invite-only registration prevents unauthorized signups
- No admin routes are exposed in the navigation

---

## 📄 Resume

Place your resume PDF at `public/resume.pdf` and it will be downloadable via the CV button on the homepage.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React + Vite | Frontend framework |
| Tailwind CSS | Styling |
| Decap CMS | Admin panel / content management |
| Netlify Identity | Admin authentication |
| Netlify Forms | Contact form backend |
| Netlify | Hosting + CI/CD |
