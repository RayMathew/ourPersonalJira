$(document).ready(function() {
    // $('.submit-credentials').on('click', function(){
    //     let username = $('input[name=username]')[0].value;
    //     let password = $('input[name=password]')[0].value;
    //     $.ajax({
    //         type: "POST",
    //         url: 'login'
    //     }).done(function(response){
    //         console.log("hi resonse", response);
    //     }).fail(function(error){
    //         console.log("hi error", error);
    //     });
    //     // $.post('login/', {
    //     //     username: username,
    //     //     password: password
    //     // },function(response){
    //     //     console.log("hi resonse", response);
    //     // }).fail(function(error){
    //     //     console.log("hi error", error);
    //     // });
    // });


    $('form').submit(function(ere) {
            let username = $('input[name=username]')[0].value;
            let password = $('input[name=password]')[0].value;
        $.post('login', {
            username: username,
            password: password
        }, function(json, a ,v, b) {
            window.location.assign(window.location.href +'dashboard');
        })
        .fail(function(err){
            console.log("err", err);
        });
        return false;
    });
});
