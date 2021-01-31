const konfinity =(string1,string2) =>{
   var arr1 = string1.split("");
   var arr2 = string2.split("");
   var val1 =0;
   var val2 =0;
   for (var i=0;i<arr1.length;i++){
       val1=val1+arr1[i]*Math.pow(2,arr1.length-i-1);
   }
   for (var i=0;i<arr2.length;i++){
    val2=val2+arr2[i]*Math.pow(2,arr2.length-i-1);
}
var product = val1*val2;
var res =product.toString(2);
return res;

}
module.exports = konfinity;
