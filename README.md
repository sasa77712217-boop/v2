# 📚 Centro de Aprendizaje: Ventas y Atención al Cliente

## 📋 Descripción del Proyecto

Este es un sitio web educativo completo diseñado para enseñar técnicas efectivas de ventas y atención al cliente. El proyecto incluye contenido estructurado, herramientas interactivas y recursos para mejorar las habilidades comerciales.

### Características Principales

✅ **Página de Inicio Atractiva** - Bienvenida y llamada a la acción  
✅ **Menú de Navegación Responsivo** - Acceso fácil a todas las secciones  
✅ **Secciones Informativas** - Técnicas de venta y atención al cliente  
✅ **Buscador Funcional en JavaScript** - Busca contenido en tiempo real  
✅ **Quiz de Autoevaluación** - 10 preguntas interactivas  
✅ **Formulario de Contacto** - Recopilación de consultas  
✅ **Diseño Responsivo** - Funciona en desktop, tablet y móvil  
✅ **Historial de Commits Git** - Control de versiones  

---

## 📁 Estructura del Proyecto

```
ventas-atencion-cliente/
│
├── index.html              # Página de inicio
├── tecnicas-venta.html     # Página de técnicas de venta
├── atencion-cliente.html   # Página de atención al cliente
├── recursos.html           # Página de recursos prácticos
├── quiz.html               # Página del quiz interactivo
├── contacto.html           # Página de contacto
├── css/
│   └── styles.css          # Estilos CSS responsivos
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── images/                 # Carpeta para imágenes (opcional)
├── README.md               # Este archivo
├── .gitignore              # Configuración de Git
└── .git/                   # Repositorio Git
```

---

## 🚀 Cómo Usar el Proyecto

### 1. **Instalación Local**

1. Descomprime el archivo `ventas-atencion-cliente.zip`
2. Navega a la carpeta del proyecto:
   ```bash
   cd ventas-atencion-cliente
   ```

### 2. **Ejecutar el Sitio Web**

**Opción A: Usando Python (Recomendado)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en: `http://localhost:8000`

**Opción B: Usando Node.js**
```bash
# Instala http-server globalmente (si no lo tienes)
npm install -g http-server

# Ejecuta el servidor
http-server
```

**Opción C: Abrir directamente**
- Haz doble clic en `index.html` para abrir en tu navegador predeterminado

### 3. **Explorar el Sitio**

- **Inicio**: Bienvenida y resumen del proyecto
- **Técnicas de Venta**: Aprende sobre SPIN, AIDA, Venta Consultiva, etc.
- **Atención al Cliente**: Descubre técnicas de servicio excepcional
- **Recursos**: Checklist y consejos rápidos
- **Quiz**: Prueba tus conocimientos (10 preguntas)
- **Contacto**: Envía tus consultas

---

## 🔍 Funcionalidades Detalladas

### 1. **Buscador en JavaScript**

- Busca en tiempo real mientras escribes
- Filtra por palabras clave, títulos y contenido
- Hace clic en los resultados para navegar a la sección

**Cómo usar:**
1. Ve a la sección "Busca contenido"
2. Escribe una palabra clave (ej: "SPIN", "empatía", "venta")
3. Haz clic en los resultados para ir a esa sección

### 2. **Quiz Interactivo**

- 10 preguntas sobre ventas y atención al cliente
- Respuestas de opción múltiple
- Calificación automática con porcentaje
- Mensajes personalizados según el desempeño

**Cómo usar:**
1. Desplázate a la sección "Quiz de Autoevaluación"
2. Responde todas las preguntas
3. Haz clic en "Enviar Respuestas"
4. Recibe tu calificación y retroalimentación

### 3. **Formulario de Contacto**

- Campos: Nombre, Email, Teléfono, Asunto, Mensaje
- Validación de datos en cliente
- Mensajes de confirmación

**Nota:** El formulario actualmente valida y muestra mensajes en el navegador. Para enviar emails reales, necesitarás integrar un backend.

### 4. **Menú Responsivo**

- Menú hamburguesa en dispositivos móviles
- Navegación fluida entre secciones
- Indicador de sección activa

---

## 🎨 Personalización

### Cambiar Colores

Abre `css/styles.css` y modifica las variables CSS:

```css
:root {
    --primary-color: #2c3e50;      /* Color principal (azul oscuro) */
    --secondary-color: #3498db;    /* Color secundario (azul) */
    --accent-color: #e74c3c;       /* Color de énfasis (rojo) */
    --success-color: #27ae60;      /* Color de éxito (verde) */
}
```

### Agregar Nuevas Secciones

1. Abre `index.html`
2. Agrega una nueva sección:
   ```html
   <section id="nueva-seccion" class="section">
       <div class="container">
           <h2>Mi Nueva Sección</h2>
           <!-- Contenido aquí -->
       </div>
   </section>
   ```
3. Agrega el enlace en el menú de navegación

### Agregar Más Preguntas al Quiz

Abre `js/script.js` y agrega objetos a `quizData`:

```javascript
{
    question: "Tu pregunta aquí?",
    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    correct: 0  // Índice de la respuesta correcta (0-3)
}
```

---

## 📱 Responsividad

El sitio está optimizado para:
- **Desktop**: 1920px y superior
- **Tablet**: 768px a 1024px
- **Móvil**: 320px a 767px

Todos los elementos se adaptan automáticamente según el tamaño de la pantalla.

---

## 🔧 Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|------------|
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos responsivos y animaciones |
| **JavaScript (Vanilla)** | Interactividad sin dependencias |
| **Git** | Control de versiones |

---

## 📊 Contenido Incluido

### Técnicas de Venta
1. **Venta Consultiva** - Asesoría personalizada
2. **Técnica SPIN** - Situación, Problema, Implicación, Necesidad
3. **Técnica AIDA** - Atención, Interés, Deseo, Acción
4. **Venta Relacional** - Construcción de relaciones duraderas
5. **Venta Challenger** - Enseñanza y control
6. **Cross-selling y Up-selling** - Aumentar valor de venta

### Técnicas de Atención al Cliente
1. **Escucha Activa** - Atención completa
2. **Empatía (Feel, Felt, Found)** - Validación emocional
3. **Trato Personalizado** - Atención individual
4. **Comunicación Clara (ELI5)** - Explicaciones sencillas
5. **Lenguaje Positivo** - Enfoque en soluciones
6. **Seguimiento Posventa** - Satisfacción continua

---

## 📄 Páginas del Sitio

| Página | Descripción | URL |
|--------|-------------|-----|
| **Inicio** | Bienvenida y resumen del proyecto | `index.html` |
| **Técnicas de Venta** | 8 técnicas efectivas de venta | `tecnicas-venta.html` |
| **Atención al Cliente** | 8 técnicas de servicio excepcional | `atencion-cliente.html` |
| **Recursos** | Checklists, consejos y guías prácticas | `recursos.html` |
| **Quiz** | 10 preguntas interactivas de autoevaluación | `quiz.html` |
| **Contacto** | Formulario de contacto y FAQ | `contacto.html` |

---

## 🌐 Publicar en GitHub Pages

### Paso 1: Crear Repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Crea un nuevo repositorio llamado `ventas-atencion-cliente`
3. **No** inicialices con README (ya tienes uno)

### Paso 2: Subir Archivos

```bash
# Navega a la carpeta del proyecto
cd ventas-atencion-cliente

# Agrega el repositorio remoto
git remote add origin https://github.com/tu-usuario/ventas-atencion-cliente.git

# Sube los cambios
git branch -M main
git push -u origin main
```

### Paso 3: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Abre **Settings** → **Pages**
3. En "Source", selecciona **main** y **/ (root)**
4. Haz clic en **Save**
5. Tu sitio estará disponible en: `https://tu-usuario.github.io/ventas-atencion-cliente`

---

## 📝 Historial de Commits Git

El proyecto incluye un historial de commits que documenta el desarrollo:

```bash
# Ver historial de commits
git log --oneline

# Ver cambios en un commit específico
git show <commit-hash>
```

### Commits Incluidos

1. **Commit 1**: Estructura HTML principal con navegación y secciones
2. **Commit 2**: Estilos CSS responsivos y animaciones
3. **Commit 3**: Funcionalidades JavaScript (búsqueda, quiz, formulario, menú)
4. **Commit 4**: README documentado con instrucciones completas
5. **Commit 5**: Archivo .gitignore
6. **Commit 6**: Separar contenido en múltiples páginas HTML
7. **Commit 7**: Actualizar estilos CSS para nuevas páginas

---

## 🐛 Solución de Problemas

### El sitio no se abre
- Asegúrate de usar un servidor local (no abras el archivo directamente)
- Verifica que el puerto 8000 no esté en uso

### El buscador no funciona
- Abre la consola del navegador (F12)
- Verifica que no haya errores de JavaScript
- Asegúrate de que `js/script.js` esté correctamente vinculado

### El quiz no guarda respuestas
- Recarga la página
- Limpia el caché del navegador
- Intenta en otro navegador

### El formulario no envía
- El formulario actualmente es solo validación en cliente
- Para enviar emails, necesitas un backend (Node.js, PHP, etc.)

---

## 📧 Contacto y Soporte

Para preguntas o sugerencias sobre el contenido, usa el formulario de contacto en el sitio web.

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y comercial.

---

## ✨ Mejoras Futuras

- [ ] Integración con backend para envío de emails
- [ ] Base de datos de usuarios
- [ ] Certificados de finalización
- [ ] Más preguntas en el quiz
- [ ] Videos educativos
- [ ] Descargas de recursos (PDF)
- [ ] Comentarios y calificaciones

---

## 🎓 Créditos

Desarrollado como proyecto educativo sobre técnicas de ventas y atención al cliente.

**Última actualización:** Julio 2024

---

¡Gracias por usar este sitio educativo! 🚀
< ! - -   C o m m i t   8   - - >  
 