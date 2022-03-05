var slides = `
  <div id="carouselExampleControlsOne" height="480" class="carousel slide carouselone" data-ride="carousel">
    <div class="carousel-inner" id="carousel-fotos">
      <div class="carousel-item active">
        <img height="480" class="d-block w-100 carfoto" src="images/desktop/foto1-800.jpg" alt="Primeiro Slide" id="f-1-1" onclick="abrirFoto('f-1-1', 'divfoto')" />
      </div>
      <div class="carousel-item">
        <img height="480" class="d-block w-100 carfoto" src="images/desktop/foto6-800.jpg" alt="Segundo Slide" id="f-1-2" onclick="abrirFoto('f-1-2', 'divfoto')" loading="lazy" />
      </div>
      <div class="carousel-item">
        <img height="480" class="d-block w-100 carfoto" src="images/desktop/foto3-800.jpg" alt="Terceiro Slide" id="f-1-3" onclick="abrirFoto('f-1-3', 'divfoto')" loading="lazy" />
      </div>
      <div class="carousel-item">
        <img height="480" class="d-block w-100 carfoto" src="images/desktop/foto5-800.jpg" alt="Quarto Slide" id="f-1-4" onclick="abrirFoto('f-1-4', 'divfoto')" loading="lazy" />
      </div>
      <div class="carousel-item">
        <img height="480" class="d-block w-100 carfoto" src="images/desktop/foto4-800.jpg" alt="Quinto Slide" id="f-1-5" onclick="abrirFoto('f-1-5', 'divfoto')" loading="lazy" />
      </div>
      <div class="carousel-item">
        <img height="480" class="d-block w-100 carfoto" src="images/desktop/foto2-800.jpg" alt="Sexto Slide" id="f-1-6" onclick="abrirFoto('f-1-6', 'divfoto')" loading="lazy" />
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControlsOne" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControlsOne" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
  </div>
`;

var screen = {
  mob: window.matchMedia('(max-width: 600px)'),
  desk: window.matchMedia('(min-width: 601px)')
}

// if (screen.mob.matches) {
//   if (!!document.querySelector("#s-g")) {
//     document.querySelector("#s-g").innerHTML = "" + `${slides}`;
//   }
// }

screen.mob.addEventListener('change', () => {
  window.location.reload();
});
screen.desk.addEventListener('change', () => {
  window.location.reload();
});

// ============================================================


function abrirFoto(idfoto){
  document.getElementById(`divfoto`).style.backgroundSize = "cover";
  document.getElementById(`divfoto`).style.background = "rgba(0, 0, 0, .9)";
  document.getElementById(`divfoto`).style.width = "100%";
  document.getElementById(`divfoto`).style.height = "100%";
  document.getElementById(`divfoto`).style.position = "fixed";
  document.getElementById(`divfoto`).style.top = "0";
  document.getElementById(`divfoto`).style.overflow = "visible";
  document.getElementById(`divfoto`).style.zIndex = "6";
  if (screen.desk.matches) {
    var imagem = `
    <img width="50" height="50" src='images/icons/cancel.png' alt='botão fechar' onclick="fecharFoto()" style='position: absolute; top:5vh; left: 90%;' />
    <img src='${document.getElementById(idfoto).getAttribute('src')}' style='display: flex; margin: 20vh auto 0 auto; transform: scale(1.5); z-index: 6;'/>`;
    document.getElementById(`divfoto`).innerHTML = imagem;
  }
  else if (screen.mob.matches) {
    var imagem = `
    <img width="30" height="30" src='images/icons/cancel.png' alt='botão fechar' onclick="fecharFoto()" style='position: absolute; top:2vh; left: 90%;' />
    <img src='${document.getElementById(idfoto).getAttribute('src')}' width='400' height='600' style='display: block; margin: 7vh auto 0 auto; z-index: 6;'/>`;
    document.getElementById(`divfoto`).innerHTML = imagem;
  }
}

function fecharFoto() {
  document.getElementById(`divfoto`).style.background = "none";
  document.getElementById(`divfoto`).style.width = "0";
  document.getElementById(`divfoto`).style.height = "0";
  document.getElementById(`divfoto`).innerHTML = "<div id='divfoto'></div>";
}

function verCard(ident) {
  document.getElementById(ident).style.animation = 'efeito 0.1s linear';
  setTimeout(() => {
    document.getElementById(ident).style.animation = 'none';
  }, 100);
}