const boutonsMonuments = document.querySelectorAll('.btn-monument');

boutonsMonuments.forEach(bouton => {
    bouton.addEventListener("click", function() {
        console.log("OUAIS");
    });
});
