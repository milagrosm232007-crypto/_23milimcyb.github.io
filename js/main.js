document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const translations = {
        es: {
            "nav-about": "Sobre mí",
            "nav-cv": "Mi CV",
            "nav-education": "Formación",
            "nav-participations": "Participaciones",
            "nav-stack": "Tech Stack",
            "nav-projects": "Proyectos",
            "nav-contacto": "Contacto",
            "hero-badge": "🎀 Ciberseguridad • Redes • Desarrollo & IA",
            "hero-title": 'Hola, soy <span class="highlight">Milagros Muñoz</span>',
            "hero-subtitle": "Estudiante de Ciberseguridad en la Universidad Tecnológica de Panamá (UTP), apasionada por la seguridad defensiva, las redes de datos, la automatización y el desarrollo de software seguro.",
            "btn-projects": "Ver Proyectos",
            "btn-cv": "Descargar CV",
            "about-title": "Sobre mí",
            "profile-title": "Perfil Profesional",
            "profile-desc-1": "Cuento con experiencia práctica en la implementación de laboratorios virtualizados, hardening de sistemas operativos, despliegue de firewalls perimetrales (pfSense) y desarrollo de herramientas de automatización y análisis.",
            "profile-desc-2": "Me caracterizo por un enfoque proactivo, capacidad de liderazgo y coordinación de proyectos académicos, combinando el rigor técnico de la ciberseguridad con la innovación tecnológica.",
            "languages-title": "Idiomas",
            "lang-es": "Español",
            "lang-es-lvl": "Nativo",
            "lang-en": "Inglés",
            "lang-en-lvl": "C2 (Avanzado)",
            "lang-it": "Italiano",
            "lang-it-lvl": "A2 (Básico)",
            "cv-section-title": "Mi Currículum Vitae",
            "cv-card-title": "Milagros Muñoz - CV Profesional",
            "cv-card-desc": "Visualiza mi hoja de vida actualizada con toda mi experiencia técnica, educativa y proyectos.",
            "cv-btn-view": "Ver / Descargar CV",
            "edu-cert-title": "Educación y Certificaciones",
            "edu-title": "Educación",
            "uni-degree": "Licenciatura en Ciberseguridad",
            "uni-name": "Universidad Tecnológica de Panamá (UTP) — Centro Regional de Panamá Oeste (FISC)",
            "school-degree": "Bachiller en Ciencias",
            "school-name": "Instituto de Formación Especializada Bilingüe Emmanuel de La Chorrera",
            "cert-title": "Cursos y Certificaciones",
            "cert-1-date": "Expedición: Septiembre 2026",
            "credly-text": "Ver credencial en Credly",
            "part-title": "Participaciones y Concursos",
            "part-1-tag": "Ediciones 2025 & 2026",
            "part-1-desc": "Participación en ambas ediciones desarrollando soluciones tecnológicas e innovadoras bajo presión en entornos competitivos.",
            "part-2-tag": "Investigación Científica",
            "part-2-desc": 'Co-autora del artículo científico <em>"Condiciones de la Seguridad de estudiantes chorreranos para asistir a sus centros educativos y regresar a sus hogares"</em>.',
            "read-article": "Leer artículo completo",
            "part-3-tag": "En curso",
            "part-3-desc": "Participación activa en iniciativa y competencia regional enfocada en ciberseguridad y defensa digital.",
            "stack-sec": "Seguridad y Ciberseguridad",
            "stack-net": "Redes y Protocolos",
            "stack-dev": "Lenguajes y Web",
            "stack-sys": "Sistemas y Cloud",
            "tag-forensics": "Análisis Forense",
            "tag-ubuntu": "Ubuntu Server/Desktop",
            "projects-title": "Proyectos y Desarrollos",
            "status-dev": "En desarrollo",
            "proj-1-title": "Desarrollo de Inteligencia Artificial",
            "proj-1-desc": "Iniciativa en fase inicial enfocada en el diseño, entrenamiento y programación de un modelo/aplicación de Inteligencia Artificial.",
            "link-soon": "Link próximamente",
            "status-cyber": "Ciberseguridad & Redes",
            "proj-2-title": "Laboratorio de Infraestructura y Ransomware Educativo",
            "proj-2-desc": "Entorno virtualizado en VirtualBox con 5 VMs (pfSense, Ubuntu Server, Backup, Desktop y Kali Linux), scripts de cifrado controlado en Python y mitigación con Fail2ban.",
            "status-data": "Estructuras de Datos",
            "proj-3-title": "Sistema de Gestión de Archivos con Árboles N-arios",
            "proj-3-desc": "Sistema jerárquico de archivos con operaciones CRUD, visualización de recorridos de árboles y persistencia en JSON.",
            "proj-4-title": "Sistema de Gestión de Giras Educativas — UTP",
            "proj-4-desc": "Plataforma integral desarrollada en la nube para la gestión, logística y control de las giras académicas del Centro Regional de Panamá Oeste.",
            "status-jic": "Investigación JIC",
            "proj-5-title": "Prototipado de App de Seguridad Estudiantil",
            "proj-5-desc": "Diseño de prototipo móvil enfocado en la protección integral y monitoreo en tiempo real de estudiantes en La Chorrera, respaldado por encuesta a 102 estudiantes.",
            "view-pdf": "Ver artículo (PDF)",
            "status-firewall": "Seguridad Perimetral",
            "proj-6-title": "Implementación de Firewall pfSense y Hardening",
            "proj-6-desc": "Despliegue avanzado de seguridad perimetral con reglas de filtrado, NAT, VPN (OpenVPN/IPsec), IDS/IPS con Suricata y Portal Cautivo con certificación HTTPS.",
            "status-web": "Desarrollo Web Seguro",
            "proj-7-title": "CyberWeb — Sistema Seguro de Inventario",
            "proj-7-desc": "Aplicación web segura con control de acceso basado en roles, contraseñas cifradas, consultas parametrizadas (PDO) y protección contra vulnerabilidades XSS y CSRF.",
            "tag-websec": "Seguridad Web",
            "contact-title": "Contacto",
            "contact-subtitle": "¡Hablemos y colaboremos!",
            "contact-desc": "¿Tienes alguna propuesta, proyecto o consulta? Escríbeme y con gusto te responderé lo antes posible.",
            "footer-rights": "Todos los derechos reservados."
        },
        en: {
            "nav-about": "About me",
            "nav-cv": "My CV",
            "nav-education": "Education",
            "nav-participations": "Participations",
            "nav-stack": "Tech Stack",
            "nav-projects": "Projects",
            "nav-contacto": "Contact",
            "hero-badge": "🎀 Cybersecurity • Networks • Development & AI",
            "hero-title": 'Hello, I am <span class="highlight">Milagros Muñoz</span>',
            "hero-subtitle": "Cybersecurity student at the Technological University of Panama (UTP), passionate about defensive security, data networks, automation, and secure software development.",
            "btn-projects": "View Projects",
            "btn-cv": "Download CV",
            "about-title": "About me",
            "profile-title": "Professional Profile",
            "profile-desc-1": "I have practical experience implementing virtualized labs, operating system hardening, deploying perimeter firewalls (pfSense), and developing automation and analysis tools.",
            "profile-desc-2": "I am characterized by a proactive approach, leadership skills, and academic project coordination, combining the technical rigor of cybersecurity with technological innovation.",
            "languages-title": "Languages",
            "lang-es": "Spanish",
            "lang-es-lvl": "Native",
            "lang-en": "English",
            "lang-en-lvl": "C2 (Advanced)",
            "lang-it": "Italian",
            "lang-it-lvl": "A2 (Basic)",
            "cv-section-title": "Curriculum Vitae",
            "cv-card-title": "Milagros Muñoz - Professional CV",
            "cv-card-desc": "View my updated resume featuring all my technical experience, education, and projects.",
            "cv-btn-view": "View / Download CV",
            "edu-cert-title": "Education & Certifications",
            "edu-title": "Education",
            "uni-degree": "B.S. in Cybersecurity",
            "uni-name": "Technological University of Panama (UTP) — Panama West Regional Center (FISC)",
            "school-degree": "High School Science Diploma",
            "school-name": "Instituto de Formación Especializada Bilingüe Emmanuel de La Chorrera",
            "cert-title": "Courses & Certifications",
            "cert-1-date": "Issued: September 2026",
            "credly-text": "View credential on Credly",
            "part-title": "Participations & Competitions",
            "part-1-tag": "2025 & 2026 Editions",
            "part-1-desc": "Participation in both editions developing technological and innovative solutions under pressure in competitive environments.",
            "part-2-tag": "Scientific Research",
            "part-2-desc": 'Co-author of the scientific article <em>"Security conditions for students from Chorrera to attend their schools and return home"</em>.',
            "read-article": "Read full article",
            "part-3-tag": "In progress",
            "part-3-desc": "Active participation in a regional initiative and competition focused on cybersecurity and digital defense.",
            "stack-sec": "Security & Cybersecurity",
            "stack-net": "Networks & Protocols",
            "stack-dev": "Languages & Web",
            "stack-sys": "Systems & Cloud",
            "tag-forensics": "Digital Forensics",
            "tag-ubuntu": "Ubuntu Server/Desktop",
            "projects-title": "Projects & Developments",
            "status-dev": "In development",
            "proj-1-title": "Artificial Intelligence Development",
            "proj-1-desc": "Initial phase initiative focused on the design, training, and programming of an Artificial Intelligence model/application.",
            "link-soon": "Link coming soon",
            "status-cyber": "Cybersecurity & Networks",
            "proj-2-title": "Network Infrastructure & Educational Ransomware Lab",
            "proj-2-desc": "Virtualized environment in VirtualBox with 5 VMs (pfSense, Ubuntu Server, Backup, Desktop, and Kali Linux), controlled encryption scripts in Python, and Fail2ban mitigation.",
            "status-data": "Data Structures",
            "proj-3-title": "N-ary Tree File Management System",
            "proj-3-desc": "Hierarchical file system with CRUD operations, tree traversal visualization (preorder, inorder, postorder), and JSON persistence.",
            "proj-4-title": "Educational Tour Management System — UTP",
            "proj-4-desc": "Comprehensive cloud platform developed for the management, logistics, and control of academic tours of the Panama West Regional Center.",
            "status-jic": "JIC Research",
            "proj-5-title": "Student Security App Prototyping",
            "proj-5-desc": "Mobile prototype design focused on comprehensive protection and real-time monitoring of students in La Chorrera, backed by a survey of 102 students.",
            "view-pdf": "View article (PDF)",
            "status-firewall": "Perimeter Security",
            "proj-6-title": "pfSense Firewall Implementation & Hardening",
            "proj-6-desc": "Advanced perimeter security deployment with filtering rules, NAT, VPN (OpenVPN/IPsec), IDS/IPS with Suricata, and Captive Portal with HTTPS certification.",
            "status-web": "Secure Web Development",
            "proj-7-title": "CyberWeb — Secure Inventory System",
            "proj-7-desc": "Secure web application with role-based access control, hashed passwords, parameterized queries (PDO), and protection against XSS and CSRF vulnerabilities.",
            "tag-websec": "Web Security",
            "contact-title": "Contact",
            "contact-subtitle": "Let's connect and collaborate!",
            "contact-desc": "Do you have a proposal, project, or question? Send me a message and I'll get back to you as soon as possible.",
            "footer-rights": "All rights reserved."
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = 'es';

    function setLanguage(lang) {
        currentLang = lang;
        langText.textContent = lang === 'es' ? 'EN' : 'ES';
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
});