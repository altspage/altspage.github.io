var NumberOfWords = 83
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://test/Xoz0" 
words[2] = "https://test/uu1nEtt" 
words[3] = "https://test/YDHeS" 
words[4] = "https://test/1gZG3y" 
words[5] = "https://test/uQ5J" 
words[6] = "https://test/5OEGE" 
words[7] = "https://test/wx9m" 
words[8] = "https://test/FS84" 
words[9] = "https://test/tvcU9tI" 
words[10] = "https://test/yulvoSZ" 
words[11] = "https://test/GWkn" 
words[12] = "https://test/7cIcdwv" 
words[13] = "https://test/jXZGL" 
words[14] = "https://test/hqIgI1L" 
words[15] = "https://test/qRRR" 
words[16] = "https://test/H6EgfU" 
words[17] = "https://test/UbjlI9" 
words[18] = "https://test/RjFMy" 
words[19] = "https://test/I9l5" 
words[20] = "https://test/azxL" 
words[21] = "https://test/m4qS" 
words[22] = "https://test/JjoXyw" 
words[23] = "https://test/BX5m" 
words[24] = "https://test/Zg2O" 
words[25] = "https://test/J3SSBWS" 
words[26] = "https://test/e3yESP5" 
words[27] = "https://test/Kj5a8igM" 
words[28] = "https://test/IlRhS" 
words[29] = "https://test/ZTFy" 
words[30] = "https://test/zybiSbj" 
words[31] = "https://test/JQvSY" 
words[32] = "https://test/g66j" 
words[33] = "https://test/LWGOlJOV" 
words[34] = "https://test/X0RYJB" 
words[35] = "https://test/cHcx2" 
words[36] = "https://test/CIK7JM6c" 
words[37] = "https://test/Dyhi33" 
words[38] = "https://test/56cDMy" 
words[39] = "https://test/2yYuVS" 
words[40] = "https://test/mRc3J" 
words[41] = "https://test/y8kYu" 
words[42] = "https://test/eLgk" 
words[43] = "https://test/c5u8u" 
words[44] = "https://test/DpB196XI" 
words[45] = "https://test/la1OiVtN" 
words[46] = "https://test/AsYPNM7" 
words[47] = "https://test/n8Ne" 
words[48] = "https://test/TM036R" 
words[49] = "https://test/dHAdI7" 
words[50] = "https://test/cJSN" 
words[51] = "https://test/7Oj3h0k" 
words[52] = "https://test/Z3suon" 
words[53] = "https://test/1Ikco" 
words[54] = "https://test/wmOUrshp" 
words[55] = "https://test/hjXN8EQK" 
words[56] = "https://test/g1bC" 
words[57] = "https://test/W0jZdhds" 
words[58] = "https://test/PDs7eLH" 
words[59] = "https://test/gu7cT" 
words[60] = "https://test/hQcAnx" 
words[61] = "https://test/OAzveF" 
words[62] = "https://test/g5yVMK" 
words[63] = "https://test/W9Ju" 
words[64] = "https://test/pjvckqQM" 
words[65] = "https://test/a4JOHd" 
words[66] = "https://test/emQ0N" 
words[67] = "https://test/K7ZJwY0y" 
words[68] = "https://test/OTAdauG7" 
words[69] = "https://test/h00fh" 
words[70] = "https://test/T1Q1E" 
words[71] = "https://test/HpfH79I" 
words[72] = "https://test/pXdvFw" 
words[73] = "https://test/tTswdJG" 
words[74] = "https://test/nbDF3SQ" 
words[75] = "https://test/qfXmM" 
words[76] = "https://test/BZZv7" 
words[77] = "https://test/o4la2b" 
words[78] = "https://test/DpXW" 
words[79] = "https://test/Uln0jD" 
words[80] = "https://test/ZMGewzT" 
words[81] = "https://test/oPMi" 
words[82] = "https://test/npLH" 
words[83] = "https://test/5Hyz" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
