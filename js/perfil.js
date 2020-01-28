$(function(){

    $('.ip_nome').hide();
    $('.ip_sobrenome').hide();

    $('.li_meus_quadros').click(function(){
        window.location.href = 'meusquadros.html';
    })

    $('.img_perfil').click(function(){
        window.location.href = 'perfil.html';
    })

    $('.jloo').click(function(){
        window.location.href = 'home.html';

    })
    let bool = false;
    $('.bt_nome').click(function(){
        if(bool == false){
            $('.ip_nome').val($('.nome').text())
            $('.ip_nome').show();
            $('.nome').hide();
            bool = true;
        }else{
            $('.ip_nome').hide();
            $('.nome').show();
            $('.nome').text((String)($('.ip_nome').val()));
            bool=false;
        }



    })

    let bool2 = false;
    $('.bt_sobrenome').click(function(){
        if(bool2 == false){
            $('.ip_sobrenome').val($('.sobrenome').text())
            $('.ip_sobrenome').show();
            $('.sobrenome').hide();
            bool2 = true;
        }else{
            $('.ip_sobrenome').hide();
            $('.sobrenome').show();
            $('.sobrenome').text((String)($('.ip_sobrenome').val()));
            bool2=false;
        }



    })
})