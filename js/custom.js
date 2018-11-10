$(document).ready(function() {


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

    if (username == "customer@test.com" && password =="password"){
        window.location.replace("customer-inner.html");
        return false;
    } else if(username =="client@test.com" && password =="password"){
        window.location.replace("client-inner.html");
        return false;
    }else if (username == "hospital@test.com" && password=="password"){
        window.location.replace("hospital-inner.html");
        return false;
    }else{
        alert("Wrong Credentials");
        $('#txtemail').val("");
        $('#pwd').val("");
        return false;
    }
});