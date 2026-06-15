const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message sent successfully!");

    this.reset();
});