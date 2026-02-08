var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    this.innerHTML= "- Click to Close";

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
        
      panel.style.display = "none";
      this.innerHTML= "+ Project Details";
    } else {
      panel.style.display = "flex";
      panel.style.justifyContent = "space-evenly";
    }
  });
}


document.addEventListener('keydown', (event) => {
    // Check if the key is NOT the Tab key (keyCode 9 or event.code "Tab")
    if (event.code === "Tab" || event.keyCode === 9) {
        // Optional: you can add a console log or other action here if needed
        console.log("Tab key pressed and ignored by this specific logic.");
        return; // Exit the function, effectively ignoring the tab key for your custom logic
    }

    // Place the rest of your onkeydown logic here
    console.log("A non-tab key was pressed. Key code: " + event.keyCode);
    // ... your other function calls or code ...
});

