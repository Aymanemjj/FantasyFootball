async function getData(file){
    let res= await fetch(file);
    let playersDatabas= await res.json();
    let players = [];

        playersDatabas.forEach(player => {
            players.push(player)
        });
    localStorage.setItem("players",JSON.stringify(players))
    console.log(localStorage.getItem("players"));
    setPlayers()
}
getData("data.json");
const playersCol=document.getElementById("playersCol")

function setPlayers(){

    let player = JSON.parse(localStorage.getItem("players"))

    player.forEach(player => {

        playersCol.innerHTML +=`        

                <div class="cart flex bg-gray-600 rounded-lg p-2 justify-between">
                    <div class="flex gap-2">
                        <div class="PFP rounded-md bg-[url(${player.photo})] size-12 bg-cover" ></div>
                        <div class="text-left text-sm flex flex-col justify-end">
                            <h2>${player.name}</h2>
                            <h2>Post : <span>${player.post}</span></h2>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <button class="hover:bg-gray-500 p-1 rounded-sm cursor-pointer"><i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i></button>
                        <small>${player.price}</small>
                    </div>
                </div>`
            })
    
}
const addBtn = document.getElementById("addBtn")
const closeBtn = document.getElementById("closeBtn")
const submitPlayer = document.getElementById("submitplayer")
const openModal = document.getElementById("modalADD")

addBtn.onclick = function(){
    openModal.classList.replace("hidden","block")
}
closeBtn.onclick = function(){
    openModal.classList.replace("block","hidden")
}
