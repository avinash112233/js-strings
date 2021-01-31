function konfinity(string,sub){
    var sub1=sub;
    var n=string.includes(sub1);
    if(n){

        var haha=string.replace(sub1, "").trim();
        // var newhaha=haha.replace(/ sub /g, " ");
        var newhaha=haha.replace(/\s+/g, ' ').trim();
        return newhaha;

    }
    else{
        return false;
    }

}
module.exports=konfinity; 
