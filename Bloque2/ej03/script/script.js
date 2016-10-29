$( init );

function init() {
    /*$('#winMessage').hide();
     $('#winMessage').css( {
     left: '580px',
     top: '250px',
     width: 0,
     height: 0
     } );*/

    $( function() {
        $( ".draggable" ).draggable({
            containment: document.getElementById("tablero"),
            cursor: 'move'
        });
        $( ".droppable" ).droppable({
            drop: function (event, ui) {
                if($(this).data('fruit') == ui.draggable.data('fruit')){
                    if($(this).data('fruit') == "apple"){
                        $(this).addClass("droppedApple");
                        $(this).droppable('disable');
                        ui.draggable.remove();
                    } else if($(this).data('fruit') == "banana") {
                        $(this).addClass("droppedBanana");
                        $(this).droppable('disable');
                        ui.draggable.remove();
                    } else if($(this).data('fruit') == "pear") {
                        $(this).addClass("droppedPear");
                        $(this).droppable('disable');
                        ui.draggable.remove();
                    }
                }
            }
        });
    } );
}