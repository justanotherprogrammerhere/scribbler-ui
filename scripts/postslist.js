
/* Trash Modal */
var trashFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        var modal = document.getElementsByClassName('trash-modal')[i];
        var div = document.getElementsByClassName("post-trash")[i];
        var close = document.getElementsByClassName("trash-modal-button-no")[i];

        // On click trash icon, open the modal
        div.onclick = function() {
            modal.style.display = "block";
        }

        //On click `No` button, close the modal
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

trashFunctions(5)

//Move to post.html
function moveToPost() {
    location.href = "post.html";
}