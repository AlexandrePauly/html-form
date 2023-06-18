//Tableau contenant la liste des images
var tabImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

//Fonction pour générer une URL aléatoire à partir du tableau d'images
function getRand() {
  //Générer un indice aléatoire pour sélectionner une image aléatoire dans le tableau
  var rand = Math.floor(Math.random() * tabImages.length);

  //Retourner un indice aléatoire
  return (rand);
}

//Permet de s'assurer que le code est exécuté après le chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    //Sélectionner l'élément image à modifier
    var img = document.getElementById("container-left");

    if (img){
        //Attribuer une URL aléatoire à l'attribut src de l'image
        img.style.background = "url('img/" + tabImages[getRand()] + "') no-repeat center";
        img.style.backgroundSize = "cover";
    }
    else{
        console.log("L'élément image n'a pas été trouvé dans le document.");
    }
});