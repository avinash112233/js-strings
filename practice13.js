function repetation(sen,word){
    var count=0;
    var myResult=sen.split(" ");
    //  var myPattern = new RegExp(Word,'g');
     for(var i=0; i<myResult.length; i++) {
    var result = myResult[i].Match(word);
    if(result) {
        count++;
    }
     }
     return count;


}
module.exports=repetation;  
