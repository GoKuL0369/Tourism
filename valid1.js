var regEmail = document.getElementById("usern");
var errorE = document.getElementById("errorusern");
var regPwd = document.getElementById("pswd");
var errorP = document.getElementById("errorpswd");

function validate(){
    var regExp1 = /^([A-Za-z0-9_\.\-]+)@([A-Za-z\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    
    if(regExp1.test(regEmail.value) ){

        errorE.style.display="none";
        return true;
    }
    else{
        errorE.innerHTML= "Invalid Email ";
        errorE.style.color="red";
        
        return false;
    }
}