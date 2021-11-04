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
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo" : "Founder & CEO"
    },
    {
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo" : "Founder & CEO"
    },
    {
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo" : "Founder & CEO"
    },
    {
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo" : "Founder & CEO"
    },
    {
        "image": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo" : "Founder & CEO"
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


// for (let key in memberTeamArray){
//     console.log(memberTeamArray[key]);

// }


