# BuiltByAshley - Portfolio & Website

**Professional Websites for Service-Based Businesses**

BuiltByAshley.com is the portfolio and business website for Ashley Maria, an HR Analyst turned AI Maker & Automation Strategist. The site showcases services, templates, and portfolio projects while providing a platform for clients to book website creation services.

## 🌟 About

BuiltByAshley offers done-for-you website builds and DIY templates designed to help service-based businesses launch faster and convert better. Services include:

- **Launch-Ready Starter Site** - Custom one-page websites designed, built, and launched in 7 days
- **Website Templates** - Plug-and-play layouts for niche industries (Beauty, Coaches, Local Services, Realtors)
- **AI Workflows & Automation** - Custom AI-powered solutions for business efficiency
- **Web Hosting & Support** - Reliable hosting plans with ongoing maintenance

## ✨ Features

### Portfolio Showcase

- Personal portfolio highlighting AI and web development projects
- Featured projects with images and descriptions
- Skills & technologies showcase
- Contact section with social links

### Service Pages

- **Starter Site** (`/starter-site`) - Detailed service page with pricing, process, and booking
- **Templates** (`/templates`) - Template marketplace with waitlist functionality
- Limited-time offers and promotions

### Legal & Compliance

- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- Cookie Policy (`/cookies`)
- Data Rights (`/data-rights`)

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Analytics:** Google Tag Manager

## 📁 Project Structure

```
app/
├── page.tsx              # Homepage (Portfolio)
├── layout.tsx            # Root layout with GTM
├── starter-site/         # Starter Site service page
├── templates/            # Templates marketplace
├── privacy/              # Privacy Policy
├── terms/                # Terms of Service
├── cookies/              # Cookie Policy
└── data-rights/          # Data Rights page

components/
├── GTM.tsx               # Google Tag Manager integration
├── NavBar.tsx            # Navigation component
└── TemplateCard.tsx      # Template card component

public/
├── assets/               # Project images
│   ├── bootcamp.jpeg
│   ├── data.jpeg
│   ├── resumatch.jpeg
│   └── tripplanner.jpeg
└── profile/              # Profile images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/amaria33/ashleym-portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Optional - for Google Tag Manager:

Create a `.env.local` file:

```bash
NEXT_PUBLIC_GTM_ID=your_gtm_id_here
```

## 🎨 Brand Colors

The site uses a consistent color palette:

- **Primary Pink:** `#E8A9B8`
- **Secondary Gold:** `#D8B878`
- **Light Pink:** `#F4C2C2`
- **Background Cream:** `#FFF9F6`
- **Text Dark:** `#2B2B2B`

## 📄 Routes

- `/` - Homepage (Portfolio)
- `/starter-site` - Starter Site service page
- `/templates` - Website templates marketplace
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/cookies` - Cookie Policy
- `/data-rights` - Data Rights information

## 🔗 External Integrations

- **Payhip** - Template purchases (Beauty Booking Template)
- **Google Forms** - Waitlist signups for coming soon templates
- **Google Tag Manager** - Analytics and tracking

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables (if using GTM)
4. Deploy

The site is optimized for Vercel deployment with automatic builds and deployments on push to main branch.

## 📝 License

© {new Date().getFullYear()} BuiltByAshley. All rights reserved.

## 👤 Contact

- **Website:** [builtbyashley.com](https://builtbyashley.com)
- **Email:** hello@builtbyashley.com
- **LinkedIn:** [linkedin.com/in/ashley-maria](https://www.linkedin.com/in/ashley-maria)
- **GitHub:** [github.com/amaria33](https://github.com/amaria33)

---

Built with ❤️ by Ashley Maria
