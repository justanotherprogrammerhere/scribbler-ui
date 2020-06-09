//Move to post.html
function moveToPost() {
    location.href = "post.html";
}


//Show SignInModal
function showDeletePost(){
    var modal = document.getElementById("trash-modal");
    modal.style.display = "flex";
}

//Hide or delete post
function hidePost()
{
    //alert($("#modal-myvalue").html());
    const test ="#"+ $("#modal-myvalue").html();
    $(test).hide();
}
