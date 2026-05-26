# Bhumit Vaghela — Full-Stack Developer Portfolio

A premium, high-performance, single-page portfolio website built with modern frontend and backend technologies. This project is fully optimized for speed, responsive design, and features custom interactive animations and a secure email delivery system.

Live Preview: [bhumitvaghela.dev](https://bhumitvaghela.dev)

---

## 🚀 Tech Stack

- **Core**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS v4, Vanilla CSS
- **Animations**: Framer Motion
- **Emails**: Nodemailer
- **Hosting**: Vercel

---

## ✨ Features

- **Responsive Grid System**: Completely optimized fluid layout that snaps into place from ultra-wide displays down to mobile viewports.
- **Micro-Animations**: Custom scroll-based trigger events and high-fidelity physics-based hover interactions (using `Framer Motion`).
- **Dynamic Projects Showcase**: Fetches live repositories from GitHub and falls back to beautifully styled static cards if the GitHub API is unavailable.
- **Nodemailer Integration**: Handles form submissions securely through a serverless backend function, delivering structured alerts to the administrator and a premium corporate auto-reply to the visitor.
- **Clean Structure**: Redundant assets and boilerplate files have been pruned to maintain a lightweight build footprint.

---

## 🛠️ Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js      # Serverless API endpoint for form processing
│   ├── globals.css           # Global custom design tokens and media queries
│   ├── layout.js             # HTML layout, viewport & SEO configuration
│   └── page.js               # Entry page layout composing components
├── components/
│   ├── About.jsx             # Bio, education details, and service pillars
│   ├── Contact.jsx           # Form controls, select dropdowns, and social links
│   ├── Footer.jsx            # Dynamic links, copyright metadata, and social icons
│   ├── Hero.jsx              # Intro banner, floating stats, and image grids
│   ├── MagneticButton.jsx    # Physic-based interactive button wrapper
│   ├── Navigation.jsx        # Sticky header menu with mobile toggle panels
│   ├── Projects.jsx          # Live Git repos grid with symmetric alignment
│   └── Services.jsx          # Scoped service offering rows and tech stacks
├── lib/
│   └── mailer.js             # SMTP transporters and HTML/text email templates
├── public/                   # Static media assets, graphics, and resume files
```

---

## ⚙️ Environment Configuration

To run this project locally or in production, copy `.env.example` to `.env` or `.env.local` and configure your credentials:

```ini
# SMTP Host Server (e.g. smtp.gmail.com)
SMTP_HOST=smtp.gmail.com

# SMTP Port (465 for secure SSL, 587 for TLS)
SMTP_PORT=587

# Your SMTP Authenticated Email address
SMTP_USER=bhumitvaghela71@gmail.com

# Your App-Specific Passcode (Required for Gmail OAuth2)
SMTP_PASS=your-google-app-password

# Email Address to receive new contact submissions
CONTACT_TO_EMAIL=bhumitvaghela71@gmail.com

# Email Address shown to users in their inbox sender field
CONTACT_FROM_EMAIL=bhumitvaghela71@gmail.com
```

> [!NOTE]
> For Gmail users, `SMTP_PASS` must be a **Google App Password**, not your normal Google password. You can generate this in your Google Account Security Settings by turning on 2-Step Verification first.

---

## 💻 Local Setup & Development

### 1. Clone the project and install dependencies
```bash
git clone https://github.com/bhumit1311/bhumit-dev-portfolio.git
cd bhumit-dev-portfolio
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your live portfolio.

### 3. Run production build checks
```bash
npm run build
```

---

## ⚡ Deployment (Continuous Integration via Git)

This project is fully compatible with **Vercel** for instant, zero-configuration hosting:

1. Import this repository from GitHub into your Vercel Dashboard.
2. Under **Project Settings -> Environment Variables**, add your SMTP credentials from your `.env` file.
3. Click **Deploy**. Vercel will build the project and deploy it.
4. Any future changes pushed to your GitHub repository (`git push`) will trigger automatic builds and update your live site.
