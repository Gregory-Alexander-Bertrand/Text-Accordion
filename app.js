var folder = document.getElementsByClassName("folder");
var i;

for (i = 0; i < folder.length; i++) {
  folder[i].addEventListener("click", function() {
    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
