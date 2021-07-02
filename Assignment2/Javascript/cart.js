function validateName(){
    var custName = document.getElementById("custName").value;
    var input = /[a-zA-Z]{2,50}/;

    if (input.test(custName)){
        document.getElementById("custNamePrompt").style.color = "green";
        document.getElementById("custNamePrompt").innerHTML = "valid";
        return true;
    }
    else{
        document.getElementById("custNamePrompt").style.color = "red";
        document.getElementById("custNamePrompt").innerHTML = "invalid";
        return false;
    }
}