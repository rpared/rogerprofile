let BackGround = document.querySelector("body");
let modeIcon = document.getElementById("darkmode_btn");
let Btns = document.querySelectorAll(".btn");
let Title = document.querySelector(".title");
let Email = document.querySelector(".emailbtn");
let Wheel = document.querySelectorAll(".wheelimg");
let Mode = "dark";
let i;

function dark_mode(){
   

    if (Mode == "light"){
        BackGround.style.backgroundColor='rgb(37, 37, 37)';
        BackGround.style.color='#969696';
        Title.style.color='rgb(245, 177, 150)';
        Email.style.color='rgb(245, 177, 150)';
        Mode = "dark";
        modeIcon.innerHTML = `<img id="darkmode_pic" src="images/lightmode_icon.png" alt="Dark mode"> <div class="tooltip_text2">Light mode</div>`;
        for (i = 0; i < Btns.length; i++) {
          Btns[i].style.backgroundColor = 'rgb(37, 37, 37)';
          Btns[i].style.color = '#969696';
        }
        // for (i = 0; i < Wheel.length; i++){
        //   Wheel[i].style.filter = 'invert(10%)';
        // }

      }
       else if (Mode == "dark"){
        BackGround.style.backgroundColor='#ddd';
        BackGround.style.color='rgb(90, 90, 90)';
        Title.style.color='rgb(158, 125, 112)';
        Email.style.color='rgb(158, 125, 112)';
        Mode = "light";
        modeIcon.innerHTML= `<img id="darkmode_pic" src="images/darkmode_icon.png" alt="Dark mode"> <div class="tooltip_text">Dark mode</div>`;
        for (i = 0; i < Btns.length; i++) {
          Btns[i].style.backgroundColor = '#ddd';
          Btns[i].style.color = 'rgb(90, 90, 90)';
        }
        // for (i = 0; i < Wheel.length; i++){
        //   Wheel[i].style.filter = 'invert(60%)';
        // }
      
    }
      }
