// Assignment 1
function fibs(n){
    let result = [];
    for(let i=0;i<=n-1;i++){
        if(i == 0){
            result[i]=0;
        }else if(i==1){
            result[i] = 1;
        }else{
            result[i] = result[i-1]+result[i-2];
        }
    }
    return result;
}
//let result = [];
/* function fibsRec(n){
    if(n==0){
        result[n] = 0;
        return 0;
    }else if(n==1){
        result[n] = 1;
        fibsRec(n-1);
        return 1;
    }else{
        //console.log('hello world');
        //result.unshift(fibsRec(n-1) + fibsRec(n-2));
        result[n] = fibsRec(n-1) + fibsRec(n-2);//result[n-2] + result[n-3];
        fibsRec(n-1);
    }
    return result;
} */
function fibsRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibArray = fibsRec(n - 1);
      console.log(`hello world ${n}`);
      console.log(fibArray.length);
      console.log(fibArray)
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
      console.log(fibArray);
      return fibArray;
    }
  }
  
console.log(fibs(8));//[0, 1, 1, 2, 3, 5, 8, 13]
console.log(`result of the recursion function`);
console.log(fibsRec(8));//[0, 1, 1, 2, 3, 5, 8, 13]