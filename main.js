var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .start();

let abierto = false;
let ventana;

document.getElementById('abrir-pdf').addEventListener('click', function() {
        if (!abierto) {
            ventana = window.open("Curriculum-Mayra-Méndez.pdf", '_blank');
            abierto = true;
        }

        else {
            ventana.focus();
        }
});