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

    if (textarea.value != ""){
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

var gridCell = document.getElementsByClassName('grid-cell');
for (i = 0; i < gridCell.length; i++) {
    gridCell[i].addEventListener('mouseover', showText, false);
    gridCell[i].addEventListener('mouseout', hideText, false);
}

function showText() {
    this.firstElementChild.children[1].style.display = 'block';
    this.firstElementChild.children[2].style.display = 'block';
}

function hideText() {
    this.firstElementChild.children[1].style.display = 'none';
    this.firstElementChild.children[2].style.display = 'none';
}
