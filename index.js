module.exports = function check(str, bracketsConfig) {

  let newArr = [];
  bracketsConfig.forEach( item => {
    let n = '';
    item.forEach( i => {
        n += i;        
    })
    newArr.push(n);
  });

let k = 0;
for(k;k<newArr.length;k++){
   let elemNewArr = newArr[k];
   if( str.includes(elemNewArr) ){
    str = str.replace(elemNewArr, "");
    k = -1;
   }
}

return str.length === 0;
}
