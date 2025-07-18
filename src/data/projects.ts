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
