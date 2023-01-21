 document.getElementById("calculator").onchange = function(){


  var totalAmount = Number(document.getElementById("amount").value);

  
  var tipPercentage = document.getElementById("Tip").value;
  
  var tipAmount= totalAmount * (tipPercentage/100); 
  var totalBill = totalAmount + tipAmount; 

  document.getElementById("percentage-output").innerHTML = " " + tipPercentage + "%";

  document.getElementById("tipamount").innerHTML = " " + tipAmount; 
  document.getElementById("totalbill").innerHTML = " " + totalBill; 



}





// const percentageOutput = document.getElementById("percentage-output");
// var  tipAmount = document.getElementById("tipamount");
// const totalBill = document.getElementById("totalbill");