$(function () {
    
    let count = 0;

    $('.addi').click(function () { 
        if(String($('.ent').val()) == ""){
            alert("item não pode ser vazio")
        }else{
            $('.itens'+idd).append($('<p class="item">'+String($('.ent').val())+'</p>'));
            $('#dialog').dialog('close');
            $('.ent').val("")
        }
    });

    $('.jloo').click(function(){
        window.location.href = 'home.html';

    })

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
        if(lis == ""){
            alert("nome de lista não pode ser vazio")
        }else{
            console.log(idd)
            count++;
            $('.listass').append($(`<div id = "${count}" class ='lista'>  <h1 class='titulo'>${lis}</h1><hr><div class='itens${count}'></div>  <div id='container'><button id='${count}' class='add'>Add</button></div></div>)`))
            $('#dialog2').dialog('close');
            $('.lis').val("")
        }
    })

$('.li_meus_quadros').click(function(){
    window.location.href = 'meusquadros.html';
})

$('.img_perfil').click(function(){
    window.location.href = 'perfil.html';
})
});


