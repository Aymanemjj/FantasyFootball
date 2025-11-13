let playersDatabase;
async function getData(file){
    let res= await fetch(file)
    playersDatabas= await res.json()
    localStorage.setItem("players", playersDatabase)
    players = localStorage.getItem(players)
}
getData("data.json");
