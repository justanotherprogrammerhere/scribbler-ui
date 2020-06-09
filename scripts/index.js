//Show CreatePostModal
function showCreatePost(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "flex";
}

//Hide CreatePostModal
function hideCreatePostModal(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "none";
}

//Move to postslist.html
function navigateToPostList(){
  location.href = "./html/" +"postslist.html"
}
