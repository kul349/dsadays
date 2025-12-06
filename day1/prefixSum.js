function prefSum(arr){

let n=arr.length;

let prefixSum= new Array(n);
prefixSum[0]=arr[0];

for(let i=1;i<n;i++)
    prefixSum[i]=prefixSum[i-1]+arr[i];
return prefixSum;



}

let arr = [10, 20, 10, 5, 15];
let prefixSum = prefSum(arr);

for(let i of prefixSum){
    process.stdout.write(i + " ")
}