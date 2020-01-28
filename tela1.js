$(function () {
    
    let count = 0;

    $('.addi').click(function () { 

        $('#'+idd).append($('<p class="item">'+String($('.ent').val())+'</p>'));
        $('#dialog').dialog('close');
        $('.ent').val("")

    });

    $('#dialog').dialog({
        autoOpen:false
    });

    var idd=0

    $(document).on('click',".add", function (e) {
        $('#dialog').dialog('open');  
        idd = $(this).attr("id")  
        e.preventDefault
    })
    
    
       

    $('#dialog2').dialog({
        autoOpen:false
    });


    $('#showAlert2').on("click", function () {
        $('#dialog2').dialog('open');
    });


    
    $('.addl').click(function(){
        var lis = String($('.lis').val());
        console.log(idd)
        count++;
        $('.listass').append($(`<div id = "${count}" class ='lista'>  <h1 class='titulo'>${lis}</h1><hr><div class='itens'></div>  <div id='container'><button id='${count}' class='add'>Add</button></div></div>)`))
        $('#dialog2').dialog('close');
        $('.lis').val("")
    })
});
