// Build a function which sorts a given array but uses a "merge sort" function for doing so.
function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }else{
        const middle = Math.floor(arr.length/2);
        const leftside = arr.slice(0,middle);
        const rightside = arr.slice(middle,arr.length);
        console.log(leftside);
        console.log(rightside);
        return merge(mergeSort(leftside),mergeSort(rightside));
    }
}
function merge(left,right){
    console.log('this is the merge function');
    console.log(left);
    console.log(right);
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    
    while(indexLeft < left.length && indexRight < right.length){
        if(left[indexLeft] < right[indexRight]){
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push( right[indexRight]);
            indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

let arrUnsorted = [9,8,5,3,4,2,1,6,7,0];
console.log(mergeSort(arrUnsorted));

