# Branden Nguyen - Software Developer Resume Web Application

A responsive web application showcasing the technical experience, education, security clearance, skills, and collegiate athletics of **Branden Nguyen**. Built with **React 18**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Live Demo & Deployment

This application is configured for deployment with a live public URL. You can host it for free on **GitHub Pages**, **Vercel**, or **Netlify**.

### Option 1: GitHub Pages (Recommended)
1. **Initialize and push to your GitHub repository:**
   ```bash
   git remote add origin https://github.com/BrandenWin/ResumeApp.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to GitHub Pages (Live URL):**
   ```bash
   npm run deploy
   ```
   > Your app will be live at `https://BrandenWin.github.io/ResumeApp/`!

---

### Option 2: Vercel (Instant 1-Click Deployment)
1. Push your code to GitHub (steps above).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Keep the default build settings (Vite is auto-detected) and click **"Deploy"**.
5. You'll receive a live URL like `https://branden-nguyen-resume.vercel.app`.

---

### Option 3: Netlify
1. Push your code to GitHub.
2. Go to [netlify.com](https://app.netlify.com) and click **"Add new site" -> "Import an existing project"**.
3. Select your GitHub repository. Netlify will auto-detect Vite build commands (`npm run build`, publish directory `dist`).
4. Click **"Deploy site"**.

---

## 💻 Local Development

To run the project locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🛠️ Tech Stack & Features

- **Frontend**: React 18, Tailwind CSS, Lucide React Icons, Vite
- **Active TS/SCI Security Clearance Badge**: Prominently displayed with security verification indicators
- **Interactive Experience Timeline**: All 5 roles with company locations, key metrics, and skills breakdown
- **Skills Directory with Search**: Categorized into Languages, Frameworks, Cloud/DevOps, Databases, and Security & Networking with live search filter
- **Education & Coursework**: University of Maryland & Towson University with Dean's List and Coursework badges
- **Athletics Spotlight**: Towson University Division I Men's Golf Team student-athlete highlight
- **Print / PDF Export Mode**: Standardized printable layout formatted for 1-click printing or saving as PDF
- **Easy Data Customization**: All resume contents are centrally managed in `src/data/resumeData.js`

---

## 📁 Project Structure

```
ResumeApp/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with quick navigation & PDF button
│   │   ├── Hero.jsx            # Profile hero, TS/SCI badge, contact buttons
│   │   ├── Experience.jsx      # Work history timeline with skill filter
│   │   ├── Skills.jsx          # Categorized skills grid with search
│   │   ├── Education.jsx       # UMD & Towson degrees and coursework
│   │   ├── Affiliations.jsx    # Division I Golf Team athletics spotlight
│   │   ├── PrintResume.jsx     # Print / PDF export modal
│   │   └── ContactFooter.jsx   # Contact CTA and footer
│   ├── data/
│   │   └── resumeData.js       # Central data model for all resume content
│   ├── App.jsx                 # Main layout and modal state
│   ├── index.css               # Tailwind CSS & print styles
│   └── main.jsx                # App entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```
