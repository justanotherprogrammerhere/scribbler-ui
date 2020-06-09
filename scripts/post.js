function showSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
}

function hideSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
}

function showSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
}

function hideSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}

function editComment() {

}

function incrementCounter() {
    var cntr = document.getElementById('counterLikedBy');
    document.getElementById('fresh-page').style.display = "none";
    if (document.getElementById('likes-this').style.display === "none") {
        document.getElementById('likes-this').style.display = "block";
    }

    var val = parseInt(cntr.innerText);
    cntr.innerText = val + 1;

}

function toggleEditSave() {
    var toggleSave = '<button class="postEdit">Save ' +
        '<i style="font-size: 14px;font-weight: bolder;" ' +
        'class="fa fa-save" aria-hidden="true"></i>' +
        '</button>';
    var toggleEdit = '<button class="postEdit">Edit ' +
        '<i style="font-size: 14px;font-weight: bolder;" ' +
        'class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
        '</button>';

    var edtSaveBtn = document.getElementById('editPost');
    var toDo = (edtSaveBtn.innerText).toString().trim();
    console.log(toDo);
    console.log(toDo.localeCompare('Edit'));
    if (toDo.localeCompare('Edit') === 0) {
        var bSave = document.getElementById('editPost');
        bSave.innerHTML = toggleSave;
        enableEditableText();

    } else {
        var bEdit = document.getElementById('editPost');
        bEdit.innerHTML = toggleEdit;
        updateEditedBlog();
    }

}

function enableEditableText() {
    var getBlogContentEle = document.getElementById('blogBody');
    var getBlogContent = getBlogContentEle.innerText;

    //Div element
    var getDiv = document.getElementById('blogBodyId');
    //Create a input element
    var inputElement = '<textarea class="txtBlog" id="textEditor" rows="10" cols="140">' +
        getBlogContent +
        '</textarea>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
}

function updateEditedBlog() {
    var textEdited = document.getElementById('textEditor').value;
    var pElement = '<p id="blogBody">' +
        textEdited +
        '</p>';
    var getDiv = document.getElementById('blogBodyId');
    getDiv.innerHTML = pElement;
}

function addComment() {
    var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
    });

    var x = document.getElementById("txtCommentCommentPost").value;
    if (x!="") {
    document.getElementById("txtCommentCommentPost").value = "";

    var pElement = '<p style="border-color: #E8E8E8;border-style: solid;border-width: 8px">' + x + '</p>';

    var getDiv = document.getElementById('listAllComments');
    getDiv.innerHTML = pElement + getDiv.innerHTML;
    }
}
