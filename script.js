// Sélectionne tous les boutons correspondant aux monuments et la section de description.
const boutonsMonuments = document.querySelectorAll('.btn-monument');
const descriptionSection = document.getElementById('description');

// Tableau d'objets contenant les informations sur différents monuments.
const descriptionMonuments = [ 
    // Chaque objet représente un monument avec son nom, lieu, description, et position (top, left) sur une carte.
    {
        nom: "Tour Eiffel",
        lieu: "Paris, France",
        description: "La Tour Eiffel, construite par Gustave Eiffel pour l'exposition universelle de 1889, est l'un des monuments les plus célèbres au monde. D'une hauteur de 324 mètres, elle a été à l'origine critiquée par certains artistes parisiens mais est aujourd'hui le symbole incontournable de la France et de Paris. Plus de 7 millions de visiteurs gravissent ses marches chaque année pour admirer la vue imprenable sur la ville.",
        top: 31,
        left: 50.5
    },
    {
        nom: "Notre-Dame",
        lieu: "Paris, France",
        description: "La cathédrale Notre-Dame de Paris, commencée en 1163 et achevée en 1345, est un joyau de l'architecture gothique. Elle est célèbre pour ses gargouilles, ses vitraux et ses deux tours massives. Le 15 avril 2019, elle a été partiellement détruite par un incendie, mais sa reconstruction est en cours. Notre-Dame a également inspiré des œuvres littéraires, notamment le célèbre roman de Victor Hugo 'Notre-Dame de Paris'.",
        top: 31,
        left: 50.7
    },
    {
        nom: "Arc de Triomphe",
        lieu: "Paris, France",
        description: "Commandé par Napoléon Bonaparte en 1806 après sa victoire à Austerlitz, l'Arc de Triomphe est dédié aux armées françaises. Situé à l'extrémité des Champs-Élysées, il mesure 50 mètres de hauteur et 45 mètres de large. Il abrite également la tombe du Soldat Inconnu, un hommage aux soldats morts pendant la Première Guerre mondiale. Le monument est un site de mémoire nationale et de nombreuses cérémonies y sont organisées chaque année.",
        top: 31,
        left: 50.3
    },
    {
        nom: "Mont Saint-Michel",
        lieu: "Normandie, France",
        description: "Le Mont Saint-Michel est une petite île située à environ 1 kilomètre des côtes de Normandie. Il est célèbre pour son abbaye perchée au sommet, construite au 8ème siècle. Au fil des siècles, il a été un important lieu de pèlerinage et un bastion militaire. Entouré par des marées impressionnantes, le Mont Saint-Michel est l'un des sites touristiques les plus visités en France. Ses ruelles étroites et son atmosphère médiévale fascinent les visiteurs du monde entier.",
        top: 32.5,
        left: 40.5
    },
    {
        nom: "Versailles",
        lieu: "Versailles, France",
        description: "Le Château de Versailles est un symbole du pouvoir absolu des rois de France, notamment sous Louis XIV, le Roi Soleil. Construit à partir de 1661, il est célèbre pour ses magnifiques jardins, sa Galerie des Glaces, et ses innombrables œuvres d'art. Versailles fut le siège du gouvernement royal jusqu'à la Révolution française. Aujourd'hui, il attire des millions de visiteurs qui viennent découvrir son architecture majestueuse et revivre l'histoire des monarques français.",
        top: 31.8,
        left: 50.1
    }
];

// Fonction qui génère le contenu HTML pour la section de description d'un monument basé sur son index.
function contentSection(i) {
    return "<div class='animation'>" +
                "<h1>" + descriptionMonuments[i]["nom"] + "</h1>" +
                "<h2>" + descriptionMonuments[i]["lieu"] + "</h2>" +
                "<p>" + descriptionMonuments[i]["description"] + "</p>" +
            "</div>" +
            "<div class='map-containeur'>" +  // Correction d'une petite erreur : il manquait un '>' à la div.
                "<div class='map'>" +
                    "<img src='images/carte_france.webp' alt=''>" +
                    "<img style='top:" + descriptionMonuments[i]["top"] +  "%; left:" + descriptionMonuments[i]["left"] + "%' class='pin' src='images/pin.svg' alt=''>" +
                "</div>" +
            "</div>";
}

// Ajoute un écouteur d'événement pour chaque bouton de monument.
boutonsMonuments.forEach(bouton => {
    bouton.addEventListener("click", function() {

        // Sélectionne toutes les images des boutons et applique un filtre en niveaux de gris.
        const images = document.querySelectorAll(".btn-monument img");
        
        images.forEach(image => {
            image.classList.add('grayscale');
        });

        // Sélectionne l'image du bouton cliqué.
        let imageClique = bouton.querySelector('img');
        
        // Si aucune image n'est trouvée, en chercher une dans un parent.
        if (!imageClique) {
            imageClique = bouton.closest('div').querySelector('img');
        }

        // Enlève le filtre en niveaux de gris de l'image cliquée si elle existe.
        if (imageClique) {
            imageClique.classList.remove('grayscale');
        }

        // Vide la section de description.
        descriptionSection.innerHTML = '';

        // Affiche le contenu correspondant au bouton cliqué en fonction de son ID.
        switch(imageClique.dataset.id) {
            case '1':
                descriptionSection.innerHTML = contentSection(0);
            break;
            case '2':
                descriptionSection.innerHTML = contentSection(1);
            break;
            case '3':
                descriptionSection.innerHTML = contentSection(2);
            break;
            case '4':
                descriptionSection.innerHTML = contentSection(3);
            break;
            case '5':
                descriptionSection.innerHTML = contentSection(4);
            break;
        }
    });
});
