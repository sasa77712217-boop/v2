// ==================== BASE DE DATOS DE CONTENIDO GLOBAL ====================
const globalSearchDatabase = [
    // Página de Inicio
    { title: "Técnicas de Venta", keywords: "venta técnicas estrategias", page: "tecnicas-venta.html", section: "Inicio" },
    { title: "Atención al Cliente", keywords: "atención cliente servicio", page: "atencion-cliente.html", section: "Inicio" },
    { title: "Recursos Prácticos", keywords: "recursos checklists consejos", page: "recursos.html", section: "Inicio" },
    { title: "Quiz Interactivo", keywords: "quiz prueba conocimientos", page: "quiz.html", section: "Inicio" },
    
    // Técnicas de Venta
    { title: "Venta Consultiva", keywords: "venta consultiva asesor necesidades soluciones", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Técnica SPIN", keywords: "spin situación problema implicación necesidad", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Técnica AIDA", keywords: "aida atención interés deseo acción", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Venta Relacional", keywords: "venta relacional relaciones largo plazo confianza lealtad", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Venta Challenger", keywords: "venta challenger enseña personaliza control", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Cross-selling y Up-selling", keywords: "cross-selling up-selling venta cruzada productos complementarios", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Manejo de Objeciones", keywords: "objeciones manejo resistencia cliente", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    { title: "Técnicas de Cierre", keywords: "cierre venta técnicas conclusión", page: "tecnicas-venta.html", section: "Técnicas de Venta" },
    
    // Atención al Cliente
    { title: "Escucha Activa", keywords: "escucha activa atención cliente concentración", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Empatía Feel Felt Found", keywords: "empatía feel felt found sentimientos comprensión", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Trato Personalizado", keywords: "trato personalizado nombre cliente preferencias", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Comunicación Clara ELI5", keywords: "comunicación clara eli5 sencillo jerga", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Lenguaje Positivo", keywords: "lenguaje positivo soluciones constructivo", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Seguimiento Posventa", keywords: "seguimiento posventa satisfacción cliente", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Resolución de Problemas", keywords: "resolución problemas solución rápida", page: "atencion-cliente.html", section: "Atención al Cliente" },
    { title: "Actitud Profesional", keywords: "actitud profesional cortesía amabilidad", page: "atencion-cliente.html", section: "Atención al Cliente" },
    
    // Recursos
    { title: "Checklist Pre-Venta", keywords: "checklist pre-venta preparación reunión", page: "recursos.html", section: "Recursos" },
    { title: "Checklist de Comunicación", keywords: "checklist comunicación contacto visual", page: "recursos.html", section: "Recursos" },
    { title: "Pasos para el Éxito", keywords: "pasos éxito ventas proceso", page: "recursos.html", section: "Recursos" },
    { title: "Consejos Atención al Cliente", keywords: "consejos atención cliente servicio", page: "recursos.html", section: "Recursos" },
    { title: "Manejo de Objeciones Práctico", keywords: "manejo objeciones precio proveedor", page: "recursos.html", section: "Recursos" },
    { title: "Guía de Seguimiento", keywords: "guía seguimiento contacto feedback", page: "recursos.html", section: "Recursos" },
    { title: "Desarrollo Profesional", keywords: "desarrollo profesional mejora continua", page: "recursos.html", section: "Recursos" },
    { title: "Gestión del Tiempo de Venta", keywords: "gestión tiempo venta productividad", page: "recursos.html", section: "Recursos" },
    { title: "Frases Clave", keywords: "frases clave conversación empatía cierre", page: "recursos.html", section: "Recursos" },
    { title: "Métricas Importantes", keywords: "métricas conversión satisfacción cliente", page: "recursos.html", section: "Recursos" }
];

// ==================== MENÚ HAMBURGUESA ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ==================== BÚSQUEDA GLOBAL MEJORADA ==================== 
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (searchTerm.length === 0) {
            return;
        }

        // Filtrar resultados
        const results = globalSearchDatabase.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm);
            const keywordsMatch = item.keywords.toLowerCase().includes(searchTerm);
            return titleMatch || keywordsMatch;
        });

        // Mostrar resultados
        if (results.length > 0) {
            const resultsList = document.createElement('div');
            resultsList.className = 'search-results-list';

            results.forEach((result, index) => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <div class="result-content">
                        <strong>${result.title}</strong>
                        <small>${result.section}</small>
                    </div>
                    <span class="result-icon">→</span>
                `;
                
                resultItem.addEventListener('click', function() {
                    window.location.href = result.page;
                });
                
                resultItem.addEventListener('mouseover', function() {
                    this.style.backgroundColor = '#f0f0f0';
                });
                
                resultItem.addEventListener('mouseout', function() {
                    this.style.backgroundColor = '';
                });
                
                resultsList.appendChild(resultItem);
            });

            searchResults.appendChild(resultsList);

            // Agregar contador de resultados
            const counter = document.createElement('div');
            counter.className = 'search-counter';
            counter.textContent = `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`;
            searchResults.appendChild(counter);
        } else {
            searchResults.innerHTML = '<p class="no-results">No se encontraron resultados. Intenta con otras palabras clave.</p>';
        }
    });

    // Cerrar búsqueda al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.innerHTML = '';
        }
    });

    // Permitir navegación con teclado
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.innerHTML = '';
            this.value = '';
        }
    });
}

// ==================== QUIZ INTERACTIVO ==================== 
const quizData = [
    {
        question: "¿Qué significa el acrónimo SPIN en técnicas de venta?",
        options: [
            "Situación, Problema, Implicación, Necesidad",
            "Sistema, Proceso, Información, Negociación",
            "Segmentación, Presentación, Interés, Negocio",
            "Solución, Precio, Interés, Necesidad"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el primer paso de la técnica AIDA?",
        options: [
            "Interés",
            "Atención",
            "Deseo",
            "Acción"
        ],
        correct: 1
    },
    {
        question: "¿Qué técnica sugiere explicar las cosas de forma muy sencilla?",
        options: [
            "SPIN",
            "FAB",
            "ELI5",
            "AIDA"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el objetivo principal de la escucha activa?",
        options: [
            "Hablar más que el cliente",
            "Entender completamente las necesidades del cliente",
            "Vender rápidamente",
            "Evitar preguntas incómodas"
        ],
        correct: 1
    },
    {
        question: "¿Qué es la venta consultiva?",
        options: [
            "Vender sin hablar con el cliente",
            "Asesorar al cliente según sus necesidades específicas",
            "Vender productos sin importar la necesidad",
            "Consultar solo con el gerente"
        ],
        correct: 1
    },
    {
        question: "En la técnica 'Feel, Felt, Found', ¿qué representa 'Felt'?",
        options: [
            "Lo que el cliente siente ahora",
            "Mostrar que otros han sentido igual",
            "Lo que encontraste",
            "Lo que falta"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es una ventaja del cross-selling?",
        options: [
            "Reducir el precio de venta",
            "Aumentar el ticket promedio",
            "Confundir al cliente",
            "Vender menos productos"
        ],
        correct: 1
    },
    {
        question: "¿Qué es el seguimiento posventa?",
        options: [
            "Ignorar al cliente después de vender",
            "Revisar la satisfacción del cliente después de la venta",
            "Vender más sin preguntar",
            "Cambiar de cliente"
        ],
        correct: 1
    },
    {
        question: "¿Qué actitud es esencial en la atención al cliente?",
        options: [
            "Ser impaciente",
            "Ser desatento",
            "Ser empático",
            "Ser desinteresado"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es un beneficio del trato personalizado?",
        options: [
            "Ahorrar tiempo",
            "Hacer sentir especial al cliente",
            "Reducir costos",
            "Automatizar todo"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    quizContainer.innerHTML = '';
    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <h4>Pregunta ${index + 1} de ${quizData.length}</h4>
            <h4>${q.question}</h4>
            <div class="quiz-options">
                ${q.options.map((option, optIndex) => `
                    <div class="quiz-option">
                        <input type="radio" id="q${index}o${optIndex}" name="question${index}" value="${optIndex}">
                        <label for="q${index}o${optIndex}">${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });

    const submitBtn = document.createElement('div');
    submitBtn.className = 'quiz-button';
    submitBtn.innerHTML = '<button class="cta-button" onclick="submitQuiz()">Enviar Respuestas</button>';
    quizContainer.appendChild(submitBtn);
}

function submitQuiz() {
    let allAnswered = true;
    userAnswers = [];

    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (!selected) {
            allAnswered = false;
        } else {
            userAnswers.push(parseInt(selected.value));
        }
    });

    if (!allAnswered) {
        alert('Por favor responde todas las preguntas antes de enviar.');
        return;
    }

    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });

    showResults();
}

function showResults() {
    const quizContainer = document.getElementById('quizContainer');
    const quizResults = document.getElementById('quizResults');

    if (quizContainer) quizContainer.style.display = 'none';
    if (quizResults) quizResults.style.display = 'block';

    const percentage = Math.round((score / quizData.length) * 100);
    const resultScore = document.getElementById('resultScore');
    const resultMessage = document.getElementById('resultMessage');

    if (resultScore) resultScore.textContent = `${score} de ${quizData.length} (${percentage}%)`;

    let message = '';
    if (percentage === 100) {
        message = '🎉 ¡Excelente! Dominas perfectamente las técnicas de ventas y atención al cliente.';
    } else if (percentage >= 80) {
        message = '👏 ¡Muy bien! Tienes un excelente conocimiento de las técnicas.';
    } else if (percentage >= 60) {
        message = '✅ Buen trabajo. Sigue practicando para mejorar tu desempeño.';
    } else if (percentage >= 40) {
        message = '📚 Necesitas repasar algunos conceptos. ¡Vuelve a intentarlo!';
    } else {
        message = '💪 No te desanimes. Revisa el contenido y vuelve a intentarlo.';
    }

    if (resultMessage) resultMessage.textContent = message;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    const quizContainer = document.getElementById('quizContainer');
    const quizResults = document.getElementById('quizResults');

    if (quizContainer) quizContainer.style.display = 'block';
    if (quizResults) quizResults.style.display = 'none';

    loadQuiz();
}

if (document.getElementById('quizContainer')) {
    loadQuiz();
}

// ==================== FORMULARIO DE CONTACTO ==================== 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        if (!name || !email || !subject || !message) {
            formMessage.textContent = '❌ Por favor completa todos los campos requeridos.';
            formMessage.className = 'form-message error';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = '❌ Por favor ingresa un correo electrónico válido.';
            formMessage.className = 'form-message error';
            return;
        }

        console.log('Formulario enviado:', {
            name,
            email,
            phone,
            subject,
            message,
            timestamp: new Date().toLocaleString()
        });

        formMessage.textContent = '✅ ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.';
        formMessage.className = 'form-message success';

        contactForm.reset();

        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
    });
}

// ==================== SCROLL SUAVE ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== EFECTO DE CARGA ==================== 
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ==================== RESALTAR SECCIÓN ACTIVA ==================== 
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #3498db;
        border-bottom: 2px solid #3498db;
    }
`;
document.head.appendChild(style);

console.log('✅ Script cargado correctamente. Buscador global activado.');
