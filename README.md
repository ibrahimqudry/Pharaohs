Pharaohs - Luxury Real Estate Platform

A sophisticated web platform for Pharaohs, a premier real estate company in Aswan, Egypt, specializing in luxury properties and investment opportunities. This React-based application offers a seamless user experience with a bilingual (Arabic/English) interface, a fully customized admin dashboard, and robust client engagement features.
✨ Features

Property Showcase: Elegant display of luxury real estate projects, with a dedicated section for VIP properties fetched dynamically from Firebase.
Bilingual Support: Fully responsive interface supporting Arabic (RTL) and English (LTR) for accessibility across diverse audiences.
Admin Dashboard: Secure, customizable dashboard for managing properties, user applications, and content, accessible only via protected routes (/admin, /admin/dashboard).
Contact Forms: Integrated with EmailJS for seamless client inquiries and feedback.
Careers Portal: Application tracking system for job seekers, with styled forms (via CareerFormStyles.module.css) and Firebase storage.
Dark Mode: Toggleable light/dark themes with ThemeContext.js, applying /backgrounddm.png for dark mode on public routes.
Responsive Navigation: Mobile-friendly header with dropdowns for "Projects" and "More" (via Header.jsx), ensuring single-dropdown functionality for intuitive UX.
WhatsApp Integration: Direct booking via WhatsApp for client convenience.

🛠️ Tech Stack


Frontend: React, Vite, React Router for SPA navigation
Backend: Firebase Firestore for property and application data, Firebase Authentication for admin access
Styling: CSS Modules (Header.module.css, CareerFormStyles.module.css), global index.css for dark mode
Icons: React Icons (FaMoon, FaSun) for theme toggling
Loading: React Spinners (ClipLoader) for project loading states
Communication: EmailJS for contact forms, WhatsApp API for bookings

🚀 Installation
Prerequisites

Node.js (v16 or higher)
npm or yarn
Firebase project with Firestore and Authentication enabled
EmailJS account for contact form integration

Steps
# Clone the repository
git clone https://github.com/EBRAHIM/Pharaohs.git

# Navigate to the project directory
cd Pharaohs

# Install dependencies
npm install

# Create a .env file in the root directory
touch .env

Environment Variables
Add the following to .env:
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

Run the Application
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

Open http://localhost:5173 (default Vite port) to view the app.
📂 Folder Structure
Pharaohs/
├── public/
│   ├── logo.png             # Website logo
│   ├── backgrounddm.png     # Dark mode background
│   └── background3.png      # Light mode background
├── src/
│   ├── components/
│   │   └── Header.jsx       # Responsive header with dropdowns
│   ├── context/
│   │   └── ThemeContext.js  # Dark/light mode context
│   ├── firebase/
│   │   └── config.js        # Firebase configuration
│   ├── styles/
│   │   ├── Header.module.css       # Header-specific styles
│   │   ├── CareerFormStyles.module.css # Careers form styles
│   │   └── index.css               # Global styles (dark mode)
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # Entry point
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation

🖥️ Usage
Public Routes

Home (/): View featured properties and VIP projects.
About (/about): Learn about Pharaohs' mission in Aswan's real estate market.
Contact (/contact): Submit inquiries via EmailJS.
Careers (/careers): Apply for jobs with form submissions stored in Firebase.
Projects (/projects): Browse all projects or specific ones (/projects/:id).
More:
Events (/events): View upcoming events.
Investment (/investment): Explore investment opportunities.
VIP Reviews (/vip-reviews): Read client testimonials.



Admin Routes

Admin Login (/admin): Secure login with Firebase Authentication.
Admin Dashboard (/admin/dashboard): Manage properties, applications, and content (no dark mode).

Features in Action

Theme Toggle: Switch between light and dark modes using the header’s theme button (FaMoon/FaSun).
Dropdown Navigation: Access "Projects" and "More" via dropdowns, with only one open at a time.
Mobile Responsiveness: Tested across devices (<320px, 321-768px, >769px) with Header.module.css.
WhatsApp Booking: Click "احجز وحدتك" to book via WhatsApp.

🧪 Testing

Dropdowns:
Click "Projects" to open; click "More" to close "Projects" and open "More".
Click outside or press Escape to close all dropdowns.


Mobile:
Toggle the menu on mobile (<768px) and test dropdowns.


Dark Mode:
Toggle dark mode to verify /backgrounddm.png and body.dark-mode styles.


Admin Routes:
Access /admin and confirm no dark mode.


Firebase:
Ensure projects load from Firestore without errors.


Accessibility:
Test with a screen reader for aria-expanded and aria-controls.



🤝 Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

Please follow the Code of Conduct and ensure code adheres to ESLint/Prettier standards.
🐛 Bug Reporting

Open an issue on GitHub with a detailed description, screenshots, and steps to reproduce.
Include browser, device, and console logs if applicable.

📜 License
MIT License. See LICENSE for details.
📬 Contact

Email: support@pharaohs-aswan.com
WhatsApp: +201149136352
GitHub: EBRAHIM/Pharaohs


Built with 💛 for Pharaohs, Aswan’s leading luxury real estate company.