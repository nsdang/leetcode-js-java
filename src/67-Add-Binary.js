/**

@param {string} a

@param {string} b

@return {string}
*/
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);

  // let ia = a.length - 1;
  // let ib = b.length - 1;
  // let rem = 0;
  // let digit;
  // let result = "";

  // let i = Math.min(ia, ib);
  // let b1 = b.substring(b.length - 1 - i, b.length);
  // while (i >= 0){
  // switch (rem){
  // case 0:
  // digit = parseInt(a[i]) ^ parseInt(b1[i]);
  // break;
  // case 1:
  // digit = parseInt(a[i]) ^ parseInt(b1[i]) ^ rem;
  // rem = 0;
  // break;
  // }
  // if (a[i] + b1[i] === "11") rem = 1;
  // i--;
  // }
  // result = b.substring(0, b.length - 1 - i) + result;
  // console.log(result);
};
