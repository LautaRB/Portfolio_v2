export interface TechItem {
  name: string;
  icon: string;
  color: string;
}


export const flatStackData: TechItem[] = [
  // --- FRONTEND ---
  { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
  { name: "Astro", icon: "simple-icons:astro", color: "#FF5D01" },
  { name: "HTML5", icon: "simple-icons:html5", color: "#E34F26" },
  { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
  { name: "Bootstrap", icon: "simple-icons:bootstrap", color: "#7952B3" },
  
  // --- BACKEND ---
  { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#339933" },
  { name: "Express", icon: "simple-icons:express", color: "#000000" },
  { name: "Spring Boot", icon: "simple-icons:springboot", color: "#6DB33F" },
  { name: "MySQL", icon: "simple-icons:mysql", color: "#4479A1" },
  { name: "MongoDB", icon: "simple-icons:mongodb", color: "#47A248" },
  
  // --- LENGUAJES & TOOLS ---
  { name: "Java", icon: "simple-icons:openjdk", color: "#E76F00" },
  { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
  { name: "C", icon: "simple-icons:c", color: "#A8B9CC" },
  { name: "Git", icon: "simple-icons:git", color: "#F05032" },
  { name: "GitHub", icon: "simple-icons:github", color: "#ffffffff" },
  { name: "VS Code", icon: "simple-icons:visualstudiocode", color: "#007ACC" },
  { name: "npm", icon: "simple-icons:npm", color: "#CB3837" },
];