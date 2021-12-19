var lista = [
  "bog.jpg",
  "buca.jpeg",
  "ketobr.jpg",
  "medellin.png",
  "p1.jpg",
  "p2.jpg",
  "p4.jpg",
  "p6.jpg",
  "pizza.png",
  "postregalleta.png",
  "postremanzana.jpg",
  "postrenapoleon.jpg",
  "postrenaranja.png",
  "postrepina.jpg",
  "serviciorecetas.png",
  "serviciosrecetarios.png",
  "sucursalbogota.png",
  "sucursalsincelejo.png"
];

var text = "";

for (var i = 0; i < lista.length; i++) {
  text += `<li><a href="https://kreislerramirezmt.github.io/resourses-mintic/${lista[i]}" target="_blank">${lista[i]}</a></li>`;
}
document.getElementById("list").innerHTML = text;
