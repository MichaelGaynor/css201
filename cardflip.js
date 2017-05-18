$(document).ready(function(){

    // $('#parent').click(function(){
    //     $(this).css({
    //         'perspective': '500px'
    //     })
    // })

    $('#change-perspective').change(function(event){
        var newVal = $(this).val();
        $('#parent').css({
            'perspective': newVal
        })
    })
    $('#change-lock').change(function(event){
        var newVal = $(this).val();
        $('#parent').css({
            'perspective-origin': newVal
        })
    })
    $('.card-holder').click(function(){
        $(this).toggleClass('flip')
    })

})