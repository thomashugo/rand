var len = document.getElementById("len");
var gen = document.getElementById("gen");
var res = document.getElementById("res");
var lenDisp = document.getElementById("lenDisp");

len.addEventListener("input", function(){
  lenDisp.innerHTML = len.value
})

lenDisp.addEventListener("keyup", function(){
  len.value = lenDisp.innerHTML
})

gen.addEventListener("click", function(){
  res.innerHTML = randomAlphaNumeric(Number(len.value));
})

lenDisp.innerHTML = len.value
function randomAlphaNumeric(length){
  var randomCode = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < length; i++) {
    var alphaOrNum = Math.floor(Math.random() * 2);
    if (alphaOrNum === 0) {
      randomCode += alphabet[Math.floor(Math.random() * (alphabet.length))];
    } else {
      randomCode += Math.floor(Math.random() * 10);
    }
  }
  return randomCode;
}