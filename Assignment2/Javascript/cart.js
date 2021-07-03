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



window.onload = function() {CalculateItemsValue()};
function CalculateItemsValue() {
    var total = 0;
    var total_items = 3;

    for (i=1; i<=total_items; i++) {
         
        itemID = document.getElementById("qnt_"+i);
        subTotal = document.getElementById("sub_"+i);
        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "qnt_"+i);
        } else {
            subTotal.innerHTML = "$" + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"))+".00";
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
         
    }
    document.getElementById("ItemsTotal").innerHTML = "$" + total + ".00";
     
}

$("input[type=number]").on({
    keyup: function(){
        CalculateItemsValue();
    },
    click: function(){
        CalculateItemsValue();
    }
  });