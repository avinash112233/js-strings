function task4(email){
    var cut=email.split("@");
    var part1=cut[0];
    var sli=email.slice(0,4);
    var part2=cut[1];
   return sli +"....@"+part2;
}
module.exports=task4;

