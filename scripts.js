const markBtn = document.querySelector(".mark-btn");

markBtn.onclick = function() {
    document.querySelectorAll(".unread").forEach((element) => {
        element.classList.remove("unread");
    })
    document.querySelector(".notifications-count").style = "display: none;";
}