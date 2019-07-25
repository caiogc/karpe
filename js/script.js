let pagina = ''

function buscaPagina(p){
    let pagina = p;
    window.open(`${pagina}.html`, '_self') ;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }