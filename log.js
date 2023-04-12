
function from(){
    var fname=document.getElementById("fname").value;
    var namepattern= /^[A-Za-z]+/
    var email=document.getElementById("eemail").value;
    var emailpattern=/^[a-zA-z0-9]+@lus\.ac\.bd$/
    // var passpattern=/((?=.*\d)(?=.*[A-Z])(?=.*[a-z](?=.*[!@])))

    if(!email.match(emailpattern)){
        document.getElementById("mail").innerHTML="enter again";
        return false;
        
    }
    else{
        document.getElementById("mail").innerHTML=" ";
        return false;
    }
}