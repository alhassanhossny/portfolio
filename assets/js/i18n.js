/**
 * Internationalization (i18n) Module
 * Supports English (LTR) and Arabic (RTL)
 */
const translations = {
  en: {
    dir: "ltr",
    nav: { home: "Home", about: "About", skills: "Skills", experience: "Experience", education: "Education", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Alhassan Hossny",
      title: "Software Engineer | Odoo Developer | System Administrator",
      summary: "Building scalable enterprise solutions with expertise in Odoo, DevOps, and IT Infrastructure.",
      cta_contact: "Get In Touch",
      cta_cv: "Download CV"
    },
    about: {
      title: "About Me",
      text: "Highly motivated, goal- and detail-oriented Software Engineer with 5+ years of experience. Extensive practical experience in fin-tech and healthcare industries with expertise in operating systems, network applications, and enterprise solutions. Recognized by peers as a dependable team member with integrity and commitment to identifying challenges and finding solutions.",
      location: "Cairo, Egypt",
      email: "alhassan.hossny@gmail.com",
      phone: "+20 1014763233",
      stats: [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "30+", label: "Happy Clients" },
        { value: "6+", label: "Certifications" }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with",
      categories: [
        { name: "Development", icon: "bi-code-slash", items: ["Python", "Odoo", "JavaScript", "HTML/CSS", "PHP", "Django", "React", "WordPress"] },
        { name: "DevOps & Infrastructure", icon: "bi-gear", items: ["Docker", "Linux Admin", "Bash Scripting", "CI/CD", "VMware vSphere", "Server Management"] },
        { name: "Networking & Security", icon: "bi-shield-lock", items: ["CCNA", "Network Config", "Firewall Management", "Cybersecurity", "VPN Setup"] },
        { name: "Tools & Platforms", icon: "bi-tools", items: ["Git / GitHub", "VS Code", "PostgreSQL", "MySQL", "WooCommerce", "Divi Builder"] }
      ]
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      jobs: [
        { role: "Senior Software Engineer", company: "Abdin Pharmacies", url: "https://abdinpharmacies.com", period: "Apr 2026 — Present", type: "Full Time", tasks: ["Odoo 17, 18, and 19 module development and customization using Python.", "Collaborate with functional consultants to translate business requirements into architecture.", "Version control (Git) for clean, maintainable, and debuggable code."] },
        { role: "Senior System Administrator", company: "Dar Elteb Hospital", url: "https://daraltebsohag.com", period: "Jul 2025 — Mar 2026", type: "Full Time", tasks: ["Manage, monitor, and maintain server, network, and application integrity.", "Ensure data security and regulatory compliance for patient data.", "Disaster recovery planning and automation script development."] },
        { role: "IT Specialist", company: "EDGE Pro", url: "https://edge-pro.com", period: "Oct 2023 — Mar 2026", type: "Full Time", tasks: ["Technical support for digital transformation projects at the Egyptian Endowments Authority.", "Remote troubleshooting and system diagnostics."] },
        { role: "Senior Web Developer", company: "Tech Web Innovations", url: "https://techwebinnovations.com", period: "Sep 2024 — Aug 2025", type: "Remote", tasks: ["Design and develop customized websites using WordPress, WooCommerce and Divi.", "Develop new features and functionalities based on client business requirements.", "Manage website updates, maintenance, and troubleshooting."] },
        { role: "Front-End Developer", company: "Share-In", url: "https://share-in-agency.com", period: "Jan 2021 — Dec 2021", type: "Hybrid", tasks: ["Designed and developed company website.", "Wrote code using HTML, CSS, JavaScript, PHP, and MySQL.", "Ensured website accessibility on all devices and browsers."] }
      ]
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic background and professional development",
      degrees: [
        { degree: "Master's in Computer Science", school: "Sohag University", period: "In Progress", detail: "Pursuing advanced studies in Computer Science." },
        { degree: "Bachelor in Computer Science", school: "Luxor University — Faculty of Computers and Information", period: "2016 — 2020", detail: "Grade: Good | Graduation Project: AAAS (Automated Academic Advising System) — Team Leader | Project Grade: Excellent" }
      ],
      cert_title: "Certifications & Training",
      certs: ["System Administration — ITI Intensive Code Camp (2023)", "CCNA — Cisco Certified Network Associate", "OMCA — Online Marketing Certified Associate", "VMware vSphere: Install, Configure, Manage", "Digital Marketing Certification", "Linux Red Hat Administration"]
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of my recent work",
      filter_all: "All",
      items: [
        { name: "AI Nexus", desc: "AI Tools Platform", url: "https://ainexusca.com", img: "assets/img/masonry-portfolio/AI Nexuca-Page1.png", tags: ["Web", "App"] },
        { name: "My Ain", desc: "B2B E-commerce Platform", url: "https://myain.com", img: "assets/img/masonry-portfolio/Ain Arabia.png", tags: ["Web", "App"] },
        { name: "Archi-Home", desc: "Home Renovation Website", url: "https://www.archihome.ca", img: "assets/img/masonry-portfolio/ArchiHome-Page1.png", tags: ["Web"] },
        { name: "Share-In", desc: "Marketing & Advertising", url: "https://share-in-agency.com", img: "assets/img/masonry-portfolio/Share-In website.png", tags: ["Web"] },
        { name: "Tech Web Innovations", desc: "Web Agency Website", url: "https://techwebinnovations.com", img: "assets/img/masonry-portfolio/techwebinnovations screenshot.png", tags: ["Web"] },
        { name: "Cotton Upp", desc: "Clothes Brand E-commerce", url: "https://cottonupp.com", img: "assets/img/masonry-portfolio/Cotton Upp.png", tags: ["Web"] }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together",
      address_label: "Address", address: "Cairo, Egypt",
      phone_label: "Phone", phone: "+20 1014763233",
      email_label: "Email", email: "alhassan.hossny@gmail.com",
      form_name: "Your Name", form_email: "Your Email", form_subject: "Subject", form_message: "Message", form_send: "Send Message",
      form_success: "Your message has been sent. Thank you!"
    },
    footer: { text: "Feel free to contact me for any project — design, development, or technical consultation.", copyright: "All Rights Reserved" }
  },
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", about: "نبذة", skills: "المهارات", experience: "الخبرات", education: "التعليم", projects: "المشاريع", contact: "تواصل" },
    hero: {
      greeting: "مرحباً، أنا",
      name: "الحسن حسني",
      title: "مهندس برمجيات | مطور أودو | مدير أنظمة",
      summary: "بناء حلول مؤسسية متكاملة مع خبرة في أودو والحوسبة السحابية والبنية التحتية.",
      cta_contact: "تواصل معي",
      cta_cv: "تحميل السيرة الذاتية"
    },
    about: {
      title: "نبذة عني",
      text: "مهندس برمجيات طموح ودقيق التفاصيل مع أكثر من 5 سنوات من الخبرة. خبرة عملية واسعة في صناعة التكنولوجيا المالية والرعاية الصحية مع خبرة في أنظمة التشغيل المختلفة وتطبيقات الشبكات وحلول المؤسسات.",
      location: "القاهرة، مصر", email: "alhassan.hossny@gmail.com", phone: "+20 1014763233",
      stats: [
        { value: "+5", label: "سنوات خبرة" },
        { value: "+50", label: "مشروع مكتمل" },
        { value: "+30", label: "عميل سعيد" },
        { value: "+6", label: "شهادات" }
      ]
    },
    skills: {
      title: "المهارات",
      subtitle: "التقنيات والأدوات التي أعمل بها",
      categories: [
        { name: "التطوير", icon: "bi-code-slash", items: ["Python", "Odoo", "JavaScript", "HTML/CSS", "PHP", "Django", "React", "WordPress"] },
        { name: "DevOps والبنية التحتية", icon: "bi-gear", items: ["Docker", "إدارة لينكس", "Bash Scripting", "CI/CD", "VMware vSphere", "إدارة الخوادم"] },
        { name: "الشبكات والأمان", icon: "bi-shield-lock", items: ["CCNA", "إعداد الشبكات", "إدارة الجدران النارية", "الأمن السيبراني", "إعداد VPN"] },
        { name: "الأدوات والمنصات", icon: "bi-tools", items: ["Git / GitHub", "VS Code", "PostgreSQL", "MySQL", "WooCommerce", "Divi Builder"] }
      ]
    },
    experience: {
      title: "الخبرات",
      subtitle: "مسيرتي المهنية",
      jobs: [
        { role: "مهندس برمجيات أول", company: "صيدليات عابدين", url: "https://abdinpharmacies.com", period: "أبريل 2026 — الحالي", type: "دوام كامل", tasks: ["تطوير وتخصيص وحدات أودو 17 و18 و19 باستخدام بايثون.", "التعاون مع المستشارين لتحويل متطلبات الأعمال إلى هيكل تقني.", "إدارة الإصدارات باستخدام Git."] },
        { role: "مدير أنظمة أول", company: "مستشفى دار الطب", url: "https://daraltebsohag.com", period: "يوليو 2025 — مارس 2026", type: "دوام كامل", tasks: ["إدارة ومراقبة وصيانة الخوادم والشبكات.", "ضمان أمان البيانات والامتثال التنظيمي.", "تخطيط التعافي من الكوارث وتطوير النصوص البرمجية."] },
        { role: "أخصائي تكنولوجيا المعلومات", company: "EDGE Pro", url: "https://edge-pro.com", period: "أكتوبر 2023 — مارس 2026", type: "دوام كامل", tasks: ["دعم تقني لمشاريع التحول الرقمي.", "استكشاف الأخطاء عن بُعد وتشخيص الأنظمة."] },
        { role: "مطور ويب أول", company: "Tech Web Innovations", url: "https://techwebinnovations.com", period: "سبتمبر 2024 — أغسطس 2025", type: "عن بُعد", tasks: ["تصميم وتطوير مواقع مخصصة باستخدام ووردبريس.", "تطوير ميزات جديدة بناءً على متطلبات العملاء.", "إدارة تحديثات المواقع والصيانة."] },
        { role: "مطور واجهات أمامية", company: "Share-In", url: "https://share-in-agency.com", period: "يناير 2021 — ديسمبر 2021", type: "هجين", tasks: ["تصميم وتطوير موقع الشركة.", "كتابة الأكواد باستخدام HTML, CSS, JavaScript.", "ضمان توافق الموقع مع جميع الأجهزة."] }
      ]
    },
    education: {
      title: "التعليم والشهادات",
      subtitle: "الخلفية الأكاديمية والتطوير المهني",
      degrees: [
        { degree: "ماجستير علوم الحاسب", school: "جامعة سوهاج", period: "قيد الدراسة", detail: "دراسات متقدمة في علوم الحاسب." },
        { degree: "بكالوريوس علوم الحاسب", school: "كلية الحاسبات والمعلومات — جامعة الأقصر", period: "2016 — 2020", detail: "تقدير: جيد | مشروع التخرج: نظام الإرشاد الأكاديمي الآلي — قائد الفريق | تقدير المشروع: ممتاز" }
      ],
      cert_title: "الشهادات والتدريبات",
      certs: ["إدارة الأنظمة — معهد تكنولوجيا المعلومات (2023)", "CCNA — شهادة سيسكو للشبكات", "OMCA — شهادة التسويق الإلكتروني", "VMware vSphere: التثبيت والإعداد والإدارة", "شهادة التسويق الرقمي", "إدارة لينكس ريد هات"]
    },
    projects: {
      title: "المشاريع",
      subtitle: "مجموعة من أحدث أعمالي",
      filter_all: "الكل",
      items: [
        { name: "AI Nexus", desc: "منصة أدوات الذكاء الاصطناعي", url: "https://ainexusca.com", img: "assets/img/masonry-portfolio/AI Nexuca-Page1.png", tags: ["Web", "App"] },
        { name: "My Ain", desc: "منصة تجارة إلكترونية B2B", url: "https://myain.com", img: "assets/img/masonry-portfolio/Ain Arabia.png", tags: ["Web", "App"] },
        { name: "Archi-Home", desc: "موقع تجديد المنازل", url: "https://www.archihome.ca", img: "assets/img/masonry-portfolio/ArchiHome-Page1.png", tags: ["Web"] },
        { name: "Share-In", desc: "تسويق وإعلان", url: "https://share-in-agency.com", img: "assets/img/masonry-portfolio/Share-In website.png", tags: ["Web"] },
        { name: "Tech Web Innovations", desc: "موقع وكالة ويب", url: "https://techwebinnovations.com", img: "assets/img/masonry-portfolio/techwebinnovations screenshot.png", tags: ["Web"] },
        { name: "Cotton Upp", desc: "متجر ملابس إلكتروني", url: "https://cottonupp.com", img: "assets/img/masonry-portfolio/Cotton Upp.png", tags: ["Web"] }
      ]
    },
    contact: {
      title: "تواصل",
      subtitle: "لنعمل معاً",
      address_label: "العنوان", address: "القاهرة، مصر",
      phone_label: "الهاتف", phone: "+20 1014763233",
      email_label: "البريد الإلكتروني", email: "alhassan.hossny@gmail.com",
      form_name: "الاسم", form_email: "البريد الإلكتروني", form_subject: "الموضوع", form_message: "الرسالة", form_send: "إرسال",
      form_success: "تم إرسال رسالتك بنجاح. شكراً لك!"
    },
    footer: { text: "لا تتردد في التواصل معي لأي مشروع — تصميم، تطوير، أو استشارة تقنية.", copyright: "جميع الحقوق محفوظة" }
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('portfolio-lang') || 'en';
  }
  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
    document.body.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('ltr', lang === 'en');
  }
  t(key) {
    const keys = key.split('.');
    let val = translations[this.currentLang];
    for (const k of keys) {
      if (val && val[k] !== undefined) val = val[k];
      else return key;
    }
    return val;
  }
  get lang() { return this.currentLang; }
  get data() { return translations[this.currentLang]; }
}

window.i18n = new I18n();
