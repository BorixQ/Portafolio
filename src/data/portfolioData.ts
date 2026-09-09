import { Project, Achievement, Experience, Education, SkillCategory, SocialLink, Language } from '@/types/portfolio';

export const personalInfo = {
  name: "Borix Axel Quiroz Cruz",
  tagline: {
    es: "Físico, Científico de Datos & Ingeniero de Software Backend",
    en: "Physicist, Data Scientist & Backend Software Engineer",
  },
  shortBio: {
    es: "Físico con sólida formación analítica y Ganador Global del NASA Space Apps Challenge 2025. Cursando Maestría en Ciencia de Datos y egresado de TECSUP. Especializado en arquitecturas backend escalables, sistemas IoT y procesamiento de datos masivos.",
    en: "Physicist with strong analytical rigor and Global Winner of the NASA Space Apps Challenge 2025. Master's student in Data Science and TECSUP graduate. Specializing in scalable backend architectures, IoT systems, and high-impact data engineering.",
  },
  location: "Arequipa, Perú",
  email: "borixquiroz@gmail.com",
  phone: "+51 953766422",
  phoneDisplay: "953 766 422",
  status: {
    es: "Disponible para nuevos retos y proyectos de alto impacto",
    en: "Available for high-impact software engineering roles",
  },
  cvPath: "/cv-borix-quiroz.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/BorixQ",
    icon: "github",
    display: "github.com/BorixQ",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/borix-quiroz",
    icon: "linkedin",
    display: "linkedin.com/in/borix-quiroz",
  },
  {
    name: "Email",
    url: "mailto:borixquiroz@gmail.com",
    icon: "mail",
    display: "borixquiroz@gmail.com",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/51953766422",
    icon: "phone",
    display: "+51 953 766 422",
  },
];

export const achievements: Achievement[] = [
  {
    id: "nasa-2025",
    title: {
      es: "Global Winner - NASA Space Apps Challenge 2025",
      en: "Global Winner - NASA Space Apps Challenge 2025",
    },
    organization: "NASA / Space Apps Global",
    year: "2025",
    badge: {
      es: "🏆 Ganador Mundial",
      en: "🏆 Global Winner",
    },
    description: {
      es: "Galardonado como Ganador Global en la hackathon más grande del mundo organizada por la NASA, compitiendo contra miles de equipos internacionales con el proyecto 'Queñaris'.",
      en: "Awarded Global Winner in the world's largest global hackathon organized by NASA, competing against thousands of international teams with project 'Queñaris'.",
    },
    impact: {
      es: "Liderazgo técnico en el diseño de arquitecturas de datos geoespaciales y algoritmos para análisis satelital y drones en la conservación de bosques andinos.",
      en: "Technical leadership designing geospatial data pipelines and algorithms processing satellite and drone imagery for Andean forest conservation.",
    },
    icon: "rocket",
    projectRef: "quenaris",
  },
  {
    id: "pucp-2024",
    title: {
      es: "3er Puesto - Final Interuniversitaria EQUIPU-PUCP",
      en: "3rd Place - Intercollegiate Finals EQUIPU-PUCP",
    },
    organization: "Pontificia Universidad Católica del Perú (PUCP)",
    year: "2024",
    badge: {
      es: "🥉 Podio Nacional",
      en: "🥉 National Podium",
    },
    description: {
      es: "Reconocimiento por el desarrollo de 'AuthCares', una solución IoT biométrica y de respuesta en tiempo real para niños con TEA (Trastorno del Espectro Autista).",
      en: "Recognized for developing 'AuthCares', an IoT biometric monitoring and real-time crisis detection solution for children with ASD.",
    },
    impact: {
      es: "Implementación de infraestructura de transmisión segura con microcontroladores ESP32, protocolo MQTT y despliegue cloud de baja latencia.",
      en: "Implemented secure data transmission with ESP32 microcontrollers, MQTT protocols, and low-latency cloud backend deployment.",
    },
    icon: "trophy",
    projectRef: "authcares",
  },
  {
    id: "tecsup-skills",
    title: {
      es: "1er Puesto - Concurso de Habilidades Técnicas",
      en: "1st Place - Technical Skills Championship",
    },
    organization: "TECSUP",
    year: "2024",
    badge: {
      es: "🥇 1er Lugar",
      en: "🥇 1st Place",
    },
    description: {
      es: "Primer puesto en desarrollo de software full-stack bajo presión competitiva, destacando en arquitectura de backend, contenedorización y buenas prácticas.",
      en: "First place in full-stack software development under competitive timed conditions, excelling in backend architecture, containerization, and clean code.",
    },
    impact: {
      es: "Arquitectura integral containerizada con Docker, PHP/Laravel, MySQL y control de versiones estricto.",
      en: "End-to-end containerized micro-setup with Docker, PHP/Laravel, MySQL, and strict git workflow execution.",
    },
    icon: "code",
    projectRef: "tecsup-skills-project",
  },
];

export const projects: Project[] = [
  {
    id: "quenaris",
    title: {
      es: "Queñaris - Monitoreo Geoespacial Satelital",
      en: "Queñaris - Geospatial Satellite Monitoring",
    },
    category: "data-ai",
    badge: {
      es: "NASA Global Winner 2025",
      en: "NASA Global Winner 2025",
    },
    subtitle: {
      es: "Análisis masivo de datos satelitales y drones para preservación ecológica",
      en: "Massive satellite & drone data processing for ecological conservation",
    },
    description: {
      es: "Plataforma de inteligencia de datos que procesa imágenes multiespectrales satelitales y capturas de drones para monitorear en tiempo real la salud y deforestación de bosques de Queñua en los Andes.",
      en: "Data intelligence platform processing multispectral satellite imagery and drone feeds to monitor in real time the health and deforestation of Andean Polylepis forests.",
    },
    longDescription: {
      es: "Como líder de análisis de datos en el equipo ganador mundial de NASA Space Apps 2025, diseñé los pipelines ETL geoespaciales capaces de ingerir conjuntos masivos de datos abiertos de satélites (Landsat/Sentinel) y vuelos de drones. El sistema correlaciona índices de vegetación (NDVI, EVI) con modelos predictivos de estrés hídrico y riesgo de incendios forestales.",
      en: "As lead data analyst for the NASA Space Apps 2025 global winning team, I engineered geospatial ETL pipelines ingesting open satellite datasets (Landsat/Sentinel) and UAV flights. The system correlates vegetation indices (NDVI, EVI) with predictive models for water stress and wildfire risk.",
    },
    highlights: {
      es: [
        "Galardonado como Ganador Global en NASA Space Apps Challenge 2025",
        "Pipeline de procesamiento distribuido para imágenes multiespectrales satelitales",
        "Diseño de arquitectura de datos optimizada para consultas geoespaciales de alta precisión",
        "Integración de modelos computacionales para la toma de decisiones ecológicas",
      ],
      en: [
        "Awarded Global Winner at the NASA Space Apps Challenge 2025",
        "Distributed processing pipeline for multispectral satellite imagery",
        "High-performance data architecture optimized for sub-meter geospatial querying",
        "Applied predictive modeling for evidence-based conservation decision-making",
      ],
    },
    technologies: ["Python", "Satellite GIS", "Computer Vision", "GeoPandas", "Docker", "Data Architecture", "NumPy"],
    githubUrl: "https://github.com/BorixQ",
    featured: true,
    award: {
      es: "Global Winner - NASA Space Apps Challenge 2025",
      en: "Global Winner - NASA Space Apps Challenge 2025",
    },
    architectureNotes: {
      es: "Pipeline modular con extracción automatizada de datasets satelitales, preprocesamiento con transformaciones matriciales NumPy/GeoPandas y almacenamiento estructurado para visualización de capas GIS.",
      en: "Modular pipeline with automated satellite dataset ingestion, matrix preprocessing via NumPy/GeoPandas, and structured storage optimized for GIS layer rendering.",
    },
  },
  {
    id: "authcares",
    title: {
      es: "AuthCares - Sistema IoT de Monitoreo Biométrico",
      en: "AuthCares - Biometric IoT Crisis Monitoring",
    },
    category: "iot",
    badge: {
      es: "3er Puesto EQUIPU-PUCP",
      en: "3rd Place EQUIPU-PUCP",
    },
    subtitle: {
      es: "Detección temprana y alerta en tiempo real de crisis en niños con TEA",
      en: "Early detection and real-time alerting for crisis episodes in children with ASD",
    },
    description: {
      es: "Ecosistema IoT integral que combina dispositivos embebidos ESP32 con sensores biométricos, broker de mensajería MQTT y backend cloud para alertar a padres y especialistas ante señales tempranas de crisis sensoriales.",
      en: "End-to-end IoT ecosystem combining ESP32 embedded hardware with biometric sensors, MQTT message brokers, and cloud backends to alert caregivers at early stages of sensory meltdowns.",
    },
    longDescription: {
      es: "Diseñé y desplegué la infraestructura de telecomunicaciones y el backend de ingesta de telemetría. La arquitectura garantiza transmisiones ultra ligeras mediante protocolo MQTT con encriptación, tolerancia a desconexión temporal y persistencia en bases de datos relacionales, reduciendo la latencia de alerta a menos de 400ms.",
      en: "I engineered the telemetry ingestion infrastructure and communication pipeline. The system guarantees lightweight transmissions via MQTT protocol with encryption, resilience against network loss, and persistence in relational databases, cutting critical alert latency below 400ms.",
    },
    highlights: {
      es: [
        "3er Puesto en la Final Interuniversitaria Laboratorio de Emprendimientos PUCP",
        "Firmware en C++ / MicroPython para microcontroladores ESP32 con gestión de energía",
        "Broker MQTT de alta disponibilidad para transmisión telemétrica en tiempo real",
        "Despliegue de servidores backend con API REST para integración con dashboard clínico",
      ],
      en: [
        "3rd Place in the Intercollegiate Finals at PUCP Venture Lab",
        "C++ / MicroPython firmware for ESP32 microcontrollers with low-power sleep cycles",
        "High-availability MQTT broker for continuous biometric streaming",
        "Cloud backend deployment with REST APIs interfacing caregiver dashboards",
      ],
    },
    technologies: ["ESP32", "MQTT", "Python", "PostgreSQL", "C++", "Docker", "Linux"],
    githubUrl: "https://github.com/BorixQ",
    featured: true,
    award: {
      es: "3er Puesto Final Interuniversitaria EQUIPU-PUCP",
      en: "3rd Place EQUIPU-PUCP Venture Competition",
    },
    architectureNotes: {
      es: "Arquitectura Pub/Sub con broker Mosquitto, puente de ingesta asíncrona hacia base de datos PostgreSQL y endpoints de notificación push inmediatas.",
      en: "Pub/Sub architecture with Mosquitto broker, asynchronous ingestion bridge into PostgreSQL, and instant push notification triggers.",
    },
  },
  {
    id: "resersur-backend",
    title: {
      es: "RESERSUR - Backend Empresarial & Sincronización Móvil",
      en: "RESERSUR - Enterprise Backend & Mobile Sync",
    },
    category: "backend",
    badge: {
      es: "Producción Industrial",
      en: "Industrial Production",
    },
    subtitle: {
      es: "API REST productiva en Django sincronizada en tiempo real con app Kotlin",
      en: "Production Django REST API synchronized in real time with Kotlin mobile app",
    },
    description: {
      es: "Sistema backend productivo para la gestión de órdenes de trabajo, equipos y servicios técnicos de Reparaciones y Servicios del Sur S.A.C., comunicándose en tiempo real con una app móvil nativa en Kotlin.",
      en: "Production backend system for work orders, industrial machinery maintenance, and technical services at RESERSUR S.A.C., syncing live with a native Android (Kotlin) app.",
    },
    longDescription: {
      es: "Desarrollé la arquitectura del backend en Django y Django REST Framework, modelando bases de datos PostgreSQL con transacciones atómicas para asegurar consistencia estricta en operaciones de campo. Se diseñaron endpoints optimizados con paginación, filtros avanzados y autenticación segura basada en tokens JWT.",
      en: "Built the production backend architecture utilizing Django and Django REST Framework, structuring relational PostgreSQL schemas with atomic transactions for field operational integrity. Optimized endpoints with cursor pagination, advanced filtering, and secure JWT authentication.",
    },
    highlights: {
      es: [
        "Despliegue de backend en producción utilizado activamente por personal técnico de campo",
        "APIs RESTful de alta respuesta consumidas por aplicación móvil nativa Kotlin",
        "Modelado de datos relacionales en PostgreSQL con integridad referencial estricta",
        "Autenticación segura JWT y control de acceso basado en roles (RBAC)",
      ],
      en: [
        "Production backend actively deployed and utilized by field engineering technicians",
        "High-throughput RESTful endpoints consumed by native Android Kotlin mobile app",
        "Relational PostgreSQL database modeling with strict transactional integrity",
        "JWT secure authentication and granular Role-Based Access Control (RBAC)",
      ],
    },
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Kotlin", "Docker", "Linux"],
    githubUrl: "https://github.com/BorixQ",
    featured: true,
    architectureNotes: {
      es: "Arquitectura desacoplada en capas: serializers validados, viewsets con throttling de peticiones, capas de servicio para lógica de negocio y PostgreSQL para almacenamiento persistente.",
      en: "Decoupled layered architecture: validated serializers, throttled viewsets, dedicated business logic service layer, and transactional PostgreSQL storage.",
    },
  },
  {
    id: "tecsup-platform",
    title: {
      es: "Micro-Arquitectura Full-Stack Containerizada",
      en: "Containerized Full-Stack Platform",
    },
    category: "fullstack",
    badge: {
      es: "1er Puesto Habilidades Técnicas",
      en: "1st Place Tech Skills",
    },
    subtitle: {
      es: "Plataforma web con Docker, Laravel, MySQL y diseño responsivo",
      en: "Web platform built with Docker, Laravel, MySQL, and responsive UI",
    },
    description: {
      es: "Solución de software modular desarrollada bajo estándares estrictos de rendimiento y seguridad, orquestada mediante Docker Compose y desplegada con arquitectura MVC limpia.",
      en: "Modular software solution engineered under demanding performance and security benchmarks, orchestrated via Docker Compose with clean MVC architecture.",
    },
    longDescription: {
      es: "Proyecto desarrollado durante la competencia de habilidades técnicas de TECSUP, obteniendo el primer lugar frente a proyectos de alto nivel. La solución resolvió flujos de negocio complejos con pruebas unitarias, migraciones automatizadas y diseño optimizado.",
      en: "Engineered during the rigorous TECSUP Technical Skills Championship, achieving first place among senior-level projects. Implemented complex business workflows, automated migrations, and unit-tested transactional flows.",
    },
    highlights: {
      es: [
        "1er Puesto en el Concurso de Habilidades Técnicas de Software",
        "Entorno completamente reproducible con contenedores Docker multi-etapa",
        "Diseño relacional en MySQL optimizado con índices y claves foráneas",
        "Interfaz intuitiva y reactiva con validaciones de formulario robustas",
      ],
      en: [
        "1st Place Winner in the Software Technical Skills Championship",
        "Fully reproducible environment via multi-stage Docker Compose orchestration",
        "Optimized relational schema in MySQL with indexed queries and foreign constraints",
        "Intuitive responsive UI with rigorous front-and-backend validation pipelines",
      ],
    },
    technologies: ["PHP", "Laravel", "Docker", "MySQL", "Git", "Tailwind CSS"],
    githubUrl: "https://github.com/BorixQ",
    featured: false,
  },
  {
    id: "physics-lab-automation",
    title: {
      es: "Automatización & Calibración de Instrumentos Físicos",
      en: "Physics Instrumentation & Calibration Automation",
    },
    category: "data-ai",
    badge: {
      es: "UNSA Laboratorios",
      en: "UNSA Laboratories",
    },
    subtitle: {
      es: "Software en Python para control instrumental y análisis de incertidumbre",
      en: "Python suite for instrumental calibration and uncertainty modeling",
    },
    description: {
      es: "Herramienta de software científico desarrollada para automatizar la adquisición de señales, calibración de equipos de laboratorio de física y cálculo riguroso de propagación de errores.",
      en: "Scientific computing tool developed to automate signal acquisition, laboratory hardware calibration, and statistical uncertainty propagation calculations.",
    },
    longDescription: {
      es: "Aplicando el rigor de la formación en Física pura, desarrollé scripts y librerías en Python para interactuar con sensores y equipos de medición, eliminando errores humanos de calibración y reduciendo los tiempos de procesamiento de datos experimentales en más de un 75%.",
      en: "Leveraging rigorous foundational training in theoretical and experimental Physics, I authored Python packages interfacing lab sensors to eliminate manual calibration deviations and accelerate experimental processing pipelines by over 75%.",
    },
    highlights: {
      es: [
        "Automatización de calibración instrumental en los laboratorios de física de la UNSA",
        "Algoritmos de propagación de incertidumbre estadística y ajuste de curvas polinomiales",
        "Adquisición continua de datos y generación automatizada de reportes gráficos",
      ],
      en: [
        "Automated instrumental calibration across UNSA Physics Research Labs",
        "Implemented statistical error propagation algorithms and polynomial curve fitting",
        "Automated continuous data telemetry acquisition and instant graphical reporting",
      ],
    },
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Data Analysis", "Automation"],
    githubUrl: "https://github.com/BorixQ",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "stex",
    role: {
      es: "Profesor de Matemáticas Avanzadas (Baccalauréat Français)",
      en: "Advanced Mathematics Professor (Baccalauréat Français)",
    },
    company: "STEX",
    location: "Arequipa, Perú",
    period: {
      es: "Marzo 2024 – Presente",
      en: "March 2024 – Present",
    },
    description: {
      es: "Cátedra de matemáticas avanzadas para estudiantes en los niveles Première y Terminale, siguiendo las rigurosas exigencias pedagógicas del sistema educativo francés.",
      en: "Teaching advanced mathematics to Première and Terminale students in compliance with the demanding curriculum standards of the French national educational system.",
    },
    achievements: {
      es: [
        "Diseño de material didáctico especializado en cálculo diferencial, álgebra lineal y probabilidad",
        "Planificación curricular internacional con evaluación por competencias de alto nivel analítico",
        "Fortalecimiento en los estudiantes del pensamiento lógico-formal aplicable a ciencias e ingeniería",
      ],
      en: [
        "Authored tailored instructional material in differential calculus, linear algebra, and probability theory",
        "Coordinated international curriculum planning with analytical problem-solving rubrics",
        "Mentored students in rigorous formal logical reasoning for STEM university admissions",
      ],
    },
    skills: ["Matemáticas Avanzadas", "Cálculo", "Álgebra Lineal", "Pedagogía Internacional", "Comunicación"],
    isCurrent: true,
  },
  {
    id: "resersur",
    role: {
      es: "Software Developer Intern",
      en: "Software Developer Intern",
    },
    company: "RESERSUR (Reparaciones y Servicios del Sur S.A.C.)",
    location: "Arequipa, Perú",
    period: {
      es: "Julio 2025 – Agosto 2025",
      en: "July 2025 – August 2025",
    },
    description: {
      es: "Desarrollo del backend productivo en Django y arquitectura de servicios para la administración integral de órdenes y procesos industriales.",
      en: "Developed production backend using Django and service architecture for end-to-end industrial machinery and repair process management.",
    },
    achievements: {
      es: [
        "Diseño e implementación de endpoints RESTful seguros consumidos por app móvil Kotlin",
        "Sincronización de datos en tiempo real entre operaciones de planta y servidor central",
        "Optimización de consultas SQL en PostgreSQL asegurando transacciones atómicas",
      ],
      en: [
        "Designed and implemented resilient RESTful APIs consumed by a native Kotlin mobile app",
        "Enabled real-time bidirectional synchronization between field technicians and central servers",
        "Optimized relational PostgreSQL queries ensuring zero data discrepancies in mission-critical logs",
      ],
    },
    skills: ["Python", "Django", "PostgreSQL", "REST APIs", "Kotlin Sync", "Git"],
    isCurrent: false,
  },
  {
    id: "unsa-lab",
    role: {
      es: "Asistente de Laboratorio & Automatización",
      en: "Laboratory Assistant & Automation Developer",
    },
    company: "UNSA - Laboratorios de Física",
    location: "Arequipa, Perú",
    period: {
      es: "Agosto 2022 – Diciembre 2022",
      en: "August 2022 – December 2022",
    },
    description: {
      es: "Programación científica en Python para automatizar procesos de calibración instrumental y análisis cuantitativo de mediciones de precisión.",
      en: "Scientific programming in Python for automated instrumental calibration and quantitative measurement analysis.",
    },
    achievements: {
      es: [
        "Desarrollo de módulos en Python para adquisición de datos y calibración instrumental",
        "Reducción notable de tiempos de procesamiento y descarte automático de lecturas anómalas",
        "Elaboración de manuales técnicos para la operación de instrumental físico",
      ],
      en: [
        "Developed Python instrumentation modules for signal acquisition and experimental sensor calibration",
        "Reduced manual processing overhead and implemented automated outlier detection scripts",
        "Authored technical standard operating procedures (SOPs) for experimental laboratory hardware",
      ],
    },
    skills: ["Python", "NumPy", "Automatización", "Física Experimental", "Análisis Estadístico"],
    isCurrent: false,
  },
];

export const educations: Education[] = [
  {
    id: "unsa-master",
    degree: {
      es: "Maestría en Ciencia de Datos",
      en: "Master of Science in Data Science",
    },
    institution: "Universidad Nacional de San Agustín (UNSA)",
    period: "Agosto 2025 – Presente",
    description: {
      es: "Formación de posgrado enfocada en modelos de machine learning avanzados, arquitecturas de big data, inferencia estadística profunda y minería de datos a gran escala.",
      en: "Graduate program focusing on advanced machine learning, big data architectures, deep statistical inference, and large-scale data mining.",
    },
    highlights: {
      es: [
        "Especialización en modelos predictivos y procesamiento de datos complejos",
        "Aplicación de inteligencia artificial en problemas científicos e industriales",
      ],
      en: [
        "Specialization in predictive modeling and complex multidimensional data processing",
        "Applied artificial intelligence for computational and industrial domain challenges",
      ],
    },
    current: true,
  },
  {
    id: "tecsup-software",
    degree: {
      es: "Diseño y Desarrollo de Software",
      en: "Software Design & Development",
    },
    institution: "TECSUP",
    period: "Agosto 2023 – Julio 2026",
    description: {
      es: "Carrera profesional de ingeniería de software orientada a arquitecturas modernas, desarrollo backend empresarial (.NET / Python / C#), contenedorización y metodologías ágiles.",
      en: "Professional software engineering curriculum focused on enterprise backend architectures (.NET / Python / C#), cloud containerization, and modern Agile delivery.",
    },
    highlights: {
      es: [
        "1er Puesto en Concurso de Habilidades Técnicas de Software",
        "Dominio de patrones de diseño, microservicios, bases de datos y DevOps",
      ],
      en: [
        "1st Place in the Software Technical Skills Championship",
        "Mastery of design patterns, microservices, databases, and DevOps fundamentals",
      ],
    },
    current: false,
  },
  {
    id: "unsa-physics",
    degree: {
      es: "Bachiller en Física",
      en: "Bachelor of Science in Physics",
    },
    institution: "Universidad Nacional de San Agustín (UNSA)",
    period: "Abril 2017 – Julio 2023",
    description: {
      es: "Sólida formación científica en métodos matemáticos, mecánica analítica, electromagnetismo y modelos computacionales. Base fundamental de pensamiento analítico de primer orden.",
      en: "Rigorous scientific education in mathematical methods, analytical mechanics, electromagnetism, and computational modeling. The cornerstone of first-principles thinking.",
    },
    highlights: {
      es: [
        "Pensamiento analítico riguroso y modelado de sistemas dinámicos complejos",
        "Experiencia en laboratorios de investigación y cálculo experimental de precisión",
      ],
      en: [
        "Rigorous first-principles analytical reasoning and complex dynamic systems modeling",
        "Research laboratory tenure with experimental precision calibration workflows",
      ],
    },
    current: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: {
      es: "Backend & Arquitectura de Software",
      en: "Backend & Software Architecture",
    },
    icon: "server",
    skills: [
      { name: "C#", level: "Avanzado" },
      { name: ".NET 9", level: "Avanzado" },
      { name: "Python", level: "Avanzado" },
      { name: "Django / DRF", level: "Avanzado" },
      { name: "RESTful APIs", level: "Avanzado" },
      { name: "Arquitectura en Capas / Microservicios", level: "Intermedio-Avanzado" },
    ],
  },
  {
    title: {
      es: "Ciencia de Datos & Análisis Cuantitativo",
      en: "Data Science & Quantitative Analytics",
    },
    icon: "bar-chart",
    skills: [
      { name: "Data Science", level: "Maestría en curso" },
      { name: "Análisis Geoespacial (GIS)", level: "NASA Winner" },
      { name: "NumPy / Pandas / SciPy", level: "Avanzado" },
      { name: "Modelado Matemático & Físico", level: "Experto" },
      { name: "Machine Learning Foundations", level: "Intermedio-Avanzado" },
    ],
  },
  {
    title: {
      es: "Bases de Datos & Almacenamiento",
      en: "Databases & Storage Engines",
    },
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "Avanzado" },
      { name: "MySQL", level: "Avanzado" },
      { name: "Modelado Relacional & Normalización", level: "Avanzado" },
      { name: "Optimización de Queries e Índices", level: "Intermedio" },
    ],
  },
  {
    title: {
      es: "IoT, Hardware & Protocolos en Tiempo Real",
      en: "IoT, Hardware & Real-Time Protocols",
    },
    icon: "cpu",
    skills: [
      { name: "ESP32 / Microcontroladores", level: "Avanzado" },
      { name: "MQTT Protocol", level: "Avanzado" },
      { name: "Integración de Sensores Biométricos", level: "Avanzado" },
      { name: "C++ Embebido", level: "Intermedio" },
    ],
  },
  {
    title: {
      es: "DevOps, Sistemas & Herramientas",
      en: "DevOps, Systems & Tooling",
    },
    icon: "terminal",
    skills: [
      { name: "Docker & Docker Compose", level: "Avanzado" },
      { name: "Linux (CentOS / Fedora)", level: "Avanzado" },
      { name: "Git / GitHub Workflow", level: "Avanzado" },
      { name: "Bash Scripting", level: "Intermedio-Avanzado" },
    ],
  },
];

export const languagesList = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
    badge: "100%",
  },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "C1 Avanzado (Profesional Completo)", en: "C1 Advanced (Full Professional)" },
    badge: "C1",
  },
  {
    name: { es: "Francés", en: "French" },
    level: { es: "A1 Básico (Baccalauréat Teaching System)", en: "A1 Elementary" },
    badge: "A1",
  },
];

export const softSkillsList = [
  { es: "Liderazgo de equipos técnicos y proyectos multidisciplinarios", en: "Technical team leadership and cross-functional collaboration" },
  { es: "Pensamiento analítico de primer principio (rigor físico y matemático)", en: "First-principles analytical thinking (physics & math rigor)" },
  { es: "Resolución de problemas complejos bajo presión y hackathons", en: "Complex problem solving under intense competitive environments" },
  { es: "Capacidad pedagógica y comunicación asertiva internacional", en: "Pedagogical communication and clear international articulation" },
];
