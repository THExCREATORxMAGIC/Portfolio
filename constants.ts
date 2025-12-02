import { ResumeData, Wallpaper } from "./types";

export const RESUME: ResumeData = {
  contact: {
    email: "prateek.mishra.cs@gmail.com",
    phone: "7668990337",
    location: "Mathura, Uttar Pradesh",
    social: [
      { label: "Github", url: "https://github.com/THExCREATORxMAGIC/" },
      { label: "Linkedin", url: "https://www.linkedin.com/in/prateek--mishra/" }
    ]
  },
  profile: "Highly motivated developer with proficiency in Python and machine learning model development. Brings 1.5 years of experience as a developer intern and 6 months as an analyst. Currently, I'm engrossed in generative AI projects and actively seeking developer opportunities.",
  skills: [
    { category: "Technical Skills", items: ["C Programming", "Go Lang", "Python", "Java", "Machine Learning", "React", "JavaScript", "HTML5", "CSS3", "PHP", "IoT", "Artificial Intelligence", "Analysis", "SQL", "NoSQL", "PostgreSQL", "Fast API", "Restful API"] },
    { category: "Frameworks", items: ["Django", "Tensorflow", "Pytorch", "PySpark", "OpenCV", "Laravel", "Matplotlib", "Pandas", "Numpy", "Kaggle", "Flask", "Clerk", "Bootstrap", "Git"] },
    { category: "Tools", items: ["Power BI", "Tableau", "Heroku", "Kubernetes", "Docker", "Google Collab", "PTC Thingworx", "LeadSquared"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Analytical Skills", "Communication", "Adaptability", "OOP", "DSA", "Business Development", "Critical Think"] }
  ],
  experience: [
    
    {
      company: "RUS Education [MEDUHUB]",
      role: "Software Devepment Engineer 1",
      period: "Sep 2023 - Present",
      location: "Noida, Uttar Pradesh",
      points: ["I worked on building a low-latency live-streaming platform for coaching programs using WebRTC/HLS. I developed core session APIs for starting, stopping, and recording sessions while integrating real-time features like chat, Q&A, and instructor controls. I also implemented secure stream access using JWT and signed URLs, added automatic recording and VOD generation, and optimized playback performance using adaptive bitrate streaming and CDN integration. Additionally, I contributed to monitoring stream health and latency to ensure a smooth and reliable viewer experience."]
    },
    {
      company: "Hike Education",
      role: "Data Analyst",
      period: "May 2023 – Sep 2023",
      location: "Gurgaon, Haryana",
      points: ["Collaborated with developers to identify a critical drop-off point in a learning module, resulting in a 20% increase in completion rates."]
    },
    {
      company: "Dysmech Consultancy Services",
      role: "Python Developer",
      period: "Jul 2022 – Oct 2022",
      location: "Mathura, India",
      points: ["Utilized advanced machine learning algorithms and libraries like TensorFlow, PyTorch, scikit-learn, and Keras to develop predictive models for key business metrics, enhancing decision-making and strategic planning."]
    },
    {
      company: "DCS",
      role: "ML Big Data Internship",
      period: "Jun 2021 – Jul 2022",
      location: "Mathura, India",
      points: ["Utilized Python for data processing, automation, and integrating third-party libraries for efficient workflows and timely delivery of high-quality software solutions."]
    }
  ],
  projects: [
    {
      title: "GenAI Contextual Chatbot",
      tech: "Python, LangChain, OpenAI API, Vector DB",
      description: "Developed a sophisticated RAG (Retrieval-Augmented Generation) chatbot capable of querying large internal documentation sets. Implemented semantic search using Pinecone and reduced support ticket resolution time by 40%."
    },
    {
      title: "Credit Card Fraud Detection",
      tech: "ML Trained Model, Python, Kaggle",
      description: "The model uses historical credit card data to identify fraud patterns, enabling a predictive model to detect similar patterns in real-time transactions with 98% accuracy."
    },
    {
      title: "Autonomous Drone Navigation",
      tech: "Reinforcement Learning, PyTorch, Unity ML-Agents",
      description: "Built a simulation environment for drone pathfinding in complex urban landscapes using PPO algorithms. Achieved a 95% success rate in obstacle avoidance without pre-mapped data."
    },
    {
      title: "Social Distancing App",
      tech: "Python, OpenCV, Image Processing",
      description: "Uses cameras and algorithms to monitor and enforce social distancing guidelines in public spaces, detecting physical distance and recording videos."
    },
    {
      title: "Smart Agriculture IoT System",
      tech: "IoT, Python, Flask, MQTT, Raspberry Pi",
      description: "Designed an end-to-end IoT ecosystem utilizing soil moisture sensors to automate irrigation. Data is visualized on a real-time dashboard built with React and Flask."
    },
    {
      title: "Realtime Emotion Detection",
      tech: "OpenCV, Python, Image Processing",
      description: "Computer vision algorithms detect facial landmarks and emotions, extracting key features for customer feedback and sentiment analysis."
    },
    {
      title: "Predictive Stock Analyzer",
      tech: "NLP, BERT, Python, Kafka",
      description: "A real-time data pipeline that ingests news streams and Twitter data to perform sentiment analysis using BERT, correlating social sentiment with stock price movements."
    },
    {
      title: "Heart Disease Analysis",
      tech: "ML Model, Supervised Learning",
      description: "Predicts and analyzes the impact of lifestyle choices on the likelihood of developing heart disease using supervised learning."
    }
  ],
  education: {
    degree: "Bachelor of Technology",
    university: "GLA University",
    period: "Jun 2019 – Jun 2023",
    location: "Mathura, Uttar Pradesh",
    details: "Obtained a full-time B.Tech degree in Computer Science, specializing in machine learning and IoT."
  }
};

export const WALLPAPERS: Wallpaper[] = [
  {
    id: 'bloom-blue',
    name: 'Windows 11 Bloom',
    url: 'https://4kwallpapers.com/images/wallpapers/windows-11-original-stock-5k-display-3840x2160-5629.jpg',
    thumbnail: 'https://4kwallpapers.com/images/wallpapers/windows-11-original-stock-5k-display-3840x2160-5629.jpg'
  },
  {
    id: 'bloom-dark',
    name: 'Windows Bloom Dark',
    url: 'https://images.wallpaperscraft.com/image/single/flower_bud_bloom_138631_3840x2160.jpg',
    thumbnail: 'https://images.wallpaperscraft.com/image/single/flower_bud_bloom_138631_3840x2160.jpg'
  },
  {
    id: 'bloom-light',
    name: 'Windows Bloom Light',
    url: 'https://4kwallpapers.com/images/wallpapers/windows-11-light-white-background-official-stock-wallpaper-3840x2160-5638.jpg',
    thumbnail: 'https://4kwallpapers.com/images/wallpapers/windows-11-light-white-background-official-stock-wallpaper-3840x2160-5638.jpg'
  },
  {
    id: 'abstract-shapes',
    name: 'Abstract Shapes',
    url: 'https://4kwallpapers.com/images/wallpapers/windows-11-stock-abstract-blue-background-liquid-3840x2160-5634.jpg',
    thumbnail: 'https://4kwallpapers.com/images/wallpapers/windows-11-stock-abstract-blue-background-liquid-3840x2160-5634.jpg'
  },
  {
    id: 'sunrise',
    name: 'Sunrise Glow',
    url: 'https://images.wallpapersden.com/image/download/windows-11-sunrise_bWdlZ2mUmZqaraWkpJRmbmdlrWZlbWU.jpg',
    thumbnail: 'https://images.wallpapersden.com/image/download/windows-11-sunrise_bWdlZ2mUmZqaraWkpJRmbmdlrWZlbWU.jpg'
  },
   {
    id: 'flow',
    name: 'Flow',
    url: 'https://4kwallpapers.com/images/wallpapers/windows-11-abstract-background-blue-background-flow-stock-3840x2160-5630.jpg',
    thumbnail: 'https://4kwallpapers.com/images/wallpapers/windows-11-abstract-background-blue-background-flow-stock-3840x2160-5630.jpg'
  }
];

export const WALLPAPER_URL = WALLPAPERS[0].url;
export const AVATAR_URL = "https://ui-avatars.com/api/?name=Prateek+Mishra&background=0D8ABC&color=fff&size=128";
