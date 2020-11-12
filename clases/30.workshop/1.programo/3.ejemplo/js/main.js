//función ready
$(document).ready(() => {
    //SELECTORES DE JQUERY
    $('h1').text('JQUERY');
    console.log($('.list').html());
    $('.par').on('click', () => {
        $('.par').toggleClass('cross');
    })

    //JQUERY EFFECTS, ANIMACIONES
    //EVENTO: CLICK
    $('#disappear').on('click', () => {
        $('div').fadeOut(1000);
    })
    $('#appear').on('click', () => {
        $('div').fadeIn(1000);
    })
    $('#toggle').on('click', () => {
        $('div').fadeToggle(500);
    })
    $("#animate").click(function(){
        $("div").animate({
            left: '+=50px',
            top: '+=50px',
            opacity: '-=0.1',
            height: '+=20px',
            width: '+=20px',
            backgroundColor: 'green',
        });
    });
    $("div").mousedown(function(){
        alert("Clickeaste el cuadrado!");
    });

    //EVENTO: HOVER - $(selector).hover(inFunction, outFunction);
    $("div").hover(function(){
        $(this).css("background-color", "blue");
    }, function(){
        $(this).css("background-color", "red");
    });

    //METODO CSS
    $("#reset").click(function(){
        $("div").css({
            'position': 'relative',
            'left': '0',
            'top': '0',
            'opacity': '1',
            'width': '100px',
            'height': '100px',
            'background-color': 'red',
        });
    });
})
