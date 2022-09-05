// $("#contact").click(function(){
//     $("#modal").style.display="block";
//     console.log("MMM")
// });
var btn=document.getElementById("contact");
var btn2=document.getElementById("contact2");
var span=document.getElementsByClassName("close")[0];
var ham=document.getElementById("hamburger");
var links=document.getElementById("links");

btn.onclick = function() {
    modal.style.display = "block";
  }
btn2.onclick = function() {
    modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal)
      modal.style.display = "none";
  }

ham.onclick = function(){
      if(links.style.display === "block")
        links.style.display = "none";
      else
        links.style.display = "block";
  }
