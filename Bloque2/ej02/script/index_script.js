function logIn(uname, psw) {
    if(uname == readCookie("username") && psw == readCookie("password")) {
        //cambiar menú
        document.getElementById("user-logo").src="images/woman.png";
        document.getElementById('user-name').innerHTML = "<a id='user-name'>blonderwall</a>";
        document.getElementById('menu').innerHTML = "<ul><li style='width: 25%;'><a href=''>My Gallery</a></li><li><a href=''>Upload</a></li><li><a href=''>Explore</a></li><li style='width: 35%'><a href=''>Account Settings</a></li></ul>";
        document.getElementById("menu").firstElementChild.childNodes[0].style.width = "25%";
        document.getElementById("menu").firstElementChild.childNodes[1].style.width = "25%";
        document.getElementById("menu").firstElementChild.childNodes[2].style.width = "25%";
        document.getElementById("menu").firstElementChild.childNodes[3].style.width = "25%";
        document.getElementById("menu").style.width = "60%";
    } else {
        document.cookie="username=" + uname;
        document.cookie="password=" + psw;
    }
}

function readCookie(search) {
    var nameCo = search + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameCo) == 0) return c.substring(nameCo.length,c.length);
    }
    return null;
}


/*no funciona bien porque div login ocupa más de lo debido*/
var login = document.getElementById('login');
window.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
};

var likes = document.getElementsByClassName('fa-heart');
for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', changeLikeColor, false);
}
function changeLikeColor() {
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

//    TODO Falta hacer el signo menos para volver a contraer el texto?
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

function showMore(mensaje, j, mases) {
    mases[j - 1].parentNode.insertAdjacentHTML('beforeend', mensaje);
    mases[j - 1].remove();
}