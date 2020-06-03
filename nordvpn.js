var NumberOfWords = 83
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkme.io/j5ohM6" 
words[2] = "https://shrinkme.io/aJIOWow1" 
words[3] = "https://shrinkme.io/UKoNZy" 
words[4] = "https://shrinkme.io/zCxRx5" 
words[5] = "https://shrinkme.io/oIGdvo" 
words[6] = "https://shrinkme.io/crtK8" 
words[7] = "https://shrinkme.io/RZgVc" 
words[8] = "https://shrinkme.io/r4yxj" 
words[9] = "https://shrinkme.io/mq6qLoA" 
words[10] = "https://shrinkme.io/vQTnFhC" 
words[11] = "https://shrinkme.io/9cynPVnQ" 
words[12] = "https://shrinkme.io/v9WHONK6" 
words[13] = "https://shrinkme.io/mT0YP" 
words[14] = "https://shrinkme.io/t260" 
words[15] = "https://shrinkme.io/bQ3afxW7" 
words[16] = "https://shrinkme.io/vlwQ" 
words[17] = "https://shrinkme.io/nBRDTQto" 
words[18] = "https://shrinkme.io/To4iS" 
words[19] = "https://shrinkme.io/AutKLV" 
words[20] = "https://shrinkme.io/lHJN" 
words[21] = "https://shrinkme.io/cxy4JwB" 
words[22] = "https://shrinkme.io/yhzN8" 
words[23] = "https://shrinkme.io/In9oW" 
words[24] = "https://shrinkme.io/LtTERDM" 
words[25] = "https://shrinkme.io/rhrwXtfv" 
words[26] = "https://shrinkme.io/gXIFOQ9i" 
words[27] = "https://shrinkme.io/Tq7P4B" 
words[28] = "https://shrinkme.io/3CVOqh" 
words[29] = "https://shrinkme.io/0NFo" 
words[30] = "https://shrinkme.io/5rQqki" 
words[31] = "https://shrinkme.io/KygIk" 
words[32] = "https://shrinkme.io/lx13" 
words[33] = "https://shrinkme.io/S3hPop" 
words[34] = "https://shrinkme.io/H1Ym5YTj" 
words[35] = "https://shrinkme.io/teYes2" 
words[36] = "https://shrinkme.io/LtFU5ZE7" 
words[37] = "https://shrinkme.io/IqEEHh" 
words[38] = "https://shrinkme.io/iDYhha" 
words[39] = "https://shrinkme.io/bal5vVZE" 
words[40] = "https://shrinkme.io/1ZerN" 
words[41] = "https://shrinkme.io/NyoM6Y" 
words[42] = "https://shrinkme.io/AwZy" 
words[43] = "https://shrinkme.io/0bERkeT" 
words[44] = "https://shrinkme.io/ajuQCJA" 
words[45] = "https://shrinkme.io/xiQKtUF" 
words[46] = "https://shrinkme.io/ajuQCJA" 
words[47] = "https://shrinkme.io/WObApK" 
words[48] = "https://shrinkme.io/MMUWkl" 
words[49] = "https://shrinkme.io/P1U53" 
words[50] = "https://shrinkme.io/pLw33N" 
words[51] = "https://shrinkme.io/wSAARgPt" 
words[52] = "https://shrinkme.io/hbP9" 
words[53] = "https://shrinkme.io/sKGM0ee" 
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
