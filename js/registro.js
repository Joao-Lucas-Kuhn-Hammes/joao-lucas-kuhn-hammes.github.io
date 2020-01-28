$(document).ready(function(){
    $('.add').click(function(){
       window.location.href = 'home.html';
    });

    $('.jloo').click(function(){
        window.location.href = 'home.html';

    })

    $('.registrar').click(function(){
        window.location.href = 'registro.html';

    })

    $('#dialog').dialog({ 
        autoOpen:false
    });

    $('.bt_login').click(function(){
        $('#dialog').dialog('close');  
        window.location.href = 'home.html';

    })

    $(document).on('click',".login", function (e) {
        $('#dialog').dialog('open');  
        e.preventDefault
    })

})

