var screen = {
  mob: window.matchMedia('(max-width: 600px)'),
  desk: window.matchMedia('(min-width: 601px)')
}

screen.mob.addEventListener('change', () => {
  window.location.reload();
});
screen.desk.addEventListener('change', () => {
  window.location.reload();
});

// var espaco = document.getElementById('photos');
// if (screen.mob.matches) {
//   var tam = Math.floor(document.getElementsByClassName('t-photo-m').length / 3);
// }
// else if (screen.desk.matches) {
//   var tam = Math.floor(document.getElementsByClassName('t-photo-d').length / 4);
// }
// espaco.style.gridTemplateRows = `repeat(${tam}, 2fr)`;

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
  document.getElementById(`divfoto`).style.display = "flex";
  document.getElementById(`divfoto`).style.justifyContent = "center";
  document.getElementById(`divfoto`).style.alignItems = "center";
  if (screen.desk.matches) {
    var imagem = `
    <img width="50" height="50" src='../images/icons/cancel.png' alt='botão fechar' onclick="fecharFoto()" style='position: absolute; top:5vh; left: 90%;' />

    <div id="show-photos">

    <img width="50" height="50" src='../images/icons/left.webp' style="opacity: 0.5;" onclick="anterior('${idfoto}')" />
    
    <img src='${document.getElementById(idfoto).getAttribute('src')}' width='800' height='550' style='display: flex; margin: 5vh auto 0 auto; transform: scale(1.5); z-index: 6; width: min-content;'/>

    <img width="50" height="50" src='../images/icons/right.webp' style="opacity: 0.5;" onclick="proximo('${idfoto}')" />
    
    </div>`;
    document.getElementById(`divfoto`).innerHTML = imagem;
  }
  else if (screen.mob.matches) {
    var imagem = `
    <img width="30" height="30" src='../images/icons/cancel.png' alt='botão fechar' onclick="fecharFoto()" style='position: absolute; top:2vh; left: 90%;' />

    <div id="show-photos">

    <img width="50" height="50" src='../images/icons/left.webp' style="opacity: 0.5;" onclick="anterior('${idfoto}')" />
    
    <img src='${document.getElementById(idfoto).getAttribute('src')}' width='400' height='100%' style='display: block; margin: auto 2vw auto 2vw; z-index: 6; width: 80%;' />
    
    <img width="50" height="50" src='../images/icons/right.webp' style="opacity: 0.5;" onclick="proximo('${idfoto}')" />
    
    </div>`;
    document.getElementById(`divfoto`).innerHTML = imagem;
  }
}

function fecharFoto() {
  document.getElementById(`divfoto`).style.background = "none";
  document.getElementById(`divfoto`).style.width = "0";
  document.getElementById(`divfoto`).style.height = "0";
  document.getElementById(`divfoto`).innerHTML = "<div id='divfoto'></div>";
}

function anterior(idfoto) {
  //
  if (screen.mob.matches) {
    var cont = document.getElementsByClassName('t-photo-m').length;
    for (var i = 0; i <= cont; i++) {
      var ident = `c${i}`;
      if (idfoto === ident && i !== 1) {
        abrirFoto(`c${i - 1}`);
      }
    }
  }
  else if (screen.desk.matches) {
    var cont = document.getElementsByClassName('t-photo-d').length;
    for (var i = 0; i <= cont; i++) {
      var ident = `c${i}`;
      if (idfoto === ident && i !== 1) {
        abrirFoto(`c${i - 1}`);
      }
    }
  }
}

function proximo(idfoto) {
  //
  if (screen.mob.matches) {
    var cont = document.getElementsByClassName('t-photo-m').length;
    for (var i = 0; i <= cont; i++) {
      var ident = `c${i}`;
      if (idfoto === ident && i !== cont) {
        abrirFoto(`c${i + 1}`);
      }
    }
  }
  else if (screen.desk.matches) {
    var cont = document.getElementsByClassName('t-photo-d').length;
    for (var i = 0; i <= cont; i++) {
      var ident = `c${i}`;
      if (idfoto === ident && i !== cont) {
        abrirFoto(`c${i + 1}`);
      }
    }
  }
}
