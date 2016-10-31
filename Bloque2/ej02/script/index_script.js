function logIn(username, password) {
    if (username == readCookie("username") && password == readCookie("password")) {
        document.getElementsByTagName("nav")[0].style.cssFloat = "right";
        document.getElementsByClassName("user")[0].style.display = "flex";
        document.getElementById("user-logo").src = "images/woman.png";
        document.getElementById('user-name').innerHTML = "<a id='user-name'>" + username + "</a>";

        var menu = document.getElementById("menu");
        menu.innerHTML = "<ul>" +
            "<li><a href='#'>My Gallery</a></li>" +
            "<li><a href='#'>Upload</a></li>" +
            "<li><a href='#'>Explore</a></li>" +
            "<li><a href='#'>Account Settings</a></li>" +
            "</ul>";
        menu.firstElementChild.childNodes[0].style.width = "25%";
        menu.firstElementChild.childNodes[1].style.width = "20%";
        menu.firstElementChild.childNodes[2].style.width = "20%";
        menu.firstElementChild.childNodes[3].style.width = "35%";
        menu.style.width = "60%";
    } else {
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
    }
    document.getElementById('login').style.display='none';
}

function readCookie(search) {
    var cookieName = search + "=";
    var cookieAttribute = document.cookie.split(';');
    for (var i = 0; i < cookieAttribute.length; i++) {
        var cookie = cookieAttribute[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(cookieName) == 0) return cookie.substring(cookieName.length, cookie.length);
    }
    return null;
}


var login = document.getElementById('login');
window.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
};

var likes = document.getElementsByClassName('fa-heart');
for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', changeLikeButtonColor, false);
}
function changeLikeButtonColor() {
    if (this.style.color == 'red') {
        this.style.color = 'grey';
    } else {
        this.style.color = 'red';
    }
}

var shares = document.getElementsByClassName('fa-share-alt');
for (i = 0; i < shares.length; i++) {
    shares[i].addEventListener('click', shareAlert, false);
}

function shareAlert() {
    alert('¡Ya se ha compartido la imagen!')
}

var comments = document.getElementsByClassName('fa-comment');
for (i = 0; i < comments.length; i++) {
    comments[i].addEventListener('click', commentOn, false);
}

function commentOn() {
    var comment = this.parentNode.parentNode.firstElementChild;
    comment.style.display = 'inline';
    var textarea = comment.firstElementChild;
    textarea.focus();
}

var paperplanes = document.getElementsByClassName('fa-paper-plane');
for (i = 0; i < paperplanes.length; i++) {
    paperplanes[i].addEventListener('click', commentOff, false);
}

function commentOff() {
    var comment = this.parentNode.parentNode;
    var textarea = comment.firstElementChild;
    var commentBox = comment.parentNode.nextElementSibling;
    var p = commentBox.firstElementChild;
    comment.style.display = 'none';

    if (textarea.value != "") {
        commentBox.style.display = 'flex';
        if (textarea.value.length > 30) {
            p.innerHTML = textarea.value.substring(0, 30);
            var hiddenText = textarea.value.substr(30, textarea.value.length);
            p.insertAdjacentHTML('beforeend', '<i class="fa fa-plus" aria-hidden="true">');
            var pluses = document.getElementsByClassName('fa-plus');
            for (i = 0; i < pluses.length; i++) {
                pluses[i].addEventListener('click', function () {
                    showMore(hiddenText, i, pluses);
                }, false);
            }
        } else {
            p.innerHTML = textarea.value;
        }
    }
}

function showMore(mensaje, j, pluses) {
    pluses[j - 1].parentNode.insertAdjacentHTML('beforeend', mensaje);
    pluses[j - 1].remove();
}