$(document).ready(function(){


var $points = $('#points'), // on cible le bloc du points
    $p = $('#points p'), // on cible les images contenues dans le points
    indexp = $p.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentp = $p.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$p.css('color', '#F22D40'); // on cache les images
$currentp.css('color', 'block'); // on affiche seulement l'image courante
$('.next').click(function(){ // image suivante
    i++; // on incrémente le compteur
    if( i <= indexp ){
        $p.css('color', '#F22D40'); // on cache les images
        $currentp = $p.eq(i); // on définit la nouvelle image
        $currentp.css('color', 'block'); // puis on l'affiche
    }
    else{
        i = indexp;
    }
});

$('.prev').click(function(){ // image précédente
    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
    if( i >= 0 ){
        $p.css('color', '#F22D40');
        $currentp = $p.eq(i);
        $currentp.css('color', 'block');
    }
    else{
        i = 0;
    }
});

function slidep(){
    setTimeout(function(){ // on utilise une fonction anonyme
        if(i < indexp){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }
    $p.css('color', '#F22D40');
    $currentp = $p.eq(i);
    $currentp.css('color', 'block');
    slidep(); // on oublie pas de relancer la fonction à la fin
    }, 4000); // on définit l'intervalle à 7000 millisecondes (7s)
}
slidep(); // enfin, on lance la fonction une première fois
