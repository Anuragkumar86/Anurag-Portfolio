<<<<<<< HEAD
# Anurag-Portfolio
Welcome to my personal portfolio website, built using React, TypeScript, and Tailwind CSS! This project showcases my skills, projects, and experience in a modern, responsive design.

📌 Features  
✅ Fully responsive and mobile-friendly design 📱  
✅ Built with React, TypeScript, and Tailwind CSS ⚡  
✅ Smooth animations and transitions 🎨  
✅ Dynamic project and skills section 💡  
✅ Deployed on Vercel for fast and reliable  performance 🌍  

🛠️ Tech Stack  
Frontend: React, TypeScript, Tailwind CSS  
Deployment: Vercel  

📩 Connect With Me  
📧 Email: anuragkr@gmail.com  
💼 LinkedIn: https://www.linkedin.com/in/anuragkumar86  


🔹 Feel free to explore the code, fork the repo, or suggest improvements! 🚀✨  
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 933c0ad (Initial commit)
