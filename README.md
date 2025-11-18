# GameHub

**Live Link:** [https://gamehub51.netlify.app/](https://gamehub51.netlify.app/)

---

## 🔥 Project Overview

**GameHub** is an engaging online library for discovering and supporting indie game developers. Users can browse games, view full details, and install games. The site includes authentication-protected detail pages, user profiles, and smooth UI animations.

---

## 🎯 Key Features

- **Homepage**
  - Banner slider with 3+ game slides (Swiper)
  - Popular games sorted by ratings
  - Newsletter subscription section
- **Game Details Page (Protected)**
  - Full details including description, developer, ratings, download link
  - Only accessible for logged-in users
- **Authentication**
  - Email/password signup & login
  - Google login
  - Strong password validation
  - Forgot password feature
- **User Profile**
  - View and update name, email, photo
  - Logout
- **Routing & Navigation**
  - Dynamic tab titles
  - 404 page
  - Custom route: Show All Games
- **Animations**
  - Framer Motion transitions
  - Hover effects
  - Animated banner slider
- **Responsive UI**
  - Mobile, tablet, desktop optimized

---

## 🧰 Tech Stack & Dependencies

### **Frontend Framework**

- React 19
- React DOM

### **Build Tool**

- Vite 7

### **Styling**

- Tailwind CSS 4
- DaisyUI 5
- @tailwindcss/vite

### **Routing**

- React Router v7

### **Animations**

- Motion

### **UI Utilities**

- React Icons
- Swiper JS
- React Toastify

### **Backend/Auth**

- Firebase 12

### **Development Tools**

- ESLint 9
- TypeScript React types
- Vite React plugin

---

## 📦 Full Dependency List

### **Dependencies**

```
"@tailwindcss/vite": "^4.1.15",
"firebase": "^12.4.0",
"motion": "^12.23.24",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-icons": "^5.5.0",
"react-router": "^7.9.4",
"react-toastify": "^11.0.5",
"swiper": "^12.0.3",
"tailwindcss": "^4.1.15"
```

### **Dev Dependencies**

```
"@eslint/js": "^9.36.0",
"@types/react": "^19.1.16",
"@types/react-dom": "^19.1.9",
"@vitejs/plugin-react": "^5.0.4",
"daisyui": "^5.3.7",
"eslint": "^9.36.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.22",
"globals": "^16.4.0",
"vite": "^7.1.7"
```

---

## 🚀 Run Locally

```
git clone https://github.com/Samioul51/GameHub.git
cd GameHub
npm install
npm run dev
```

### Build for Production

```
npm run build
npm run preview
```

---

## ⚙️ Environment Variables

Create a `.env` file and add:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

---

## 🔐 Authentication Notes

- Firebase Email/Password auth
- Google provider enabled in Firebase console
- Protected Routes redirect unauthenticated users

