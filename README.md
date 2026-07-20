# Ponshankar Agencies Website

Enterprise-grade corporate website for Ponshankar Agencies — a leading provider of industrial piping, water management, and construction solutions.

##  Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom shadcn-inspired component system
- **State Management:** Zustand
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **SEO:** React Helmet Async

## 📁 Project Structure

```
src/
├── app/                    # App configuration
├── assets/                 # Static assets
├── components/
│   ├── animation/          # Reusable animation components
│   ├── common/             # Shared UI components
│   ├── layout/             # Layout components
│   └── ui/                 # Atomic UI components
├── constants/              # App constants
├── data/                   # Mock data
├── hooks/                  # Custom React hooks
├── pages/                  # Page components
├── services/               # API service layer
├── store/                  # Zustand stores
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## 🛠 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, categories, solutions, products, testimonials, FAQ, and CTA |
| `/about` | Company profile, history, vision, mission, values, and timeline |
| `/products` | Product catalog with category filtering and search |
| `/products/:id` | Detailed product view with specifications and gallery |
| `/solutions` | Industry-specific solutions overview |
| `/projects` | Project portfolio with filtering and statistics |
| `/gallery` | Image gallery with lightbox and category filtering |
| `/contact` | Contact form, business info, and map |

## 🎨 Design System

- **Primary Color:** `#004B93` (Industrial Blue)
- **Secondary Color:** `#F97316` (Construction Orange)
- **Font:** Inter (Google Fonts)
- **Breakpoints:** Mobile-first responsive design

## 📱 Responsive Design

All pages are fully responsive across:
- Desktop (1280px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (480px)

## 🔮 Future Backend Integration

The project is structured for seamless Flask backend integration:
- Services layer with Axios
- TanStack Query ready
- API configuration in `/services`
- Mock data separated in `/data`

## 📜 License

© 2024 Ponshankar Agencies. All rights reserved.
