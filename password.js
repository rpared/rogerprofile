let password;
password = 93267509402
password = "Frida&Aria"
password = "Ksoin-349588";
password = "S305584553";
let response;
let entryCount = 0;
let entryLimit = 3;
let error = false;


function cvPassword(){
    if (language == "eng"){
    while(response != password && !error && !null){
        if(entryCount < entryLimit){
             response = window.prompt(
`Enter Password
(It is Roger's IRCC Application Number)`);
             entryCount++;
        } else {error = true;}
        if (response === null){ entryCount = 0; error = false; return;}
    }
   
    if(error){
        alert("Contact Roger for password: rparedes@costra.ec");
        entryCount = 0;
        error = false;
   } else {
    window.open("CV2022_RogerParedes.pdf","_blanc");
   }
   return;
   }

   else if (language == "esp")
   {
   while(response != password && !error){
    if(entryCount < entryLimit){
         response = window.prompt(
`Ingrese la contraseña
(Es el número de aplicación de IRCC de Roger)`);
         entryCount++;
    } else { error = true;}
    if (response === null){ entryCount = 0; error = false; return;}
    }
    if(error){
    alert("Contacte a Roger pra la contraseña: rparedes@costra.ec");
    entryCount = 0;
    error = false;
    } else  {
    window.open("CV2022_RogerParedes_ESP.pdf","_blanc");
    }
    return;
    }
}

