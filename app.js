document.addEventListener("DOMContentLoaded", function () {
    const button =document.getElementById('search');
    const Hero =document.getElementById('Hero');
    

    button.addEventListener("click", () => {

        const Heroinput =Hero.value.trim();
        
        
        fetch("superheroes.php?Hero=" + encodeURIComponent(Heroinput))
        .then (response => {
            return response.text(); 
        })
        .then (data => {
            document.getElementById('result').innerHTML = data; 
        })

    })

});