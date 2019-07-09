
function great() {
   var randomNUM = Math.floor(Math.random() * 18);
    console.log(randomNUM);


    var x = document.getElementById("btnid").textContent;
    document.getElementById("quotehere").textContent = x;

}

great();