$(document).ready(function() { 
    $('.disciplina').click(function() { 
        if( $(this).hasClass('jafiz')) {
             $(this).removeClass('jafiz');
        } else {
            $(this).addClass('jafiz');
        }
    }); 
});