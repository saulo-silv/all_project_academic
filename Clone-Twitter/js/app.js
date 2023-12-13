const btnAddPostar = document.getElementById("postar"); 
const conteudo = document.querySelector("#conteudoNovoPost");
const novoPost = document.querySelector("#novoPost");


btnAddPostar.onclick = function(e) {
    e.preventDefault()
    
    const estruturaDiv = document.createElement("div");
    
    estruturaDiv.innerHTML = `<div class="post">
                  <div class="post__avatar">
                      <img
                        src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                        alt=""
                      />
                    </div>

                  <div class="post__body">
                    <div class="post__header">
                      <div class="post__headerText">
                        <h3>
                          Somanath Goudar
                          <span class="post__headerSpecial"
                            ><span class="material-icons post__badge"> verified </span>@somanathg</span
                          >
                        </h3>
                      </div>
                      <div class="post__headerDescription">
                        <p>${conteudo.value}</p><!--INSERIR AQUI-->
                      </div>
                    </div>
                  
                    <div class="post__footer">
                      <span class="material-icons"> repeat </span>
                      <span class="material-icons"> favorite_border </span>
                      <span class="material-icons"> publish </span>
                      <span class="material-icons" id="btnupdate"> update </span>
                      <span class="material-icons" id="btnremover"> delete </span>
                      
                    </div>
                </div>`   

  novoPost.prepend(estruturaDiv);

const btnAtualizar = document.getElementById("btnupdate");
      btnAtualizar.onclick = function(e){
        e.preventDefault();
        const feed = document.querySelector("#divPrincipal");
        feed.replaceChild(novoPost)
      }

  
const btnDeletar = document.getElementById("btnremover");

      btnDeletar.onclick = function(e) {
        e.preventDefault();
        const feed = document.querySelector("#divPrincipal");
        feed.removeChild(novoPost);
        
      }
  conteudo.value = ""
}


const btnFoco = document.getElementById("focos");
btnFoco.onclick = function(evento){
  evento.preventDefault();
  
}

