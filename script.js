// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// creo l'array dei sei membri
let memberTeamArray = [
    {
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo" : "Founder & CEO"
    },
    {
        "image": "img/angela-caroll-chief-editor.jpg",
        "nome": "Angela Caroll",
        "ruolo" : "Chief Editor"
    },
    {
        "image": "img/walter-gordon-office-manager.jpg",
        "nome": "Walter Gordon",
        "ruolo" : "Office Manager"
    },
    {
        "image": "img/angela-lopez-social-media-manager.jpg",
        "nome": "Angela Lopez",
        "ruolo" : "Social Media Menager"
    },
    {
        "image": "img/scott-estrada-developer.jpg",
        "nome": "Scott Estrada",
        "ruolo" : "Developer"
    },
    {
        "image": "img/barbara-ramos-graphic-designer.jpg",
        "nome": "Barbara Ramos",
        "ruolo" : "Graphic Designer"
    }
]

//mi vado a prendere il container dove dentro ci andranno stampate le card e al posto di img h3 e p devo prendermi la prioprietà dell object
const containerCard = document.querySelector(".team-container")
for(let i = 0; i < 6; i++){
    containerCard.innerHTML += `
    <div class="team-card">
                <div class="card-image">
                  <img
                    src="${memberTeamArray[i].image}"
                    alt=""
                  />
                </div>
                <div class="card-text">
                  <h3>${memberTeamArray[i].nome}</h3>
                  <p>${memberTeamArray[i].ruolo}</p>
                </div>
              </div>`
}


//ora al click dell pulsante devo prendermi i tre dati inseriti dall'utente e li devo mettere nei rispettivi posti dell'oggetto nuovo che si andrà a creare
const bottoneAdd = document.getElementById("addMemberButton")
bottoneAdd.addEventListener("click",
function(){
    let nomeUser = document.getElementById("name").value;
    let roleUser = document.getElementById("role").value;
    let imageUser = document.getElementById("image").value;
    console.log(nomeUser, roleUser, imageUser);
// dopo esserci salvati i valori buttati dentro dall'utente dobbiamo creare un oggetto e poi buttarlo dentro all'array 
    let nuovoMembro = {
        "image": imageUser,
        "nome": nomeUser,
        "ruolo" : roleUser
    }
    containerCard.innerHTML +=`
    <div class="team-card">
                <div class="card-image">
                  <img
                    src="${nuovoMembro.image}"
                    alt=""
                  />
                </div>
                <div class="card-text">
                  <h3>${nuovoMembro.nome}</h3>
                  <p>${nuovoMembro.ruolo}</p>
                </div>
              </div>`

}

)


