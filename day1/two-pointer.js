function twoSum(arr,target){
    let left=0,right=arr.length-1;
    while(left<right){
        let sum =arr[left]+arr[right];
        if(sum===target){
            return true;

        }else if(sum<target){
left++
        }else
            right--
    }
    return false
}
let arr=[-3,-1,0,1,2]
let target=-2;

if(twoSum(arr,target))
{    console.log("true")
}else
{    console.log("false")}