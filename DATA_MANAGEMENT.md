# Portfolio Data Management

## Overview

Your portfolio now uses a **centralized data file** (`src/data/portfolioData.js`) that makes it incredibly easy to add, update, or remove content without touching the component code.

## How to Add New Projects

1. Open `src/data/portfolioData.js`
2. Find the `export const projects` array
3. Add a new project object following this structure:

```javascript
{
  id: 7, // Increment from the last project
  title: "Your Project Name",
  subtitle: "Short Description",
  date: "Month Year",
  description: "Detailed description of what the project does",
  impact: "Key metric or achievement",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  tech: ["React.js", "Node.js", "MongoDB"], // Technologies used
  skills: ["Skill 1", "Skill 2"], // Skills demonstrated
  gradient: "from-cyan-400 via-blue-500 to-indigo-600", // Tailwind gradient
  liveUrl: "https://your-project.com", // Optional
  githubUrl: "https://github.com/yourusername/project", // Optional
  image: "" // Optional - path to project image
}
```

## How to Update Personal Information

Edit the `personalInfo` object in `portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  bio: "Your Bio",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1234567890",
  availability: "Your availability status",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};
```

## How to Add Skills

Update the `skills` object:

```javascript
export const skills = {
  languages: [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    // Add more languages
  ],
  frontend: ["React.js", "Vue.js", "Angular"], // Add technologies
  backend: ["Node.js", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  tools: ["Git", "Docker", "Kubernetes"],
  competencies: ["System Design", "DevOps", "Testing"],
};
```

## How to Add Achievements

Add to the `achievements` array:

```javascript
{
  id: 5,
  title: "Achievement Title",
  description: "What you achieved",
  year: "2025",
  icon: "award" // Options: 'award', 'trophy', 'code', 'globe'
}
```

## How to Add Certifications

Add to the `certifications` array:

```javascript
{
  id: 5,
  title: "Certification Name",
  issuer: "Issuing Organization",
  year: "2025"
}
```

## How to Update Timeline

Edit the `timeline` array:

```javascript
{
  year: "2025",
  events: [
    "Event 1",
    "Event 2",
    "Event 3"
  ],
  gradient: "from-cyan-500 to-blue-600"
}
```

## Available Gradient Colors

Use these Tailwind gradient classes for consistent styling:

- `from-cyan-400 via-blue-500 to-indigo-600` - Blue theme
- `from-emerald-400 via-teal-500 to-cyan-600` - Green theme
- `from-purple-400 via-pink-500 to-rose-600` - Purple/Pink theme
- `from-fuchsia-400 via-pink-500 to-rose-600` - Magenta theme
- `from-orange-400 via-red-500 to-pink-600` - Warm theme
- `from-yellow-400 via-orange-500 to-red-600` - Sunset theme

## Tips

- **Always increment IDs** when adding new items
- **Keep descriptions concise** but informative
- **Use consistent formatting** for dates (e.g., "Mar 2025" or "Aug 2024 - Sep 2024")
- **Test locally** after making changes by running `npm start`
- **Commit changes** to version control regularly

## File Structure

```
src/
├── data/
│   └── portfolioData.js  ← Edit this file to update content
├── components/
│   └── portfolio.js      ← Don't edit unless changing design
├── index.css             ← Global styles and design system
└── App.js                ← Main app component
```

## Need Help?

If you encounter any issues or need to add new types of content not covered here, refer to the existing data structure in `portfolioData.js` as a template.
