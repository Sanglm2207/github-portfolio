export interface Project {
  title: string;
  short_desc: string;
  description: string;
  result: string;
  startDate: string;
  endDate: string;
  techs: string[];
  images?: string[];
  link: string;
}

export const projects: Project[] = [
  {
    "title": "Mobile App 'TaskFlow'",
    "short_desc": "A cross-platform mobile application (iOS/Android) that helps users effectively organize and manage personal and team tasks.",
    "description": "Developed the entire user interface and functionality of the application using React Native, ensuring smooth performance. Built core features such as creating and managing tasks, setting reminders, categorizing by project, and assigning tasks to team members. Integrated backend APIs for real-time data synchronization. Used Expo to simplify the build process and deployment to app stores.",
    "result": "Completed a fully functional task management application with a modern UI/UX. The product was highly rated for its stability and convenience, demonstrating professional mobile app development capabilities.",
    "startDate": "Jan 2025",
    "endDate": "Mar 2025",
    "techs": [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    "title": "English Learning Mobile App",
    "short_desc": "A mobile app for learning vocabulary and improving listening skills through short, interactive lessons built with React Native.",
    "description": "Designed and developed an engaging user interface focused on a friendly learning experience. Built modules for vocabulary by topic, multiple-choice quizzes, and listening practice features. Integrated third-party libraries for audio processing and offline data storage. Ensured the app runs smoothly and is optimized for both iOS and Android.",
    "result": "Launched an effective English learning app that helps users improve their vocabulary and listening skills. The project demonstrates the ability to build complex educational applications with React Native.",
    "startDate": "Apr 2025",
    "endDate": "Jul 2025",
    "techs": [
      "React Native",
      "Expo",
      "Firebase"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    "title": "Social Networking Platform 'Spotlight'",
    "short_desc": "A social networking platform for developers, allowing them to share code snippets, engage in discussions, and connect with the community.",
    "description": "Built the entire frontend interface with ReactJS, using Redux for efficient state management. Developed features such as posting, commenting, interactions (likes/shares), and searching by tag. Integrated backend APIs to handle user and post data. Ensured high performance and a smooth user experience through rendering optimization.",
    "result": "Completed a specialized social networking platform for developers with a full set of basic features. The project demonstrates the ability to build complex and highly interactive web applications with ReactJS.",
    "startDate": "Feb 2025",
    "endDate": "May 2025",
    "techs": [
      "ReactJS",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    "title": "Project Management Dashboard 'ProjectVue'",
    "short_desc": "A web dashboard application that helps teams track progress, manage tasks, and analyze project data.",
    "description": "Developed the user interface and intuitive data charts using Vue.js. Built features such as: Kanban board, Gantt chart, progress reports, and team member management. Used Vuex for centralized state management, ensuring data is always synchronized. Integrated APIs to fetch and send project data, ensuring real-time updates.",
    "result": "Completed an efficient project management dashboard with clear charts and metrics, helping teams easily monitor progress. The project showcases in-depth skills with Vue.js in building complex applications.",
    "startDate": "Mar 2025",
    "endDate": "Jun 2025",
    "techs": [
      "Vue.js",
      "Vuex",
      "Node.js",
      "Express",
      "MySQL"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    "title": "Technology Event Landing Page 'TechSummit 2025'",
    "short_desc": "A static landing page promoting a technology event, focusing on page load speed and SEO.",
    "description": "Built the landing page using Next.js, leveraging Static Site Generation (SSG) to create static HTML pages. Optimized page performance by compressing images, implementing lazy loading, and code splitting. Designed a responsive layout to ensure the interface displays well on all devices. Added sections such as: event agenda, speakers, partners, and a registration form.",
    "result": "Completed an event landing page with extremely fast load speeds, achieving high scores on performance testing tools like Lighthouse. The project demonstrates the ability to work with Next.js for efficient static websites.",
    "startDate": "May 2024",
    "endDate": "Sep 2024",
    "techs": [
      "Next.js",
      "ReactJS",
      "Tailwind CSS"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    "title": "Programming Course Landing Page",
    "short_desc": "A landing page promoting an online programming course, focused on attracting new students.",
    "description": "Used Next.js to build the landing page, with reusable components. Integrated sections: course introduction, learning roadmap, testimonials from past students, and a registration CTA (Call-to-Action). Ensured the website is search engine friendly (SEO) and optimized for mobile. Connected the registration form to an email marketing service.",
    "result": "Completed an attractive and effective landing page that helps increase the conversion rate from visitors to students. The project demonstrates the ability to use Next.js to build high-performance marketing websites.",
    "startDate": "Jun 2024",
    "endDate": "Jul 2024",
    "techs": [
      "Next.js",
      "ReactJS",
      "SCSS"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    "title": "Cloud Storage App Landing Page",
    "short_desc": "A landing page to introduce a new cloud storage application, highlighting its key features and benefits.",
    "description": "Developed the landing page with Next.js, using smooth animations and scroll effects to create an impressive user experience. Designed separate sections to showcase main features, service packages, and pricing. Integrated high-quality images and video illustrations. Ensured the website loads quickly and is responsive on all devices.",
    "result": "Completed a professional, intuitive landing page that helps users easily grasp information and trust the product. The project demonstrates the ability to build complex static websites with Next.js and supporting libraries.",
    "startDate": "JUL 2024",
    "endDate": "NOV 2024",
    "techs": [
      "Next.js",
      "ReactJS",
      "Framer Motion"
    ],
    "images": [],
    "link": "https://www.kaidev99.com/#"
  },
  {
    title: "Movie App – Mobile Movie Tracker",
    short_desc: "A React Native mobile app to discover, search, and save movies, built in 2 weeks using TMDB API.",
    description: `
        <p>A cross-platform mobile application developed within 2 weeks using <strong>React Native</strong> and <strong>Expo</strong> to help users explore trending movies and track their favorites on the go.</p>
        <ul class="list-disc list-inside">
          <li>Integrated with <strong>TMDB API</strong> to fetch live movie data including ratings, trailers, posters, and genres.</li>
          <li>Built intuitive UI with movie lists, detail screens, and real-time search.</li>
          <li>Implemented <strong>favorites</strong> feature stored in <strong>AsyncStorage</strong>.</li>
          <li>Responsive design compatible with both iOS and Android.</li>
        </ul>
      `,
    result: `
        <ul class="list-disc list-inside">
          <li>Completed and published MVP in <strong>14 days</strong>.</li>
          <li>Optimized app performance with lazy image loading and efficient list virtualization.</li>
          <li>Tested across multiple devices with consistent UX and smooth navigation.</li>
        </ul>
      `,
    startDate: "Jun 2025",
    endDate: "Jun 2025",
    techs: ["React Native", "Expo", "TMDB API", "TypeScript"],
    images: [
      "movie1.png",
      "movie2.png",
      "movie3.png",
      "movie4.png",
      "movie5.png",
      "movie6.png",
      "movie7.png"
    ],
    link: "#"
  },
  {
    title: "Task Management Platform",
    short_desc: "Taskcover is a unique, AI-enhanced project and task management to streamline workflows.",
    description: `
      <p>A real-time task and team management system designed to streamline agency workflows and improve productivity.</p>
      <ul class="list-disc list-inside">
        <li>Designed microservice architecture using <strong>Spring Boot</strong>, <strong>Redis</strong>, and <strong>MongoDB</strong>.</li>
        <li>Integrated <strong>WebSocket</strong> and async processing to support 1000+ concurrent users.</li>
        <li>Implemented concurrency optimization and task prioritization.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Reduced task processing time by <strong>30%</strong>.</li>
        <li>Achieved <strong>99.9%</strong> system uptime via Docker & CI/CD pipelines.</li>
      </ul>
    `,
    startDate: "May 2023",
    endDate: "Mar 2025",
    techs: ["NodeJs", "React"],
    link: "https://www.taskcover.com/",
    images: [
      "https://i.imgur.com/1Z5k3bD.png",
      "https://i.imgur.com/2X9m4aF.png",
      "https://i.imgur.com/3Y8g5dG.png",
    ],
  },
  {
    title: "E-commerce Platform",
    short_desc: "A full-stack e-commerce solution with React, Java, MySQL, and Kafka.",
    description: `
      <p>Built a scalable e-commerce system with admin dashboard, inventory tracking, and secure checkout.</p>
      <ul class="list-disc list-inside">
        <li>Implemented event-driven backend using <strong>Kafka</strong>.</li>
        <li>Integrated <strong>payment gateway</strong> and <strong>user role</strong> management.</li>
        <li>Provided REST APIs for mobile apps and frontend clients.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Processed 10,000+ orders/month reliably.</li>
        <li>Achieved 20% faster order processing through caching strategies.</li>
      </ul>
    `,
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    techs: ["Java", "React"],
    link: "#",
    images: [
      "https://i.imgur.com/4Z6k7hD.png",
      "https://i.imgur.com/5A8j9fG.png",
      "https://i.imgur.com/6B3k2dH.png",
    ],
  },
  {
    title: "Personal Blog",
    short_desc: "My personal blog where I share my thoughts on programming and technology.",
    description: `
      <p>A technical blog built using modern static site generation with markdown-based posts.</p>
      <ul class="list-disc list-inside">
        <li>Supports syntax highlighting, tag filtering, and full-text search.</li>
        <li>Deployed on Vercel with blazing-fast load time.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>10K+ monthly readers and 50+ articles published.</li>
        <li>Highly optimized for SEO and Core Web Vitals.</li>
      </ul>
    `,
    startDate: "Jul 2023",
    endDate: "Present",
    techs: ["NextJs", "MongoDB"],
    link: "https://blog.kaidev99.com",
    images: [
      "https://i.imgur.com/7C8k3dH.png",
      "https://i.imgur.com/8D9k4fG.png",
      "https://i.imgur.com/9E3k2dH.png",
    ],
  },
  {
    title: "Crypto Trace Real-Time",
    short_desc: "A real-time cryptocurrency tracker with Next.js 15, Material UI, and Redis.",
    description: `
      <p>A dashboard to track crypto prices, changes, and charts in real-time.</p>
      <ul class="list-disc list-inside">
        <li>Built frontend with <strong>Next.js App Router</strong> and <strong>Material UI</strong>.</li>
        <li>Fetched and streamed data using <strong>Redis Pub/Sub</strong>.</li>
        <li>Mobile responsive with clean visual design.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Handled 100+ simultaneous users with real-time updates.</li>
        <li>Reduced external API calls by 50% via smart caching.</li>
      </ul>
    `,
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    techs: ["NextJs", "Redis"],
    link: "https://trace-code.kaidev99.com",
    images: [
      "https://i.imgur.com/10F8k3D.png",
      "https://i.imgur.com/11G9k4F.png",
      "https://i.imgur.com/12H3k2D.png",
    ],
  },
  {
    title: "Enterprise Management System",
    short_desc: "A complete enterprise system built with Angular, Spring Boot, and Oracle.",
    description: `
      <p>Internal system managing HR, finance, and reports across departments.</p>
      <ul class="list-disc list-inside">
        <li>Developed ETL jobs, financial reporting, and approval workflows.</li>
        <li>Collaborated with BA, QA teams to ensure delivery.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Improved report generation time by 40%.</li>
        <li>Reduced system errors with structured logging and monitoring.</li>
      </ul>
    `,
    startDate: "2021",
    endDate: "2022",
    techs: ["Spring Boot", "Angular"],
    link: "#",
    images: [
      "https://i.imgur.com/13I8k3D.png",
      "https://i.imgur.com/14J9k4F.png",
      "https://i.imgur.com/15K3k2D.png",
    ],
  },
  {
    title: "Lifetek – Government Document Storage",
    short_desc: "A secure, cloud-based digital document management platform for government departments.",
    description: `
      <p>Handled sensitive digital documents with workflows like signature, versioning, and auto-deletion.</p>
      <ul class="list-disc list-inside">
        <li>Applied sharding + indexing for performance.</li>
        <li>Worked with large datasets (1M+ docs/month).</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Query time reduced by 40% for large document retrieval.</li>
        <li>System passed multiple security audits for gov deployment.</li>
      </ul>
    `,
    startDate: "May 2023",
    endDate: "Mar 2025",
    techs: ["NodeJs", "React"],
    link: "https://lifetek.funix.edu.vn",
    images: [
      "https://i.imgur.com/16L8k3D.png",
      "https://i.imgur.com/17M9k4F.png",
      "https://i.imgur.com/18N3k2D.png",
    ],
  },
  {
    title: "FUNiX LMS Platform",
    short_desc: "An e-learning platform serving 20K+ students with mentor interaction and assignment tracking.",
    description: `
      <p>Added features like mentor booking, assignment review, and real-time notifications.</p>
      <ul class="list-disc list-inside">
        <li>Optimized <strong>PL/SQL</strong> stored procedures and data access layers.</li>
        <li>Improved user experience and reduced loading times.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Served 20,000+ learners with 99% uptime.</li>
        <li>Boosted backend response time by 25%.</li>
      </ul>
    `,
    startDate: "2023",
    endDate: "2024",
    techs: ["Spring Boot", "PL/SQL"],
    link: "https://courses.funix.edu.vn",
    images: [
      "https://i.imgur.com/19N8k3D.png",
      "https://i.imgur.com/20O9k4F.png",
      "https://i.imgur.com/21P3k2D.png",
    ],
  },
  {
    title: "Chat Discord GPT – AI Assistant",
    short_desc: "AI-powered Discord bot that provides real-time Q&A assistance for learners.",
    description: `
      <p>Integrated <strong>OpenAI GPT API</strong> into a Discord bot to answer student questions.</p>
      <ul class="list-disc list-inside">
        <li>Used <strong>Discord.js</strong> and Node.js backend.</li>
        <li>Stored chat history and allowed context-based queries.</li>
      </ul>
    `,
    result: `
      <ul class="list-disc list-inside">
        <li>Reduced manual support effort by 60%.</li>
        <li>Students reported increased satisfaction and faster answers.</li>
      </ul>
    `,
    startDate: "2024",
    endDate: "2024",
    techs: ["NodeJs", "OpenAI"],
    link: "#",
    images: [
      "https://i.imgur.com/22Q8k3D.png",
      "https://i.imgur.com/23R9k4F.png",
      "https://i.imgur.com/24S3k2D.png",
    ],
  },
];
