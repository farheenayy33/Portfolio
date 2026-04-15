# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases projects, skills, education, certifications, and open source contributions with smooth animations and a beautiful UI.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Modern UI** - Built with Shadcn UI components and Tailwind CSS
- **Dark Mode Support** - Beautiful dark and light theme support
- **Multiple Sections**:
  - Hero Section
  - About
  - Skills
  - Projects
  - Education
  - Certifications
  - Open Source Contributions
  - Contact
- **Navigation** - Smooth navigation between sections
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast notifications)

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HijabiAvatar.tsx
│   │   ├── Navbar.tsx
│   │   ├── OpenSource.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ui/
│       └── [Shadcn UI components]
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── Home.tsx
│   └── not-found.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📸 Screenshots

### Homepage
[Add screenshot link here]

### About Section
[Add screenshot link here]

### Skills & Projects
[Add screenshot link here]

### Education & Certifications
[Add screenshot link here]

### Open Source & Contact
[Add screenshot link here]

## 🎨 Customization

### Colors & Theme

Edit the theme colors in `tailwind.config.js` and theme provider to match your brand.

### Content

Update the content in individual component files:
- **Hero**: `src/components/portfolio/Hero.tsx`
- **About**: `src/components/portfolio/About.tsx`
- **Skills**: `src/components/portfolio/Skills.tsx`
- **Projects**: `src/components/portfolio/Projects.tsx`
- **Education**: `src/components/portfolio/Education.tsx`
- **Certifications**: `src/components/portfolio/Certifications.tsx`
- **Open Source**: `src/components/portfolio/OpenSource.tsx`
- **Contact**: `src/components/portfolio/Contact.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `components.json` - Component configuration

## 🌐 Deployment

The website can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### GitHub Pages
Build and push the `dist` folder to your GitHub Pages branch.

## 📝 License

This project is licensed under the MIT License.

## 👋 Contact

For questions or feedback, feel free to reach out through the contact section on the website.

---

**Built with ❤️**
