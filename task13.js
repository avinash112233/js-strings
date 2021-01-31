const konfinity=(string1,string2) =>{
    var arr=[];
    var arr2=[];
    var count=0;
    arr=string1.split("");
    while(arr.length>string2.length){
        arr2=arr.join("");
        var i=arr2.indexOf(string2);
        if(i>=0){
            count++;
        }
        arr.splice(0,i+string2.length);
    }
    return count;



}
module.exports=konfinity;
