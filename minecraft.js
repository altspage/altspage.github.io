var NumberOfWords = 20
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkme.io/D3WnwSY" 
words[2] = "https://shrinkme.io/qwLw5" 
words[3] = "https://shrinkme.io/xXcvL1d" 
words[4] = "https://shrinkme.io/P890" 
words[5] = "https://shrinkme.io/Xbs6" 
words[6] = "https://shrinkme.io/WwU9O" 
words[7] = "https://shrinkme.io/KEdk9kD" 
words[8] = "https://shrinkme.io/xGtnUd" 
words[9] = "https://shrinkme.io/7YzC" 
words[10] = "https://shrinkme.io/74wbRa" 
words[11] = "https://shrinkme.io/rEkq" 
words[12] = "https://shrinkme.io/I7L9Z7H" 
words[13] = "https://shrinkme.io/PYM4om8p" 
words[14] = "https://shrinkme.io/JwUGYRz" 
words[15] = "https://shrinkme.io/DEdgnl3T" 
words[16] = "https://shrinkme.io/dd3YMW" 
words[17] = "https://shrinkme.io/OR9Q" 
words[18] = "https://shrinkme.io/Zt0v" 
words[19] = "https://shrinkme.io/FZhg" 
words[20] = "https://shrinkme.io/KPHuSNy" 
words[21] = "" 
words[22] = "" 
words[23] = "" 
words[24] = "" 
words[25] = "" 
words[26] = "" 
words[27] = "" 
words[28] = "" 
words[29] = "" 
words[30] = "" 
words[31] = "" 
words[32] = "" 
words[33] = "" 
words[34] = "" 
words[35] = "" 
words[36] = "" 
words[37] = "" 
words[38] = "" 
words[39] = "" 
words[40] = "" 
words[41] = "" 
words[42] = "" 
words[43] = "" 
words[44] = "" 
words[45] = "" 
words[46] = "" 
words[47] = "" 
words[48] = "" 
words[49] = "" 
words[50] = "" 
words[51] = "" 
words[52] = "" 
words[53] = "" 
words[54] = "" 
words[55] = "" 
words[56] = "" 
words[57] = "" 
words[58] = "" 
words[59] = "" 
words[60] = "" 
words[61] = "" 
words[62] = "" 
words[63] = "" 
words[64] = "" 
words[65] = "" 
words[66] = "" 
words[67] = "" 
words[68] = "" 
words[69] = "" 
words[70] = "" 
words[71] = "" 
words[72] = "" 
words[73] = "" 
words[74] = "" 
words[75] = "" 
words[76] = "" 
words[77] = "" 
words[78] = "" 
words[79] = "" 
words[80] = "" 
words[81] = "" 
words[82] = "" 
words[83] = "" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}
function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("WordForm");
  var copyText = document.getElementById("wordbox");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}
function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
