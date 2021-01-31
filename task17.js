function end(sen,word){
        var arrlen = sen.length;
        var wordlen=word.length;
      var res=sen.lastIndexOf(word);
        if(res === (arrlen-wordlen)){
                return true;
        }
        else{
                return false;
        }
        
    
}
module.exports=end;
