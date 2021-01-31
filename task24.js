const konfinity =(string) =>{
    var visited =[];
    var arr =[];
    var value;
    var str = string.toUpperCase();
    arr = str.split("");
    for(var i=0;i<26;i++){
        visited[i]=0;
    }
    for(i=0;i<arr.length;i++){
        if(arr[i]!==" "){
            value = str.charCodeAt(i);
            visited[value-65]=1;
        }
    }
    for(i=0;i<26;i++){
        if(visited[i]==0){
            return false;
        }
    }
    return true;
}
module.exports = konfinity;
