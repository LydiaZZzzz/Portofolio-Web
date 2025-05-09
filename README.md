# Yunqing Zhao Portfolio Web

This is a personal portfolio website built with React. It is designed to be modern, interactive, and easy to customize. The site showcases creative and technical work through a clean, responsive interface.

## Features
- Multi-page layout with routing (Home, Projects, Project Details, About, Contact)
- Horizontally scrolling animated project section
- Custom animated cursor and starry background
- Responsive design for all screen sizes
- Physics-based floating skill bubbles
- Easy content and image replacement
- Smooth animations and interactive UI

## Tech Stack
- **React** (functional components)
- **react-router-dom** (client-side routing)
- **framer-motion** (animations)
- **matter-js** (physics-based effects)
- **CSS** (custom, responsive styling)

## How to Run the Project

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm start
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)
3. **Build for production**
   ```bash
   npm run build
   ```

## Customizing Content & Images

- **Project Images**: Place your images in the `public/` folder, named as:
  - `project1.png`, `project2.png`, ... (project covers)
  - `detail1-2.png`, `detail1-3.png`, ... (project detail images)
- **Skills Icons**: Add PNGs to the `public/icons/` folder named `placeholder1.png` to `placeholder9.png` (or rename as needed).
- **Text Content**: Edit the `projects` array in `src/pages/Home.jsx` and `src/pages/Projects.jsx` for project details. Update the homepage intro and About Me in `src/pages/Home.jsx` and `src/pages/About.jsx`.
