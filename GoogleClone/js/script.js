window.addEventListener("load", function(){

var shareIcon = document.getElementbyId("share-icon");


shareIcon.onmouseover = function(changeShareIcon){
  shareIcon.innerHTML = "<img src=\"img/share-hover.png\">";
  alert("oi")
}
});
