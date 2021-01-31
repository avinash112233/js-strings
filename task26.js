var arr=[];
const konfinity =(str,str2)=>
{
    var arr1= [];
    var arr2=[];
    var tempArr1=[];
    var shiftCount;
    var direction;
    var originalArr1 = [];
    console.log("Entered String: ",str);
    console.log("Converting entered String in LOWECASE: ");
    var str1=str.toLowerCase();
    console.log(str1);
    console.log("Enterd Direction Information: ",str2);
    arr2=str2.split("");
    arr1=str1.split("");
    originalArr1 = str1.split("");
    console.log(arr2);
    for(i=0;i<arr2.length;i=i+4)
    {
        direction = arr2[i];
        shiftCount=arr2[i+2];
        stringRotate(arr1,direction,shiftCount);
        
    }
  
    var copiedArr = arr.splice(0,arr.length);
    
    for(i=0;i<=originalArr1.length-copiedArr.length;i++)              
    {
        tempArr1=originalArr1.slice(i,copiedArr.length+i);
        if(checkAnangram(tempArr1,copiedArr))
        {                                            
            return "YES";
        }
    }
    return "NO";
}
function checkAnangram(tempArr1,copiedArr)
{
    var i;
    console.log("********IN CHECKANAGRAM******");
    console.log("TEMPARRAY: ",tempArr1);
    console.log("COPIEDARRAY: ",copiedArr);
    var frequency =[];
    for(var i=0;i<26;i++)
    {
        frequency[i]=0;
    }
    var strTempArr1=tempArr1.join("");
    var strcopiedArr = copiedArr.join("");
    for(i=0;i<tempArr1.length;i++)
    {
        frequency[strTempArr1.charCodeAt(i)-97]++;
    }
   
    for(i=0;i<copiedArr.length;i++)
    {
        frequency[strcopiedArr.charCodeAt(i)-97]--;
    }
   
    for(i=0;i<26;i++)
    {
        if(frequency[i]!=0)
        {
            return 0;
        }
    }
    return 1;
}
function stringRotate(arr1,direction,shiftCount)
{
    var temp,i;
   
    if(direction ==="L")
    {
        while(shiftCount)
        {
            temp = arr1[0];
            shiftCount--;
            for( i =0;i<arr1.length-1;i++)
            {
                arr1[i]=arr1[i+1];
            }
            arr1[i]=temp;
        }
        arr.push(arr1[0]);
    }
    if(direction==="R")
    {
        while(shiftCount)
        {
            temp = arr1[arr1.length-1];
            shiftCount--;
            for(i =arr1.length-1;i>0;i--)
            {
                arr1[i]=arr1[i-1];
            }
            arr1[i]=temp;
        }
        arr.push(arr1[0]);
    }
}
var output = konfinity("ilovekonfinitybigtime","R 1 R 8 L 7 L 6 R 4");
console.log("The OutPut is: ",output);

module.exports=konfinity;
