$(function(){
    $('.li_meus_quadros').click(function(){
        window.location.href = 'meusquadros.html';
    })

    $('.img_perfil').click(function(){
        window.location.href = 'perfil.html';
    })

    $('.jloo').click(function(){
        window.location.href = 'home.html';

    })

    $('#dialog').dialog({ 
        autoOpen:false
    });

    $('.addq').click(function(){
        $('#dialog').dialog('close');  
        $('.div2').append($('<h1 class="h12">'+String($('.qua').val())+'</h1>'))
        $('.qua').val("");

    })

    $(document).on('click',".addquadrobt", function (e) {
        $('#dialog').dialog('open');  
        e.preventDefault
    })

    $('.div2').click(function(){
        window.location.href = 'quadros.html';

    })
})