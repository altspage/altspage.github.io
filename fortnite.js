var NumberOfWords = 10
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://gestyy.com/eqqAjR" 
words[2] = "http://gestyy.com/eqqAkv" 
words[3] = "http://gestyy.com/eqqAla" 
words[4] = "http://gestyy.com/eqqAlZ" 
words[5] = "http://gestyy.com/eqqAxs" 
words[6] = "http://gestyy.com/eqqAcF" 
words[7] = "http://gestyy.com/eqqAvU" 
words[8] = "http://gestyy.com/eqqATH" 
words[9] = "http://gestyy.com/eqqATX" 
words[10] = "http://gestyy.com/eqqATM" 
words[11] = "http://gestyy.com/eqqAT5" 
words[12] = "http://gestyy.com/eqqAY0 " 
words[13] = "http://gestyy.com/eqqAYt " 
words[14] = "http://gestyy.com/eqqAYp " 
words[15] = "http://gestyy.com/eqqAYg " 
words[16] = "" 
words[17] = "" 
words[18] = "" 
words[19] = "" 
words[20] = "" 
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
