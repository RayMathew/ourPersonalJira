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
        }, function(json, a, v, b) {
            createCookie('username', username);
            window.location.assign(window.location.href + 'dashboard');
        })
        .fail(function(err) {
            console.log("err", err);
        });
        return false;
    });
});


function createCookie(name, value) {
    if (!name || !value){
        return ;
    }
    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
    document.cookie=name + "=" + encodeURI(value) + "; path=/; expires=" + expiry.toGMTString();
}
