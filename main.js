const { createApp } = Vue;

createApp({
  data() {
    return {
      isDark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
      profile: {
        name: "Satwinder R. Jeerh",
        title: "Frontend Developer - Student",
        location: "Pampanga, Philippines",
        email: "srjeerh09@gmail.com",
        phone: "+63 920 561 4310",
        tags: ["Vue.js", "JavaScript", "CSS", "Responsive UI", "HTML", "Python", "Java", "PHP", "MySQL", "NoSQL", "Git", "Bash", "Tailwind css"],
        summary:
          "A 3rd year student who pursues the art of technology without stopping",
        links: [
          { label: "Portfolio", url: "https://satwinder-stack.github.io/Portfolio/" },
          { label: "GitHub", url: "https://github.com/Satwinder-stack" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/satwinder-jeerh-120331322/" }
        ]
      },
      skills: [
        { category: "Frontend", items: ["Vue 3", "Vite", "HTML", "CSS", "Tailwind css", "Javascript"] },
        { category: "UI", items: ["Responsive Design", "Design Systems", "Wireframing & Prototyping"] },
        { category: "Backend", items: ["Node.js", "Express", "REST", "MongoDB", "PostgreSQL", "Java", "PHP", "Python", "SQL", "NoSQL"] },
        { category: "Tools", items: ["Git", "Vscode", "NPM", "PyCharm", "Sublime", "Figma", "Wireshark"] },
        { category: "Operating Systems", items: ["Windows", "Linux", "IOS"]},
      ],
      experience: [
        {
          title: "Web Development student",
          company: "Holy Angel University",
          location: "Angeles, Pampanga",
          start: "2023-06",
          end: "Present",
          bullets: [
            "1-time president lister, 3-time dean's lister",
            "Joined multiple coding events in the university",
            "Joined multiple organizations, especially Code Geeks"
                    ],
          tech: ["Python", "Java", "HTML", "CSS", "Tailwind CSS", "Linux", "JavaScript", "PHP", "NoSQL"]
        },
      ],

      projects: [
        {
          name: "Smart Parking System",
          description: "A full-stack web application that manages user parking based on the area, the user can reserve parking spots for a specific amount per hour. It also has a well-protected admin side with a physical user key login access.          ",
          tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
          links: [{ label: "GitHub", url: "https://github.com/Satwinder-stack/Smart-Parking-System" }]
        },
        {
          name: "Self-made Finance Database",
          description: "A whole database that I made from scratch that can add, remove, and store data inside specified weeks on a year. It also computes & graphs the data if the person wants to.",
          tech: ["Python"],
          links: [{ label: "GitHub", url: "https://github.com/Satwinder-stack/self-made-finance-database-" }]
        }
      ],
      education: [
        {
          school: "Holy Angel University",
          degree: "BS Information Technology, specializing in Web Development",
          location: "Angeles, Philippines",
          start: "2023-06",
          end: "present",
          details: "Consistent lister, 1-time president's lister, 3-time dean's lister. Also joined multiple coding events and seminars related to technology during my 2 years."
        }
      ],
      certs: [
        { name: "Backend Development and APIs", issuer: "Freecodecamp", year: 2025 },
        { name: "Endpoint Security", issuer: "Cisco", year: 2025 },
        { name: "Legacy Javascript Algorithms & Data Structures", issuer: "Freecodecamp", year: 2025 },
        { name: "CCNA: Introduction to Networks", issuer: "Cisco", year: 2025 },
        { name: "Introduction to Cybersecurity", issuer: "Cisco", year: 2025 },
        { name: "Relational Database", issuer: "Freecodecamp", year: 2025 },
        { name: "Google UI/UX Design Specialization", issuer: "Coursera", year: 2024 },
        { name: "Responsive Web Design", issuer: "Freecodecamp", year: 2024 },
        { name: "Comptia ITF+", issuer: "CompTIA", year: 2023 },
      ],
      languages: [
        { name: "English", level: "Fluent" },
        { name: "Filipino", level: "Fluent" },
        { name: "Japanese", level: "N4" },
      ],
      interests: ["Web Development", "Project Development", "Cybersecurity", "Networking"]
    };
  },
  mounted() {
    const saved = localStorage.getItem("resume-theme");
    if (saved === "dark") this.isDark = true;
    if (saved === "light") this.isDark = false;
    document.body.classList.toggle("dark", this.isDark);
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      document.body.classList.toggle("dark", this.isDark);
      localStorage.setItem("resume-theme", this.isDark ? "dark" : "light");
    },
    printResume() {
      window.print();
    },
    formatRange(start, end) {
      if (!start) return "";
      const isPresent = (val) => val && val.toLowerCase() === "present";
      const fmt = (s) => {
        if (!s || isPresent(s)) return "Present";
        const [y, m] = s.split("-");
        const date = new Date(Number(y), Number(m ? m - 1 : 0), 1);
        if (isNaN(date.getTime())) return "";
        return date.toLocaleString(undefined, { month: "short", year: "numeric" });
      };
      let range = `${fmt(start)} — ${isPresent(end) ? "Present" : fmt(end)}`;
      let dur = this.duration(start, end);
      return dur ? `${range} | ${dur}` : range;
    },

    duration(start, end) {
      if (!start) return "";
      const isPresent = (val) => val && val.toLowerCase() === "present";
      const s = new Date(start + "-01");
      const e = end && !isPresent(end) ? new Date(end + "-01") : new Date();
      if (isNaN(s.getTime()) || isNaN(e.getTime()) || e < s) return "";
      let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
      const years = Math.floor(months / 12);
      months = months % 12;
      const ys = years ? `${years} yr${years > 1 ? "s" : ""}` : "";
      const ms = months ? `${months} mo${months > 1 ? "s" : ""}` : "";
      return [ys, ms].filter(Boolean).join(" ");
    }
  }
}).mount("#app");
