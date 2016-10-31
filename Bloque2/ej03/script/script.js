$(init);

function init() {
    var correctFigures = 0;
    /*$('#winMessage').hide();
     $('#winMessage').css( {
     left: '580px',
     top: '250px',
     width: 0,
     height: 0
     } );*/

    $(function () {
        $(".draggable")
            .draggable({
                containment: document.getElementById("tablero"),
                cursor: 'move',
                revert: true
            });

        $(".droppable")
            .droppable({
                drop: function (event, ui) {
                    if ($(this).data('halloween') == ui.draggable.data('halloween')) {
                        if ($(this).data('halloween') == "cat") {
                            $(this).addClass("droppedCat");
                            $(this).droppable('disable');
                            ui.draggable.remove();
                            correctFigures = correctFigures + 1;
                            console.log(correctFigures);
                            if (correctFigures == 4) {
                                winMessage();
                            }
                        } else if ($(this).data('halloween') == "ghost") {
                            $(this).addClass("droppedGhost");
                            $(this).droppable('disable');
                            ui.draggable.remove();
                            correctFigures = correctFigures + 1;
                            console.log(correctFigures);
                            if (correctFigures == 4) {
                                winMessage();
                            }
                        } else if ($(this).data('halloween') == "pumpkin") {
                            $(this).addClass("droppedPumpkin");
                            $(this).droppable('disable');
                            ui.draggable.remove();
                            correctFigures = correctFigures + 1;
                            console.log(correctFigures);
                            if (correctFigures == 4) {
                                winMessage();
                            }
                        } else if ($(this).data('halloween') == "skeleton") {
                            $(this).addClass("droppedSkeleton");
                            $(this).droppable('disable');
                            ui.draggable.remove();
                            correctFigures = correctFigures + 1;
                            console.log(correctFigures);
                            if (correctFigures == 4) {
                                winMessage();
                            }
                        }
                    } else {
                        $("#error").css("display", "inline");
                        setTimeout(function () {
                            $("#error").fadeOut('fast');
                        }, 1000);
                    }
                }
            });
    });

    function winMessage() {
        $("#won").css("display", "inline");
        $(".droppedCat").css("content", "url(../ej03/images/Cat-icon.png)");
        $(".droppedGhost").css("content", "url(../ej03/images/Ghost-icon.png)");
        $(".droppedPumpkin").css("content", "url(../ej03/images/Pumpkin-icon.png)");
        $(".droppedSkeleton").css("content", "url(../ej03/images/Skeleton-icon.png)");
    }
}