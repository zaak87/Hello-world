// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var snd = document.getElementById("send");
var dlt = document.getElementById("deleting");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var inputs = document.getElementsByTagName("input");
for(var i=0; i<inputs.length; i++){
    inputs[i].oninput = function(){
        if (this.value.length > this.maxLength){
            this.value = this.value.slice(0, this.maxLength);
        }
    }
}
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
snd.onclick = function() {
    
}
dlt.onclick = function() {
    
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
