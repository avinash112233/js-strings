const konfinity =(string,character,flag) =>{
    var arr = new Array();
    var arr1 = new Array();
    var arr2 =new Array();
    arr = string.split("");
    var i=string.indexOf(character);
    if(i>=0){
        if(flag===1){
            arr1 =arr.slice(0,i);
        }
        else if(flag===2){
            arr1 =arr.slice(i+1);
        }

    }
    else{
        return false;
    }
    arr2=arr1.join("");
    return arr2;
}
module.exports=konfinity;
