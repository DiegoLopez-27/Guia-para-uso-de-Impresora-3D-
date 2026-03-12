function ocultarTodo(){

document.getElementById("inicio").style.display="none";
document.getElementById("estudiante").style.display="none";
document.getElementById("docente").style.display="none";
document.getElementById("usb").style.display="none";
document.getElementById("wifi").style.display="none";

}

function mostrarEstudiante(){

ocultarTodo();
document.getElementById("estudiante").style.display="block";

}

function mostrarDocente(){

ocultarTodo();
document.getElementById("docente").style.display="block";

}

function mostrarUSB(){

ocultarTodo();
document.getElementById("usb").style.display="block";

}

function mostrarWIFI(){

ocultarTodo();
document.getElementById("wifi").style.display="block";

}

function volverInicio(){

ocultarTodo();
document.getElementById("inicio").style.display="block";

}

function volverEstudiante(){

ocultarTodo();
document.getElementById("estudiante").style.display="block";

}

const imagenes = document.querySelectorAll(".captura");

imagenes.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";

        const grande = document.createElement("img");
        grande.src = img.src;
        grande.style.maxWidth = "90%";
        grande.style.maxHeight = "90%";
        grande.style.borderRadius = "10px";

        overlay.appendChild(grande);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});