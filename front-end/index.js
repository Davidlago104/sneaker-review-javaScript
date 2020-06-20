const sneakerButton = document.getElementById("show-sneakers")

sneakerButton.addEventListener("click", e){
    fetch('http://localhost:3000/sneakers')
    .then(function(res){
        return res.json()
    })
}