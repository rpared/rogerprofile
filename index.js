//DOM Variables
let switchBtn = document.getElementById("switch-btn");
let subtitle = document.getElementById("subtitle");
let aboutBtn = document.getElementById("about-btn");
let workBtn = document.getElementById("work-btn");
let projectsBtn = document.getElementById("projects-btn");
let aboutText = document.getElementById("about");
let javaProjectText = document.getElementById("javaproject");
let reelText = document.getElementById("reel");
let websiteText = document.getElementById("website");
let recentExample = document.getElementById("recent");
let projectsText = document.querySelector("#projecttext");
let recentVid = document.getElementById("recentvideo");
let showcase = document.querySelector(".showcase");
let cvDownload = document.getElementById("cv-el");
let examplesText = document.getElementById("examples");
let language = "eng";

//DOM Variables - collapsing menus or sections
let aboutDisplay = document.getElementById("about_load");
let workDisplay = document.getElementById("reel_load");
let projectsDisplay = document.getElementById("projects");

//translations
let aboutTextENG = `<p>
Earth citizen, persistent, straightforward, hardworking and nonconformist. To me life is an adventure or an experience, a learning experience.
<br>I was born in Quito, Ecuador (South America), became a <strong>Graphic Designer</strong> and <strong>Brand Designer</strong> in Buenos Aires, Argentina, now I am an IT student in Toronto, Canada.
</p><p>
I have 10+ years of experience with branding, overall design, marketing, communication strategies, advertising, content creation, campaign planning and cms websites. Have worked as a Graphic Designer, a Brand Manager and been self employed for 10 years handling clients with associates by the corp. name <em>"costra"</em>.
<br>I am also an activist for animal and human liberation, a subject dear to my heart, content creation on the subject is one of my endeavours.
</p>
<ul>
<li style="list-style: none; font-weight: 700; color: rgb(245, 177, 150);">Some highlights:</li>
 <li>Enjoy learning, punctuality and paying attention to details.</li> 
 <li>Love animals, traveling, metal music and the gym. I am a vegan, an animal rights activist, a metalhead and fitness enthusiast.</li>
 <li>Content creator.</li> 
 <li>Expanding knowledge in IT, web development and coding. Currently enrolled in Information Technology Solutions Post Graduate</li>            
</ul>`;
let aboutTextESP = `<p>
Ciudadano de la Tierra, perseverante, franco, trabajador e inconforme. Para mí la vida es una aventura o una experiencia, una experiencia de aprendizaje.
<br>Nací en Quito, Ecuador (Sudamérica), me convertí en <strong>Diseñador Gráfico</strong> y <strong>Especialista en Branding</strong> en Buenos Aires, Argentina, hoy soy estudiante de IT en Toronto, Canadá.
</p><p>
Tengo más de 10 años de experiencia en branding, diseño general, marketing, estrategias de comunicación, publicidad, creación de contenido, planificación de campañas y portales cms. He traabjado como Diseñador Gráfico, Jefe de Marca y he sido autoempleado más de 10 años trabajando con clientes junto a mis socios bajo el nombre corporativo <em>"costra"</em>.
<br>También soy un activista por la liberación animal y humana, asunto inevitable en mi corazón, la creación de contenido del tema se ha convertido en una misión para mí.
</p>
<ul>
<li style="list-style: none; font-weight: 700; color: rgb(245, 177, 150);">Algunos puntos a destacar:</li>
   <li>Disfruto aprender, la puntualidad y prestar atención a los detalles.</li> 
   <li>Amo a los animales, viajar, el metal y el gimnasio. Soy vegano, activista por los derechos de los animales, metalero y adicto al gym.</li>
   <li>Creador de contenido.</li> 
   <li>Expandiendo mi conocimiento en IT, desarrollo web y programación. Actualmente estoy en un postgrado de Soluciones de TI.</li>            
</ul>`;

let cvENG = `<img class="wheelimg" src="images/circle.png" alt="CV">
  <span class="btntext_cv">Download Resume</span>  
`;
let cvESP = `<img class="wheelimg" src="images/circle.png" alt="CV">
  <span class="btntext_cv">Descargar CV</span>  
`;

let videoIframeENG = `<iframe width="100%" height="480px" src="https://www.youtube.com/embed/iC424h6NtyA?controls=1"></iframe>`;
let videoIframeESP = `<iframe width="100%" height="480px" src="https://www.youtube.com/embed/gNNoj58m9nU?controls=1"></iframe>`;

let showcaseENG = `<div class="showcaselink">
<a href="https://youtu.be/rn8YJqRFa5A" target="_blank"><img src="images/01_Thumb.jpg" alt="Algo está Mal en el Mundo">
  <div class="tooltip">(YouTube)</div>
</a></div>
<div class="showcaselink">
<a href="https://youtu.be/KWnEsVY4gPQ" target="_blank"><img src="images/TheShavedBiped_Thumb.jpg" alt="The Shaved Biped">
  <div class="tooltip">(YouTube)</div>
</a></div>
<div class="showcaselink">
<a href="https://youtu.be/dl2gD5viNqU" target="_blank"><img src="images/PlantsFeelToo_Thumb.jpg" alt="PlantsFeelToo">
  <div class="tooltip">(YouTube)</div>
</a></div>`;
let showcaseESP = `<div class="showcaselink"><a href="https://youtu.be/rn8YJqRFa5A" target="_blank"><img src="images/01_Thumb.jpg" alt="No Procrear">
<div class="tooltip">YouTube</div></a></div>
<div class="showcaselink"><a id="showcase2" href="https://youtu.be/TTo1nsCuFWE" target="_blank"><img src="images/31_Thumb.jpg" alt="31. El Veganismo">
<div class="tooltip">YouTube</div></a></div>
<div class="showcaselink"><a href="https://youtu.be/qr192wMBPxU" target="_blank"><img src="images/LasPlantasSienten_Thumb.jpg" alt="Las Plantas también Sienten">
<div class="tooltip">YouTube</div></a></div>`;

//Functions on click event to change language
function eng_el() {
  switchBtn.style.left = "0px";
  subtitle.textContent = "Designer, Developer & Content Creator";
  aboutBtn.textContent = "About";
  workBtn.textContent = "Recent Work";
  projectsBtn.textContent = "Projects";
  aboutText.innerHTML = aboutTextENG;
  cvDownload.innerHTML = cvENG;
  document.getElementById(
    "vfootprint"
  ).innerHTML = `<span>------</span> App to calculate vegan footprint (HTML + CSS + Javascript)::</p>`;

  document.getElementById(
    "freshies"
  ).innerHTML = `<span>------</span> Website for new int'l College students (HTML + CSS + Javascript):</p>`;
  javaProjectText.innerHTML = `<span>------</span> Online animal statistics website (HTML + CSS + Javascript):</p>`;
  reelText.innerHTML = `<span>------</span> Not so recent reel (2021) for Costra (Creative agency run with partners):</p>`;
  websiteText.innerHTML = `<span>------</span> Costra (Creative agency run with partners) Website:</p>`;
  recentExample.innerHTML = `<span>------</span> Recent content creation video (Shaved Biped):`;
  projectsText.innerHTML = `<span>------</span> Projects:`;
  recentVid.innerHTML = videoIframeENG;
  document.getElementById(
    "portfolio"
  ).innerHTML = `<span>------</span> Check out more of my work in my portfolio:</p>`;
  showcase.innerHTML = showcaseENG;
  examplesText.innerHTML = `<span>------</span> Examples:`;
  language = "eng";
}

function esp_el() {
  switchBtn.style.left = "36px";
  subtitle.textContent = "Diseñador, Desarrolador y Creador de Contenido";
  aboutBtn.textContent = "Acerca de";
  workBtn.textContent = "Trabajo Reciente";
  projectsBtn.textContent = "Proyectos";
  aboutText.innerHTML = aboutTextESP;
  cvDownload.innerHTML = cvESP;
  document.getElementById(
    "vfootprint"
  ).innerHTML = `<span>------</span> App para calcular la huella vegana en el tiempo (HTML + CSS + Javascript)::</p>`;
  document.getElementById(
    "freshies"
  ).innerHTML = `<span>------</span> Web para estudiantes internacionales en Toronto (HTML + CSS + Javascript)::</p>`;
  javaProjectText.innerHTML = `<span>------</span> Proyecto de estadísticas en Javascript:</p>`;
  reelText.innerHTML = `<span>------</span> Reel de trabajos, no tan recientes (2021), Costra (Agencia que manejamos con socios):</p>`;
  websiteText.innerHTML = `<span>------</span> Website Costra (Agencia que manejamos con socios):</p>`;
  recentExample.innerHTML = `<span>------</span> Video reciente (Bípedo Rasurado):`;
  document.getElementById(
    "portfolio"
  ).innerHTML = `<span>------</span> Revisa más trabajos en mi portfolio:</p>`;
  projectsText.innerHTML = `<span>------</span> Proyectos:`;
  recentVid.innerHTML = videoIframeESP;
  showcase.innerHTML = showcaseESP;
  examplesText.innerHTML = `<span>------</span> Ejemplos:`;
  language = "esp";
}

/*function to load About Text changing CSS style display from none to block*/
function about_load() {
  if (aboutDisplay == "loaded") {
    document.querySelector("#about").style.display = "none";
    // document.querySelector("#about-btn").style.color = "#969696";
    aboutDisplay = "unloaded";
  } else {
    document.querySelector("#about").style.display = "block";
    // document.querySelector("#about-btn").style.color = "rgb(245, 177, 150)";
    aboutDisplay = "loaded";
    document.querySelector("#workprojects").style.display = "none";
    workDisplay = "unloaded";
    document.querySelector("#projects").style.display = "none";
    projectsDisplay = "unloaded";
  }
}

/*function to load Reel changing CSS style display from none to block*/
function work_load() {
  if (workDisplay == "loaded") {
    document.querySelector("#workprojects").style.display = "none";
    workDisplay = "unloaded";
  } else {
    document.querySelector("#workprojects").style.display = "block";
    workDisplay = "loaded";
    document.querySelector("#about").style.display = "none";
    aboutDisplay = "unloaded";
    document.querySelector("#projects").style.display = "none";
    projectsDisplay = "unloaded";
  }
}

/*function to load Content Creation changing CSS style display from none to block*/
function projects_load() {
  if (projectsDisplay == "loaded") {
    document.querySelector("#projects").style.display = "none";
    projectsDisplay = "unloaded";
  } else {
    document.querySelector("#projects").style.display = "block";
    projectsDisplay = "loaded";
    document.querySelector("#about").style.display = "none";
    aboutDisplay = "unloaded";
    document.querySelector("#workprojects").style.display = "none";
    workDisplay = "unloaded";
  }
}

/*function to unload others when Download CV is clicked*/
function collapseothers() {
  document.querySelector("#about").style.display = "none";
  aboutDisplay = "unloaded";
  document.querySelector("#workprojects").style.display = "none";
  workDisplay = "unloaded";
  document.querySelector("#projects").style.display = "none";
  projectsDisplay = "unloaded";
}

//Pop Up

document.getElementById("closebtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// Select element with box class, assign to box variable
const popUp = document.querySelector("#popup");

setTimeout(popUpDisplay, 1800);

function popUpDisplay() {
  popUp.style.display = "flex";
}

// to close popup when clicked outside
const popUpContent = document.querySelector("#popup-content");
// Detect all clicks on the document
document.addEventListener("click", function (event) {
  // If user clicks inside the element, do nothing
  if (event.target.closest("#popup-content")) return;
  // If user clicks outside the element, hide it!
  popUp.style.display = "none";
});
