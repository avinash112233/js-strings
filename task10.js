function insert(str, value, index) {
     newstr=str.slice(0,index)+value+" "+str.slice(index);
    return newstr;
}
module.exports=insert;
