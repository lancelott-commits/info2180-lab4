document.addEventListener("DOMContentLoaded", function () {
    const button =document.getElementById('search');
    

    button.addEventListener("click", () => {
        
        
        fetch("superheroes.php")
        .then (response => {
            return response.text(); 
        })
        .then (data => {
            alert(data); 
        })

    })

});