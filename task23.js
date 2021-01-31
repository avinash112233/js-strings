const konfinity =(string,number) =>{
    var arr =[];
    var arr1 =[];
    var value;
    arr=string.split("");
    for(i=0;i<arr.length;i++){
        if(arr[i]!==" "){
            value =string.charCodeAt(i)+number;
            if(value>122 || value<97){
                value =96+value-122;
            }
            arr1[i]=String.fromCharCode(value);
        }
        else{
            arr1[i]=" ";
        }
        
    }
    var res =arr1.join("");
        return res;
}
module.exports = konfinity;
