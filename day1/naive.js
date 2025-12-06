function maxSum(arr,n,k){
    let max_sum=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<n-k+1;i++){
        let current_sum=0;
        for(let j=0;j<k;j++){
            current_sum +=arr[i+j]
        }
        max_sum=Math.max(current_sum,max_sum);
    }
    return max_sum
}

const arr=[5,2,-1,0,3];
const k=3;
const n=arr.length;
console.log(maxSum(arr, n, k));