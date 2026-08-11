
// ============================================
// QUANTUM PORTFOLIO - DATA FILE
// ============================================

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "ðŸ“± Social Dashboard",
        description: "Comprehensive social media management dashboard with real-time analytics and AI-powered insights.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg",
        tech: ["Kotlin", "Compose", "Firebase"],
        github: "https://github.com/moekyawaung-tech/social-dashboard",
        demo: "#",
        category: "android"
    },
    {
        id: 2,
        title: "ðŸ’¼ POS Ultimate Pro Max",
        description: "Complete point of sale system with inventory, billing, reports, multi-user support and advanced analytics.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image_1_buwgls.png",
        tech: ["Kotlin", "Firestore", "MVVM"],
        github: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
        demo: "#",
        category: "android"
    },
    {
        id: 3,
        title: "ðŸŒ¤ï¸ Weather App",
        description: "Real-time weather tracking with OpenWeather API, location services, and beautiful animations.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png",
        tech: ["Kotlin", "Retrofit", "Room"],
        github: "https://github.com/moekyawaung-tech/Weather-app",
        demo: "#",
        category: "android"
    },
    {
        id: 4,
        title: "ðŸŽ® Game Collection",
        description: "Classic games collection including Snake, Tetris, 2048 with touch controls and scoring system.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png",
        tech: ["Kotlin", "Canvas", "Physics"],
        github: "https://github.com/moekyawaung-tech/game-collection",
        demo: "#",
        category: "game"
    },
    {
        id: 5,
        title: "ðŸŽ¯ Video Player",
        description: "Feature-rich video player with gesture controls, subtitles, playlists and casting capabilities.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png",
        tech: ["Kotlin", "ExoPlayer", "HLS"],
        github: "https://github.com/moekyawaung-tech/video-player",
        demo: "#",
        category: "android"
    },
    {
        id: 6,
        title: "ðŸ’¼ Job Portal App",
        description: "Job searching platform with resume builder, AI job matching, and interview prep tools.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png",
        tech: ["Kotlin", "Firestore", "ML Kit"],
        github: "https://github.com/moekyawaung-tech/Job-Portal-App",
        demo: "#",
        category: "android"
    },
    {
        id: 7,
        title: "âœˆï¸ Thailand Travel",
        description: "Travel companion with local guides, interactive maps, and trip planning features.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795675037_heh9xk.png",
        tech: ["Kotlin", "Maps", "Compose"],
        github: "https://github.com/moekyawaung-tech/thailand-travel",
        demo: "#",
        category: "android"
    },
    {
        id: 8,
        title: "ðŸ“± PWA App",
        description: "Progressive Web App with offline-first architecture and cross-platform capabilities.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747386/image-1_1_khsx9s.png",
        tech: ["Kotlin", "Compose", "PWA"],
        github: "https://github.com/moekyawaung-tech/pwa-app",
        demo: "#",
        category: "android"
    },
    {
        id: 9,
        title: "ðŸŽµ Music Player",
        description: "Music player app with equalizer, playlists, sleep timer, and lyrics display.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp",
        tech: ["Kotlin", "MediaPlayer", "Compose"],
        github: "https://github.com/moekyawaung-tech",
        demo: "#",
        category: "android"
    },
    {
        id: 10,
        title: "ðŸ’¬ Chat App",
        description: "Real-time chat application with encryption, group chats, and media sharing.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
        tech: ["Kotlin", "Firestore", "WebSocket"],
        github: "https://github.com/moekyawaung-tech",
        demo: "#",
        category: "android"
    },
    {
        id: 11,
        title: "ðŸ’° Money Tracker",
        description: "Personal finance tracker with budget planning, expense categories, and analytics.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763532/MKA_11_jbijtv.webp",
        tech: ["Kotlin", "Room", "Charts"],
        github: "https://github.com/moekyawaung-tech/Daily-planner-app",
        demo: "#",
        category: "android"
    },
    {
        id: 12,
        title: "ðŸ’¸ Crypto App",
        description: "Cryptocurrency tracker with live prices, portfolio management, and news.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778773531/MKA_22_felevo.webp",
        tech: ["Kotlin", "WebSocket", "MVVM"],
        github: "https://github.com/moekyawaung-tech",
        demo: "#",
        category: "android"
    },
    {
        id: 13,
        title: "ðŸ“Š Admin Dashboard",
        description: "Powerful admin panel with data visualization, user management, and role-based access.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png",
        tech: ["Kotlin", "Compose", "MPAndroidChart"],
        github: "https://github.com/moekyawaung-tech",
        demo: "#",
        category: "android"
    },
    {
        id: 14,
        title: "âš½ World Cup App",
        description: "World Cup tracker with live scores, fixtures, standings, and notifications.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747391/image_mplr5r.png",
        tech: ["Kotlin", "REST API", "Coroutines"],
        github: "https://github.com/moekyawaung-tech",
        demo: "#",
        category: "android"
    },
    {
        id: 15,
        title: "ðŸ›’ E-commerce App",
        description: "Complete shopping app with cart, payments, order tracking, and wishlist features.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp",
        tech: ["Kotlin", "Firebase", "Payments"],
        github: "https://github.com/moekyawaung-tech",
        demo: "#",
        category: "android"
    },
    {
        id: 16,
        title: "ðŸ“ Todo App",
        description: "Productivity app with tasks, reminders, categories, and priority levels.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp",
        tech: ["Kotlin", "Room", "Notifications"],
        github: "https://github.com/moekyawaung-tech/javascript-todo",
        demo: "#",
        category: "android"
    }
];

// Certificates Data
const certificatesData = [
    { 
        name: "Kotlin for Android Development", 
        category: "Programming Languages", 
        date: "2024-03-15", 
        id: "cert_kotlin_001",
        icon: "ðŸ…º"
    },
    { 
        name: "Java Programming Fundamentals", 
        category: "Programming Languages", 
        date: "2024-02-20", 
        id: "cert_java_002",
        icon: "â˜•" 
    },
    { 
        name: "Jetpack Compose Mastery", 
        category: "Mobile & App Dev", 
        date: "2024-04-10", 
        id: "cert_compose_003",
        icon: "ðŸŽ¨" 
    },
    { 
        name: "Clean Architecture in Android", 
        category: "Software Engineering", 
        date: "2024-05-05", 
        id: "cert_arch_004",
        icon: "ðŸ—ï¸" 
    },
    { 
        name: "Firebase for Mobile Apps", 
        category: "Mobile & App Dev", 
        date: "2024-03-30", 
        id: "cert_firebase_005",
        icon: "ðŸ”¥" 
    },
    { 
        name: "Python Programming", 
        category: "Programming Languages", 
        date: "2023-11-12", 
        id: "cert_python_006",
        icon: "ðŸ" 
    },
    { 
        name: "REST API Design & Development", 
        category: "Web Development", 
        date: "2024-01-25", 
        id: "cert_rest_007",
        icon: "ðŸ”—" 
    },
    { 
        name: "SQL & Database Management", 
        category: "Databases", 
        date: "2023-12-01", 
        id: "cert_sql_008",
        icon: "ðŸ—„ï¸" 
    },
    { 
        name: "Machine Learning Basics", 
        category: "AI & Data Science", 
        date: "2024-06-10", 
        id: "cert_ml_009",
        icon: "ðŸ¤–" 
    },
    { 
        name: "Cybersecurity Essentials", 
        category: "Security & DevOps", 
        date: "2024-07-01", 
        id: "cert_sec_010",
        icon: "ðŸ”" 
    },
    { 
        name: "Blockchain Technology", 
        category: "Blockchain", 
        date: "2024-02-15", 
        id: "cert_block_011",
        icon: "â›“ï¸" 
    },
    { 
        name: "Git & Version Control", 
        category: "Software Engineering", 
        date: "2023-10-20", 
        id: "cert_git_012",
        icon: "ðŸ™" 
    },
    { 
        name: "Docker & Containerization", 
        category: "Security & DevOps", 
        date: "2024-05-20", 
        id: "cert_docker_013",
        icon: "ðŸ³" 
    },
    { 
        name: "JavaScript Essentials", 
        category: "Programming Languages", 
        date: "2023-09-15", 
        id: "cert_js_014",
        icon: "ðŸŸ¨" 
    },
    { 
        name: "TypeScript Advanced", 
        category: "Programming Languages", 
        date: "2023-11-01", 
        id: "cert_ts_015",
        icon: "ðŸ”·" 
    },
    { 
        name: "React Native Fundamentals", 
        category: "Mobile & App Dev", 
        date: "2024-03-01", 
        id: "cert_rn_016",
        icon: "âš›ï¸" 
    },
    { 
        name: "Data Structures & Algorithms", 
        category: "Programming Languages", 
        date: "2023-12-15", 
        id: "cert_dsa_017",
        icon: "ðŸ“Š" 
    },
    { 
        name: "Cloud Computing (AWS)", 
        category: "Security & DevOps", 
        date: "2024-06-25", 
        id: "cert_aws_018",
        icon: "â˜ï¸" 
    },
    { 
        name: "React.js Development", 
        category: "Web Development", 
        date: "2024-01-10", 
        id: "cert_react_019",
        icon: "âš›ï¸" 
    },
    { 
        name: "HTML5 & CSS3 Mastery", 
        category: "Web Development", 
        date: "2023-08-15", 
        id: "cert_html_020",
        icon: "ðŸŒ" 
    },
    { 
        name: "Android Testing & CI/CD", 
        category: "Software Engineering", 
        date: "2024-07-15", 
        id: "cert_testing_021",
        icon: "âœ…" 
    },
    { 
        name: "GraphQL Fundamentals", 
        category: "Web Development", 
        date: "2024-02-01", 
        id: "cert_graphql_022",
        icon: "ðŸ“¡" 
    },
    { 
        name: "Flutter Basics", 
        category: "Mobile & App Dev", 
        date: "2024-04-01", 
        id: "cert_flutter_023",
        icon: "ðŸ¦‹" 
    },
    { 
        name: "Agile & Scrum Methodology", 
        category: "Software Engineering", 
        date: "2023-11-20", 
        id: "cert_agile_024",
        icon: "ðŸ”„" 
    }
    // Add more certificates...
];

// GitHub Accounts
const githubAccounts = [
    "https://moekyawaung.github.io/",
    "https://moekyawaung-tech.github.io/",
    "https://Dev-moe-kyawaung.github.io/",
    "https://moekyawaung-cyber.github.io/",
    "https://moekyawaung-dev.github.io/",
    "https://moekyawaung-designer.github.io/",
    "https://moekyawaung-web.github.io/",
    "https://moekyawaung-creator.github.io/",
    "https://Moe-KyawAung.github.io/",
    "https://moekyawaung-senior.github.io/",
    "https://moekyawaung-developer.github.io/",
    "https://moekyawaung-graduate.github.io/",
    "https://moekyawaung-edu.github.io/",
    "https://moekyawaung-linux.github.io/",
    "https://moekyawaung-coder.github.io/",
    "https://moekyawaung-bangkok.github.io/",
    "https://moekyawaung-china.github.io/",
    "https://moekyawaung-hack.github.io/",
    "https://moekyawaung-google.github.io/",
    "https://moekyawaung-microsoft.github.io/",
    "https://moekyawaung.co.github.io/",
    "https://moekyawaung-google.github.io/",
    "https://moekyawaung2026.github.io/",
    "https://MoeKyawAung-code.github.io/",
    "https://moekyawaung-webdeveloper.github.io/",
    "https://moekyawaung-mk.github.io/",
    "https://Moekyawaung-Development.github.io/",
    "https://moekyawaung-myanmar.github.io/"
];

// Lovable Apps
const lovableApps = [
    {
        title: "Portfolio Builder",
        description: "Create stunning CVs in minutes",
        url: "https://happy-cv-creator.lovable.app",
        icon: "ðŸ“„"
    },
    {
        title: "Personal Bio",
        description: "My personal bio page template",
        url: "https://moekyawaungmybio.lovable.app/",
        icon: "ðŸ‘¤"
    },
    {
        title: "URL Shortener",
        description: "Clean URL management tool",
        url: "https://moekyaw-url.lovable.app",
        icon: "ðŸ”—"
    },
    {
        title: "Developer Portfolio",
        description: "Developer showcase template",
        url: "https://moekyawaung-dev.lovable.app",
        icon: "ðŸ’»"
    },
    {
        title: "CV Palette",
        description: "CV design system with colors",
        url: "https://the-cv-palette.lovable.app",
        icon: "ðŸŽ¨"
    },
    {
        title: "Profile Hub",
        description: "Professional profile aggregator",
        url: "https://moe-kyaw-aung.lovable.app",
        icon: "ðŸŒŸ"
    },
    {
        title: "Code Gallery",
        description: "Showcase your coding projects",
        url: "https://joy-codify-life.lovable.app/",
        icon: "ðŸ’¡"
    },
    {
        title: "GitHub Portfolio",
        description: "GitHub-integrated portfolio",
        url: "https://moekyawaung-github.lovable.app",
        icon: "ðŸ™"
    },
    {
        title: "App Skills",
        description: "Display your app skills visually",
        url: "https://app-skill-gallery.lovable.app",
        icon: "ðŸ“Š"
    },
    {
        title: "Myanmar CV",
        description: "Localized CV template",
        url: "https://moekyawaung-myanmar.lovable.app",
        icon: "ðŸ‡²ðŸ‡²"
    }
];

// Blog Posts
const blogPosts = [
    {
        title: "Getting Started with Jetpack Compose",
        excerpt: "Learn the fundamentals of Jetpack Compose and modern Android UI development.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg",
        date: "2024-12-15",
        category: "Android",
        readTime: "5 min"
    },
    {
        title: "Clean Architecture in Android Projects",
        excerpt: "Mastering the art of scalable and maintainable Android app architecture.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png",
        date: "2024-12-10",
        category: "Architecture",
        readTime: "8 min"
    },
    {
        title: "Implementing Firebase Authentication",
        excerpt: "Step-by-step guide to implementing secure authentication with Firebase Auth.",
        image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png",
        date: "2024-12-05",
        category: "Firebase",
        readTime: "6 min"
    }
];

// Social Links
const socialLinks = {
    github: "https://github.com/Dev-moe-kyawaung",
    linkedin: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
    youtube: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG",
    gravatar: "https://gravatar.com/moekyawaung13721",
    flickr: "https://www.flickr.com/people/204037451@N06",
    bluesky: "https://bsky.app/profile/moekyawaung96.bsky.social",
    tumblr: "https://www.tumblr.com/moekyawaung",
    vimeo: "https://vimeo.com/user252414232",
    slack: "https://moekyawaung.slack.com/",
    paypal: "https://www.paypal.com/paypalme/my/profile",
    website: "http://moekyawaung2026.strikingly.com"
};

// Email Collection
const emailCollection = [
    "moekyawaung@programmer.net",
    "moekyawaung@technologist.com",
    "moekyawaung@engineer.com",
    "moekyawaung@mail.com",
    "moekyawaung@linuxmail.org",
    "moekyawaung@hackermail.com",
    "moekyawaung@graduate.org",
    "moekyawaung@techie.com",
    "moekyawaung@socialogist.com",
    "moekyawaung@publicist.com"
];

