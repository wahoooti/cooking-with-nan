$(document).ready(function() {
    $('header nav ul li:first-child').click(function(){
      $(this).parent().toggleClass('slideDown');
    });
  });

var filter = "sweet";


document.getElementById("recipe-btn").addEventListener("click", function() {
    console.log('got here');

    var sweetRecipes = document.getElementsByClassName("sweet");

    var savouryRecipes = document.getElementsByClassName("savoury");

    for (let index = 0; index < sweetRecipes.length; index++) {

        if(filter === "sweet") {
            sweetRecipes[index].style.display = "none";
        } else {
            sweetRecipes[index].style.display = "flex";

        }
        
    }

    for (let index = 0; index < savouryRecipes.length; index++) {
        if(filter === "sweet") {
            savouryRecipes[index].style.display = "flex";
        } else {
            savouryRecipes[index].style.display = "none";
        }
    }

    if(filter === "sweet") {
        filter = "savoury";
        document.getElementById("recipe-btn").innerHTML = "Savory";
    } else {
        filter = "sweet";
        document.getElementById("recipe-btn").innerHTML = "Sweet";
    }

    
});