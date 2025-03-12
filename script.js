document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton");
    const paragraph = document.getElementById("text");
    
    button.addEventListener("click", function() {
        paragraph.textContent = "Текст змінено за допомогою JavaScript!";
    });
});