let BackGround = document.querySelector("body");
let modeIcon = document.getElementById("darkmode_btn");
let Btns = document.querySelectorAll(".btn");
let Title = document.querySelector(".title");
let Email = document.querySelector(".emailbtn");
let Wheel = document.querySelectorAll(".wheelimg");
let costraBrand = document.getElementById("costrabrand");
let animalKillBrand = document.getElementById("animalkillbrand");
let workProjectLogo = document.querySelectorAll(".workprojectlogo");
let opusBrands = document.querySelectorAll(".aopus");
let showCase = document.querySelectorAll(".showcaselink");
let Mode = "dark";
let i;

function dark_mode(){
   

    if (Mode == "light"){
        BackGround.style.backgroundColor='rgb(37, 37, 37)';
        BackGround.style.color='#969696';
        Title.style.color='rgb(245, 177, 150)';
        Email.style.color='rgb(245, 177, 150)';
        Mode = "dark";
        modeIcon.innerHTML = `<img id="darkmode_pic" src="images/lightmode_icon.png" alt="Dark mode"> <div class="tooltip_text">Light mode</div>`;
        for (i = 0; i < Btns.length; i++) {
          Btns[i].style.backgroundColor = 'rgb(37, 37, 37)';
          Btns[i].style.color = '#969696';
        }
        function changeLogos(){
          animalKillBrand.src = "images/AnimalKill-Brand_W.png";
          costraBrand.src='images/costrabrand.png';
        }
        changeLogos()
        for(i=0; i < opusBrands.length; i++){
          opusBrands[i].style.filter = "brightness(100%)";
        }
        for(i=0; i < showCase.length; i++){
          showCase[i].style.border='1.2em solid #505050';
        }
        // for (i = 0; i < Wheel.length; i++){
        //   Wheel[i].style.filter = 'invert(10%)';
        // }

      }
       else if (Mode == "dark"){
        BackGround.style.backgroundColor='#fff';
        BackGround.style.color='rgb(90, 90, 90)';
        Title.style.color='#888';
        Email.style.color='#555';
        for (i = 0; i < workProjectLogo.length; i++) {
          workProjectLogo[i].style.filter = "none";
          }
          function changeLogos(){
            animalKillBrand.src = "images/AnimalKill-Brand.png";
            costraBrand.src='images/costrabrand2.png';
          }
          changeLogos()
        
        modeIcon.innerHTML= `<img id="darkmode_pic" src="images/darkmode_icon.png" alt="Light mode"> <div class="tooltip_text">Dark mode</div>`;
        for (i = 0; i < Btns.length; i++) {
          Btns[i].style.backgroundColor = '#fff';
          Btns[i].style.color = 'rgb(90, 90, 90)';
        };
        for(i=0; i < opusBrands.length; i++){
          opusBrands[i].style.filter = "brightness(40%)";
        }
        for(i=0; i < showCase.length; i++){
          showCase[i].style.border='1.2em solid #aaa';
        }
        Mode = "light";
        // for (i = 0; i < Wheel.length; i++){
        //   Wheel[i].style.filter = 'invert(60%)';
        // }
      
    }
      }
