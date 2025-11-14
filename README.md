
# SEUM – Legal Consultation Website  
A modern, bilingual (EN/AR), responsive website for **SEUM**, a Saudi law firm providing clear, practical legal advice and tailored corporate legal solutions.

---

## 📌 Overview

SEUM is a Saudi law firm offering strategic legal consultation, compliance advisory, corporate services, and tailored legal support for organizations operating in the Kingdom of Saudi Arabia.

This repository contains the full front-end source code for the official SEUM website, built with a modern UI, bilingual support, responsive layouts, and optimized user experience.

---

## 🚀 Features

- 🇸🇦 **Bilingual Language Support (EN/AR)** with RTL layout switching  
- 🎨 **Modern UI/UX** using Tailwind CSS & shadcn/ui  
- 📱 **Fully Responsive** on desktop, tablet, and mobile  
- 🖼️ **3D Carousel**, animated hero, and interactive sections  
- ⚡ **High-performance** React + Vite architecture  
- ♻️ **Reusable Components** for easy scaling  
- 🌙 Smooth animations and accessibility-friendly design  
- 🧩 Clean folder structure & maintainable codebase  

---

## 🛠 Tech Stack

### **Frontend**
- React (TypeScript)
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide Icons
- Custom animation utilities

### **Other**
- ESLint + Prettier
- GitHub for version control  
- PNPM or NPM package manager

---

## 📂 Folder Structure

```bash
src/
 ├── assets/             # Static assets (images, icons, etc.)
 ├── components/         # Reusable UI components
 ├── contexts/           # Global context (Language, Theme…)
 ├── styles/             # Global CSS & Tailwind configs
 ├── main.tsx            # App entry point
 └── App.tsx             # Root component

```

**Use your preferred IDE**


The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Languages
The project supports English and Arabic, automatically switching layouts (LTR/RTL) based on user selection.
Translation keys are stored inside:
src/contexts/LanguageContext.tsx
