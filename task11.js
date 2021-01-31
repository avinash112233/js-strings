function task(number){

    var rem=number%10;
    if(rem==1){
       return  number+"st";
       
    }
    else if(rem==2){
       return  number+"nd";
    }
    else if(rem==3){
        return number+"rd";
    }
    else{
        return number+"th";
    }


}
module.exports=task;
