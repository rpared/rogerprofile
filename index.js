//DOM Variables
let switchBtn = document.getElementById("switch-btn");
let subtitle = document.getElementById("subtitle");
let aboutBtn = document.getElementById("about-btn");
let reelBtn = document.getElementById("reel-btn");
let contentCreationBtn = document.getElementById("content-btn");
let aboutText = document.getElementById("about");
let recentExample = document.getElementById("recent");
let projectsText = document.querySelector("#projecttext");
let recentVid = document.getElementById("recentvideo");
let showcase = document.querySelector(".showcase");
let cvDownload = document.getElementById("cv-el");
let examplesText = document.getElementById("examples");
let language = "eng";

//DOM Variables - collapsing menus or sections
let aboutDisplay = document.getElementById("about_load");
let reelDisplay = document.getElementById("reel_load");
let contentCreationDisplay = document.getElementById("contentcreation");

//translations
let aboutTextENG = `Earth citizen, persistent, straightforward, hardworking and nonconformist. To me life is an adventure or an experience, a learning experience.
<br>I have 15+ years of experience with branding, overall design, marketing, communication strategies, advertising, content creation, campaign planning and cms websites.
<ul>
   <li>Video content creator.</li> 
   <li>Enjoy learning, punctuality and paying attention to details.</li> 
   <li>Love traveling, animals, metal and the gym. I am a vegan, an animal rights activist a metalhead and gym addict.</li>
   <li>Expanding knowledge in development and coding. Currently studying web development.</li>            
</ul>`;
let aboutTextESP = `Ciudadano de la Tierra, perseverante, franco, trabajador e inconforme. Para mí la vida es una aventura o una experiencia, una experiencia de aprendizaje.
<br>Tengo más de 15 años de experiencia en branding, diseño general, marketing, estrategias de comunicación, publicidad, creación de contenido, planificación de campañas y portales cms.
<ul>
   <li>Creador de contenido audiovisual.</li> 
   <li>Disfruto aprender, la puntualidad y prestar atención a los detalles.</li> 
   <li>Amo viajar, los animales, el metal y el gimnasio. Soy vegano, activista por los derechos de los animales, metalero y adicto al gimnasio.</li>
   <li>Expandiendo mi conocimiento en desarrollo y programación. Actualmente estudio desarrollo web.</li>            
</ul>`;

let cvENG = `<img class="wheelimg" src="images/circle.png" alt="CV">
  <span class="btntext_cv">Download CV</span>  
`;
let cvESP = `<img class="wheelimg" src="images/circle.png" alt="CV">
  <span class="btntext_cv">Descargar CV</span>  
`;

let videoIframeENG = `<iframe width="100%" height="480px" src="https://www.youtube.com/embed/74JMs3JTQls?controls=1"></iframe>`;
let videoIframeESP = `<iframe width="100%" height="480px" src="https://www.youtube.com/embed/gNNoj58m9nU?controls=1"></iframe>`;

let showcaseENG = `<a href="https://youtu.be/rn8YJqRFa5A" target="_blank"><img src="images/01_Thumb.jpg" alt="No Procrear">
<div class="tooltip">Open YouTube</div></a>
<a href="https://youtu.be/KWnEsVY4gPQ" target="_blank"><img src="images/TheShavedBiped_Thumb.jpg" alt="The Shaved Biped">
<div class="tooltip">Open YouTube</div></a>
<a href="https://youtu.be/dl2gD5viNqU" target="_blank"><img src="images/PlantsFeelToo_Thumb.jpg" alt="PlantsFeelToo">
<div class="tooltip">Open YouTube</div></a>`;
let showcaseESP = `<a href="https://youtu.be/rn8YJqRFa5A" target="_blank"><img src="images/01_Thumb.jpg" alt="No Procrear">
<div class="tooltip">Abrir YouTube</div></a>
<a id="showcase2" href="https://youtu.be/TTo1nsCuFWE" target="_blank"><img src="images/31_Thumb.jpg" alt="31. El Veganismo">
<div class="tooltip">Abrir YouTube</div></a>
<a href="https://youtu.be/qr192wMBPxU" target="_blank"><img src="images/LasPlantasSienten_Thumb.jpg" alt="Las Plantas también Sienten">
<div class="tooltip">Abrir YouTube</div></a>`;


//Functions on click event to change language
function eng_el(){
    switchBtn.style.left = '0px';
    subtitle.textContent = "Designer & Content Creator";
    aboutBtn.textContent = "About";
    reelBtn.textContent = "Recent Work Reel";
    contentCreationBtn.textContent = "Content Creation";
    aboutText.innerHTML = aboutTextENG;
    cvDownload.innerHTML = cvENG;
    recentExample.textContent = "Recent example:";
    projectsText.textContent = "Projects:";
    recentVid.innerHTML = videoIframeENG;
    showcase.innerHTML = showcaseENG;
    examplesText.textContent = "Examples:";
    language = "eng";
}

function esp_el(){
    switchBtn.style.left = '36px';
    subtitle.textContent = "Diseñador y Creador de Contenido";
    aboutBtn.textContent = "Acerca de";
    reelBtn.textContent = "Reel de Trabajo Reciente";
    contentCreationBtn.textContent = "Creación de Contenido";
    aboutText.innerHTML = aboutTextESP;
    cvDownload.innerHTML = cvESP;
    recentExample.textContent = "Ejemplo reciente:";
    projectsText.textContent = "Proyectos:";
    recentVid.innerHTML = videoIframeESP;
    showcase.innerHTML = showcaseESP;
    examplesText.textContent = "Ejemplos:";
    language = "esp";
}

/*function to load About Text changing CSS style display from none to block*/
function about_load(){   
    if (aboutDisplay == "loaded"){ 
        document.querySelector("#about").style.display = "none";
        // document.querySelector("#about-btn").style.color = "#969696";
        aboutDisplay = "unloaded";}
        else{document.querySelector("#about").style.display = "block";
        // document.querySelector("#about-btn").style.color = "rgb(245, 177, 150)";
        aboutDisplay = "loaded";
        document.querySelector("#reel").style.display = "none";
        reelDisplay = "unloaded";
        document.querySelector("#contentcreation").style.display = "none";
        contentCreationDisplay = "unloaded";
        }
    }

/*function to load Reel changing CSS style display from none to block*/
function reel_load(){   
    if (reelDisplay == "loaded"){ 
        document.querySelector("#reel").style.display = "none";
        reelDisplay = "unloaded";}
        else{document.querySelector("#reel").style.display = "block";
        reelDisplay = "loaded";
        document.querySelector("#about").style.display = "none";
        aboutDisplay = "unloaded";
        document.querySelector("#contentcreation").style.display = "none";
        contentCreationDisplay = "unloaded";
        }
    }

/*function to load Content Creation changing CSS style display from none to block*/
function contentcreation_load(){   
    if (contentCreationDisplay == "loaded"){ 
        document.querySelector("#contentcreation").style.display = "none";
        contentCreationDisplay = "unloaded";}
        else{document.querySelector("#contentcreation").style.display = "block";
        contentCreationDisplay = "loaded";
        document.querySelector("#about").style.display = "none";
        aboutDisplay = "unloaded";
        document.querySelector("#reel").style.display = "none";
        reelDisplay = "unloaded";
        }
    }

/*function to unload others when Download CV is clicked*/
function collapseothers(){
    document.querySelector("#about").style.display = "none";
    aboutDisplay = "unloaded";
    document.querySelector("#reel").style.display = "none";
    reelDisplay = "unloaded";
    document.querySelector("#contentcreation").style.display = "none";
    contentCreationDisplay = "unloaded";
}
