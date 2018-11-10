$(document).ready(function() {

    alert("JS works");
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

$(document).on('click', '#link-logout', function () {
    window.location.replace("index.html");
});

$(document).on('click','#btn-login',function () {


    var username = $('#txtemail').val();
    var password = $('#pwd').val();

    if (username == "customer" && password =="password"){
        window.location.replace("customer-inner.html");
    } else if(username =="client" && password =="password"){
        window.location.replace("client-inner.html");
    }else if (username == "hospital" && password="password"){
        window.location.replace("hospital-inner.html");
    }else{
        myApp.alert("Wrong Credentials");
    }
});