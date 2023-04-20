const typingText = document.querySelector(".change_txt");
let Designation = ["Front End Developer","Back End Developer","Digital Marketer"];


let arrayIndex = 1;

function changingtxt() {
    if (arrayIndex < Designation.length) {
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    }
    else{
        arrayIndex = 0;
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    } 
}

changingtxt();
setInterval(changingtxt, 5000)








// tab links+++++++++++

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");


function opentab(tabname){
    for(tablink of tablinks){
         tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}



 








