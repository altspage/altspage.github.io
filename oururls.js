var NumberOfWords = 83
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkurl.org/Xoz0" 
words[2] = "https://shrinkurl.org/uu1nEtt" 
words[3] = "https://shrinkurl.org/YDHeS" 
words[4] = "https://shrinkurl.org/1gZG3y" 
words[5] = "https://shrinkurl.org/uQ5J" 
words[6] = "https://shrinkurl.org/5OEGE" 
words[7] = "https://shrinkurl.org/wx9m" 
words[8] = "https://shrinkurl.org/FS84" 
words[9] = "https://shrinkurl.org/tvcU9tI" 
words[10] = "https://shrinkurl.org/yulvoSZ" 
words[11] = "https://shrinkurl.org/GWkn" 
words[12] = "https://shrinkurl.org/7cIcdwv" 
words[13] = "https://shrinkurl.org/jXZGL" 
words[14] = "https://shrinkurl.org/hqIgI1L" 
words[15] = "https://shrinkurl.org/qRRR" 
words[16] = "https://shrinkurl.org/H6EgfU" 
words[17] = "https://shrinkurl.org/UbjlI9" 
words[18] = "https://shrinkurl.org/RjFMy" 
words[19] = "https://shrinkurl.org/I9l5" 
words[20] = "https://shrinkurl.org/azxL" 
words[21] = "https://shrinkurl.org/m4qS" 
words[22] = "https://shrinkurl.org/JjoXyw" 
words[23] = "https://shrinkurl.org/BX5m" 
words[24] = "https://shrinkurl.org/Zg2O" 
words[25] = "https://shrinkurl.org/J3SSBWS" 
words[26] = "https://shrinkurl.org/e3yESP5" 
words[27] = "https://shrinkurl.org/Kj5a8igM" 
words[28] = "https://shrinkurl.org/IlRhS" 
words[29] = "https://shrinkurl.org/ZTFy" 
words[30] = "https://shrinkurl.org/zybiSbj" 
words[31] = "https://shrinkurl.org/JQvSY" 
words[32] = "https://shrinkurl.org/g66j" 
words[33] = "https://shrinkurl.org/LWGOlJOV" 
words[34] = "https://shrinkurl.org/X0RYJB" 
words[35] = "https://shrinkurl.org/cHcx2" 
words[36] = "https://shrinkurl.org/CIK7JM6c" 
words[37] = "https://shrinkurl.org/Dyhi33" 
words[38] = "https://shrinkurl.org/56cDMy" 
words[39] = "https://shrinkurl.org/2yYuVS" 
words[40] = "https://shrinkurl.org/mRc3J" 
words[41] = "https://shrinkurl.org/y8kYu" 
words[42] = "https://shrinkurl.org/eLgk" 
words[43] = "https://shrinkurl.org/c5u8u" 
words[44] = "https://shrinkurl.org/DpB196XI" 
words[45] = "https://shrinkurl.org/la1OiVtN" 
words[46] = "https://shrinkurl.org/AsYPNM7" 
words[47] = "https://shrinkurl.org/n8Ne" 
words[48] = "https://shrinkurl.org/TM036R" 
words[49] = "https://shrinkurl.org/dHAdI7" 
words[50] = "https://shrinkurl.org/cJSN" 
words[51] = "https://shrinkurl.org/7Oj3h0k" 
words[52] = "https://shrinkurl.org/Z3suon" 
words[53] = "https://shrinkurl.org/1Ikco" 
words[54] = "https://shrinkurl.org/wmOUrshp" 
words[55] = "https://shrinkurl.org/hjXN8EQK" 
words[56] = "https://shrinkurl.org/g1bC" 
words[57] = "https://shrinkurl.org/W0jZdhds" 
words[58] = "https://shrinkurl.org/PDs7eLH" 
words[59] = "https://shrinkurl.org/gu7cT" 
words[60] = "https://shrinkurl.org/hQcAnx" 
words[61] = "https://shrinkurl.org/OAzveF" 
words[62] = "https://shrinkurl.org/g5yVMK" 
words[63] = "https://shrinkurl.org/W9Ju" 
words[64] = "https://shrinkurl.org/pjvckqQM" 
words[65] = "https://shrinkurl.org/a4JOHd" 
words[66] = "https://shrinkurl.org/emQ0N" 
words[67] = "https://shrinkurl.org/K7ZJwY0y" 
words[68] = "https://shrinkurl.org/OTAdauG7" 
words[69] = "https://shrinkurl.org/h00fh" 
words[70] = "https://shrinkurl.org/T1Q1E" 
words[71] = "https://shrinkurl.org/HpfH79I" 
words[72] = "https://shrinkurl.org/pXdvFw" 
words[73] = "https://shrinkurl.org/tTswdJG" 
words[74] = "https://shrinkurl.org/nbDF3SQ" 
words[75] = "https://shrinkurl.org/qfXmM" 
words[76] = "https://shrinkurl.org/BZZv7" 
words[77] = "https://shrinkurl.org/o4la2b" 
words[78] = "https://shrinkurl.org/DpXW" 
words[79] = "https://shrinkurl.org/Uln0jD" 
words[80] = "https://shrinkurl.org/ZMGewzT" 
words[81] = "https://shrinkurl.org/oPMi" 
words[82] = "https://shrinkurl.org/npLH" 
words[83] = "https://shrinkurl.org/5Hyz" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}
function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("WordForm");

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
