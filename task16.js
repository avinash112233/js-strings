let convert = (str) => {
  return str.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
}
module.exports=convert;
