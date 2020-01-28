 $(function(){

    let loggado = false;

    if(loggado == false){
        $('.logged_bar').hide();
    }else{
        $('.lr').hide();
    }
    
    $('.registrar').click(function(){
        window.location.href = 'registro.html';

    })

    $('#dialog').dialog({ 
        autoOpen:false
    });

    $('.bt_login').click(function(){
        $('.logged_bar').show();
        $('.lr').hide();
        $('#dialog').dialog('close');  

    })

    $(document).on('click',".login", function (e) {
        $('#dialog').dialog('open');  
        e.preventDefault
    })

    $('.li_meus_quadros').click(function(){
        window.location.href = 'meusquadros.html';
    })

    $('.img_perfil').click(function(){
        window.location.href = 'perfil.html';
    })
    
    $('#slide img:eq(0)').addClass("ativo").show();


 
    setInterval(slide,3000);
    function slide(){
        if($('.ativo').next().length){
            $('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
        }else{
            $('.ativo').fadeOut().removeClass("ativo");
            $('#slide img:eq(0)').fadeIn().addClass("ativo");
        }

    }

    $('#slide').on('click',function(){
            if($('.ativo').next().length){
                $('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
            }else{
                $('.ativo').fadeOut().removeClass("ativo");
                $('#slide img:eq(0)').fadeIn().addClass("ativo");
            }
    
        
    })
    
});