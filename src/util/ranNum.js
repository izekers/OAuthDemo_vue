//产生随机数函数
/**
 * @return {string}
 */
var rndd = function RndNum(n){
  let rnd="";
  for(let i=0;i<n;i++)
    rnd+=Math.floor(Math.random()*10);
  return rnd;
}

export default rndd;
