export const siteConfig = {
  name: "Amaan Ansari",
  title: "AI & Data Science Engineer",
  description: "Portfolio website of Amaan Ansari",
  accentColor: "#00f3ff",
  social: {
    email: "ansariamaansa0987@gmail.com",
    linkedin: "https://www.linkedin.com/in/amaan-ansariii/",
    twitter: "https://x.com/",
    github: "https://github.com/amaan1230",
  },
  aboutMe:
    "AI and ML Engineer and Data Scientist with a strong focus on Generative AI, Machine Learning, and Data Science. Experienced in full-stack development with Python frameworks like FastAPI and Streamlit, and proficient in building scalable AI-driven applications. Proven track record of delivering high-quality code, optimizing performance, and successfully executing complex projects from concept to deployment.",
  skills: [
    "Python",
    "GenAI",
    "RAG",
    "LLM",
    "LangChain",
    "TensorFlow",
    "Machine Learning",
    "SQL",
    "FastAPI",
    "Streamlit",
    "React",
    "PowerBI",
  ],
  projects: [
    {
      name: "Self-Healing RAG System (Gemini-Optimized)",
      description:
        "Built adaptive retrieval for 300+ page regulatory documents using query rewriting, dynamic top-k retrieval/reranking, and context compression, with LLM-as-a-Judge grounding checks. Benchmarks showed 45–60% fewer hallucinations, 90%+ grounded responses, 70% lower token usage, and 30% better relevance vs fixed-k baselines.",
      link: "https://github.com/amaan1230/Self-healing-RAG-system",
      skills: ["RAG", "Gemini", "LLM-as-a-Judge", "Reranking", "Streamlit"],
    },
    {
      name: "Credit Risk Drift Detection System",
      description:
        "Built a monitoring workflow simulating loan-application streams across 50,000+ historical records to detect model reliability degradation, using PSI and Kolmogorov–Smirnov signals with a Streamlit dashboard for drift indicators and retraining triggers.",
      link: "https://github.com/amaan1230/Loan-Drift-Detection-System",
      skills: ["Python", "PSI", "KS Test", "MLOps", "Streamlit"],
    },
  ],
  experience: [
    {
      company: "Biz Technologies IT Solutions Ltd",
      title: "AI Engineer",
      dateRange: "Feb '26 - Present",
      bullets: [
        "Designed a RAG pipeline with document ingestion, chunking, embeddings, ChromaDB vector search, adaptive retrieval, and context management for LLM-powered question answering.",
        "Contributed to response-quality improvements; internal benchmarks indicated ~40% lower hallucination rates through stronger grounding in retrieved context.",
        "Developed multi-agent workflows for lead generation, compliance validation, and customer engagement using LangGraph, LangChain, FastAPI, and MongoDB-backed services.",
        "Built an AI business automation platform coordinating 3+ agents across lead generation, coaching, and compliance validation, integrating retrieval components and APIs.",
        "Developed an AI email agent for summarizing messages, drafting responses, managing follow-ups, and scheduling meetings via secure Gmail/Outlook OAuth integration.",
        "Collaborated with 3+ engineers on API architecture, system design, code reviews, documentation, and integration of AI capabilities into backend services.",
      ],
    },
    {
      company: "366digitX",
      title: "Developer",
      dateRange: "Aug '25 - Nov '25",
      bullets: [
        "Built and maintained five web applications using FastAPI and Streamlit, supporting implementation, integration, testing, and client handoff.",
        "Translated business requirements into technical specifications and collaborated with product and engineering stakeholders on feature delivery.",
        "Refactored backend architecture and REST API design to improve integration stability and maintainability.",
      ],
    },
    {
      company: "IBM SkillBuild",
      title: "AI & ML Intern",
      dateRange: "Jun '24 - Jul '24",
      bullets: [
        "Developed regression and Random Forest models in Python using IBM Watson AI for predictive analytics tasks, achieving reported accuracy above 90%.",
        "Prepared and analysed datasets, using statistical analysis and visualizations to communicate patterns and business-oriented findings.",
      ],
    },
  ],
  education: [
    {
      school: "Mumbai University",
      degree: "Bachelor's in Artificial Intelligence and Data Science Engineering",
      dateRange: "Jun '21 - May '25",
      achievements: [
        "GPA: 7.45",
      ],
    },
  ],
  achievements: [
    {
      company: "Oracle",
      title: "Generative AI Professional",
      date: "2025",
      description: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0812828A0406379016F61231D89FE733480BD5F7F54E9BE9B4CB4AB906FF1831",
      skills: ["GenAI", "LLM", "RAG"]
    },
    {
      company: "BCG",
      title: "GenAI Job Simulation",
      date: "Sept 2025",
      description: "Hands-on Generative AI simulation focusing on LLM applications, prompt engineering, and enterprise AI problem-solving.",
      credentialId: "rZ2ggbHzPkcQvEznA",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_Frz87JrGbd9CGfKnZ_1757486553153_completion_certificate.pdf",
      skills: ["LLM", "Prompt Engineering", "GenAI"]
    },
    {
      company: "Databricks",
      title: "Generative AI Fundamentals",
      date: "July 2025",
      description: "Covers fundamentals of Generative AI, LLM architectures, training workflows, and production use cases.",
      credentialId: "155548316",
      credentialUrl: "https://credentials.databricks.com/4db7e013-0a60-49f9-8dc6-0bd94ced533f",
      skills: ["LLMs", "Generative AI", "Deep Learning"]
    },
    {
      company: "BCG",
      title: "Data Science Job Simulation",
      date: "June 2025",
      description: "Practical data science experience involving analytics, insights, and business-focused problem solving.",
      credentialId: "wj7Ao2wrhBDDcJvem",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_Frz87JrGbd9CGfKnZ_1748929337908_completion_certificate.pdf",
      skills: ["Data Science", "Analytics", "Business Insights"]
    },
    {
      company: "IBM",
      title: "AI Fundamentals",
      date: "June 2025",
      description: "Foundational AI certification covering ML concepts, neural networks, applications, and AI ethics.",
      credentialUrl: "https://www.credly.com/badges/8542dcec-3dcc-4ef5-85b6-7f8a28c66589/linked_in_profile",
      skills: ["Machine Learning", "Neural Networks", "AI Ethics"]
    },
  ],
};
