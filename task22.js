const konfinity =(string,word) =>{
    var newString = string.toUpperCase();
    var newWord = word.toUpperCase();
    var i = newString.indexOf(newWord);
    if(i>=0){
        return true;
    }
    else{
        return false;
    }
}
module.exports = konfinity;
