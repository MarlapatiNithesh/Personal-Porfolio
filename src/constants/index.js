export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'CodeSync 🎓',
    position: 'Web Dev Educator || Content Creator',
    img: 'assets/CodeSync.png',
    review:
      'Working with Marlapati Nithesh was an absolute pleasure. He built a full-stack Code Sync app using Socket.io that exceeded our expectations in both functionality and design. His ability to implement real-time connectivity, ensuring smooth synchronization between users, and a responsive UI showcased deep expertise in the MERN stack. His dedication, attention to detail, and problem-solving mindset make him a standout developer in the community. His innovative approach and consistent delivery truly set a benchmark for quality development.',
  },
  {
    id: 2,
    name: 'Abhijith Kumar',
    position: 'FullStack Developer || Tech Enthusiast',
    img: 'assets/review3.png',
    review:
      'Working with Marlapati Nithesh over the past two years has been incredibly inspiring. His deep understanding of fullstack development, especially with MERN and real-time technologies like Socket.io, consistently elevated our projects. Marlapati Nithesh brings not just technical skills but also a problem-solving mindset, always pushing for clean, efficient, and scalable solutions. His dedication and passion make him a standout collaborator and a key asset to any team.',
  },
];

export const myProjects = [
  {
    title: 'Full Stack CodeSync Collaboration App 💻',
    desc: 'A fully functional real-time code collaboration platform, built with the MERN stack, featuring real-time synchronization, code execution, and collaborative drawing.',
    subdesc:
      'The app features real-time collaboration on code editing across multiple files, comprehensive language support, and syntax highlighting for various file types with auto-language detection. Users can create, open, edit, save, delete, and organize files and folders. It integrates code execution directly within the collaboration environment, ensuring instant updates and synchronization across all files. The platform also includes a user-friendly interface for real-time group chatting, notifications for user join and leave events, and an interactive user presence list.',
    href: 'https://code-sync-frontend-mg64.onrender.com',
    texture: '/textures/project/codesync-demo.mp4',
    logo: '/assets/CodeSync.png',
    logoStyle: {
      backgroundColor: '#1E2A47',
      border: '0.2px solid #24345B',
      boxShadow: '0px 0px 60px 0px #3A6D9F',
    },
    features:
      'Real-time collaboration on code editing across multiple files. Create, open, edit, save, delete, and organize files and folders. Option to download the entire codebase as a zip file. Unique room generation with room ID for collaboration. Comprehensive language support for versatile programming. Syntax highlighting for various file types with auto-language detection. Users can execute the code directly within the collaboration environment. Instant updates and synchronization of code changes across all files and folders. Notifications for user join and leave events. User presence list with online/offline status indicators. Real-time group chatting functionality. Real-time tooltip displaying users currently editing. Auto suggestion based on programming language. Option to change font size and font family. Multiple themes for personalized coding experience. Collaborative Drawing: Enable users to draw and sketch collaboratively in real-time. Copilot: An AI-powered assistant that generates code, allowing you to insert, copy, or replace content seamlessly within your files.',
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Express',
        path: '/assets/ExpressJs.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'NodeJs',
        path: '/assets/NodeJs.png',
      },
      {
        id: 4,
        name: 'Socket-io',
        path: '/assets/Socket-io.svg',
      },
      {
        id: 5,
        name:'TypeScript',
        path: '/assets/TypeScript.jpeg',
      },
    ],
    editTool: {
      title: 'CodeSync Edit Tool Features ✏️',
      technologies: [
        {
          name: 'React.js',
          desc: 'A JavaScript library for building user interfaces.',
          logo: '/assets/react.svg',
        },
        {
          name: 'Node.js',
          desc: 'A runtime for building scalable server-side applications.',
          logo: '/assets/NodeJs.png',
        },
        {
          name: 'Express.js',
          desc: 'A web application framework for Node.js to handle HTTP requests.',
          logo: '/assets/ExpressJs.png',
        },
        {
          name: 'Socket.io',
          desc: 'A library for real-time, bidirectional communication between clients and servers.',
          logo: '/assets/socketio.png',
        },
      ],
    },
  },
{
  title: 'Full Stack Ride Booking App 🚖',
  desc: 'A fully functional ride booking app built with the MERN stack, featuring real-time ride tracking, driver management, and user-friendly interface.',
  subdesc:
    'The app features real-time ride tracking for both passengers and drivers, secure JWT authentication, and a dynamic ride booking system. It integrates Google Maps for route navigation, uses Socket.io for real-time ride status updates, and includes a user-friendly admin dashboard for managing drivers and rides. The app ensures a smooth experience with payment integration (for virtual demo) and instant notifications using React Toastify.',
  href: 'https://uber-clone-frontend-jjai.onrender.com',
  texture: '/textures/project/uber-clone-demo.mp4',
  logo: '/assets/uber-logo.png',
  logoStyle: {
    backgroundColor: '#2D3E50',
    border: '0.2px solid #1B2A38',
    boxShadow: '0px 0px 60px 0px #3A6D9F',
  },
  spotlight: '/assets/spotlight-ride.png',
  tags: [
    {
      id: 1,
      name: 'React.js',
      path: '/assets/react.svg',
    },
    {
      id: 2,
      name: 'NodeJs',
      path: '/assets/NodeJs.png',
    },
    {
      id: 3,
      name: 'ExpressJs',
      path: '/assets/ExpressJs.png',
    },
    {
      id: 4,
      name: 'MongoDB',
      path: '/assets/MongoDB.png',
    },
    {
      id: 5,
      name: 'Socket-io',
      path: '/assets/Socket-io.svg',
    },
    {
      id: 6,
      name: 'Google Maps',
      path: '/assets/google.jpeg',
    },
  ],
}
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'FrontEnd Development',
    pos: 'Html-Css-Js',
    duration: '2023 - Present',
    title:
      'HTML, CSS, and JavaScript form the core of my frontend journey. I use them to build responsive layouts, style engaging UIs, and add interactivity—turning designs into dynamic, user-friendly web experiences.',
    icon: '/assets/Html_Css.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'BackEnd Development',
    pos: 'MERN Stack',
    duration: '2024 - Present',
    title:
      'My backend journey with the MERN stack and Socket.io has been all about building fast, scalable, and real-time apps. From creating robust APIs with Node.js and Express to integrating live features with Socket.io, I’ve honed my skills in crafting efficient, full-stack solutions.',
    icon: '/assets/MERNStack.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Full-Stack Next.js Developer',
    pos: 'NextJs-TailwindCss-FramerMotion',
    duration: '2025 - Present',
    title:
      'My full-stack web development journey has been driven by Next.js, the MERN stack, Tailwind CSS, and Framer Motion. Using Next.js for seamless frontend-backend integration, MongoDB and Express for robust APIs, and Tailwind for rapid, responsive UI design, I’ve created feature-rich applications with clean architecture. With Framer Motion, I’ve added smooth, engaging animations that enhance user experience and bring interfaces to life. I’ve built dynamic, scalable, and visually polished applications from end to end.',
    icon: '/assets/NextJs.png',
    animation: 'salute',
  },
];
