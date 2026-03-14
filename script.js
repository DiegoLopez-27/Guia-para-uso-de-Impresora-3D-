let pasoActual = 0;

const pasos = document.querySelectorAll(".paso");

function iniciarGuia(){

document.getElementById("inicio").style.display="none";
document.getElementById("guia").style.display="block";

actualizarPaso();

}

function actualizarPaso(){

pasos.forEach((paso,index)=>{

paso.classList.remove("activo");

if(index===pasoActual){

paso.classList.add("activo");

}

});

let progreso=((pasoActual+1)/pasos.length)*100;

document.getElementById("barra").style.width=progreso+"%";

}

function siguiente(){

if(pasoActual<pasos.length-1){

pasoActual++;

actualizarPaso();

}

}

function anterior(){

if(pasoActual>0){

pasoActual--;

actualizarPaso();

}

}

function volverInicio(){

document.getElementById("guia").style.display="none";
document.getElementById("mantenimiento").style.display="none";
document.getElementById("inicio").style.display="block";

}

function mostrarMantenimiento(){

document.getElementById("inicio").style.display="none";
document.getElementById("mantenimiento").style.display="block";

}



const imagenes = document.querySelectorAll(".captura");

imagenes.forEach(img => {

img.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,0.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";

const grande=document.createElement("img");

grande.src=img.src;
grande.style.maxWidth="90%";
grande.style.maxHeight="90%";

overlay.appendChild(grande);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});