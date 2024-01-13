var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    this.innerHTML= "-";

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
        
      panel.style.display = "none";
      this.innerHTML= "+";
    } else {
      panel.style.display = "flex";
      panel.style.justifyContent = "space-evenly";
    }
  });
}