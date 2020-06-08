var NumberOfWords = 64
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkme.io/wlTrZ" 
words[2] = "https://shrinkme.io/18YNwIc" 
words[3] = "https://shrinkme.io/vf1piLtx" 
words[4] = "https://shrinkme.io/fbQGb" 
words[5] = "https://shrinkme.io/ZsWY" 
words[6] = "https://shrinkme.io/l4cvfdia" 
words[7] = "https://shrinkme.io/dO9ZJn" 
words[8] = "https://shrinkme.io/kqFocV" 
words[9] = "https://shrinkme.io/yOOjk" 
words[10] = "https://shrinkme.io/GGFi" 
words[11] = "https://shrinkme.io/EmZYS" 
words[12] = "https://shrinkme.io/zo5b" 
words[13] = "https://shrinkme.io/MGhVKsW" 
words[14] = "https://shrinkme.io/dazgx" 
words[15] = "https://shrinkme.io/mihuhc3" 
words[16] = "https://shrinkme.io/F7NkCCA8" 
words[17] = "https://shrinkme.io/LPT3UTR" 
words[18] = "https://shrinkme.io/20Kv6vgs" 
words[19] = "https://shrinkme.io/65TjSqE" 
words[20] = "https://shrinkme.io/TARAsqw" 
words[21] = "https://shrinkme.io/wCw5l6" 
words[22] = "https://shrinkme.io/Y7KrOf8G" 
words[23] = "https://shrinkme.io/oElhyYO" 
words[24] = "https://shrinkme.io/fGhw5" 
words[25] = "https://shrinkme.io/Pkfsj0z" 
words[26] = "https://shrinkme.io/JhyqsH" 
words[27] = "https://shrinkme.io/Brlh4" 
words[28] = "https://shrinkme.io/AMolPbv" 
words[29] = "https://shrinkme.io/bL50eC" 
words[30] = "https://shrinkme.io/HzTVnEH6" 
words[31] = "https://shrinkme.io/pLSFi" 
words[32] = "https://shrinkme.io/m4gcAc2C" 
words[33] = "https://shrinkme.io/6C2GyZA" 
words[34] = "https://shrinkme.io/iiBxCC" 
words[35] = "https://shrinkme.io/DKjeJOm" 
words[36] = "https://shrinkme.io/g9vjMVZK" 
words[37] = "https://shrinkme.io/S3UNLa6" 
words[38] = "https://shrinkme.io/CxRA" 
words[39] = "https://shrinkme.io/pHo8" 
words[40] = "https://shrinkme.io/4WCyqV" 
words[41] = "https://shrinkme.io/jHo4" 
words[42] = "https://shrinkme.io/i8tL" 
words[43] = "https://shrinkme.io/cIMhG8z" 
words[44] = "https://shrinkme.io/k3H1ufG" 
words[45] = "https://shrinkme.io/FnRUrG8U" 
words[46] = "https://shrinkme.io/mbzcxbW" 
words[47] = "https://shrinkme.io/tTRyJu1l" 
words[48] = "https://shrinkme.io/qnitHrMS" 
words[49] = "https://shrinkme.io/ENjr82TQ" 
words[50] = "https://shrinkme.io/fv2SZK7o" 
words[51] = "https://shrinkme.io/EXsyAd" 
words[52] = "https://shrinkme.io/tzBqwve" 
words[53] = "https://shrinkme.io/CmAmGtM" 
words[54] = "https://shrinkme.io/HREXfc" 
words[55] = "https://shrinkme.io/2OMw" 
words[56] = "https://shrinkme.io/W5mYc" 
words[57] = "https://shrinkme.io/nrFWKYcL" 
words[58] = "https://shrinkme.io/BGzDah" 
words[59] = "https://shrinkme.io/jK5bUTz" 
words[60] = "https://shrinkme.io/gR0L" 
words[61] = "https://shrinkme.io/FZkOW" 
words[62] = "https://shrinkme.io/voOeHkn" 
words[63] = "https://shrinkme.io/X4Gyj1" 
words[64] = "https://shrinkme.io/DXNgw3bi" 
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
