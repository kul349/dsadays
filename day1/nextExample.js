let spend = [12, 13, 15, 20, 10, 30];
let pref = [spend[0]];

for (let i = 1; i < spend.length; i++) {
  pref[i] = pref[i - 1] + spend[i];
}

function totalSpent(l,r){
    return l===0?pref[i]:pref[r]-pref[l-1]
}
console.log(totalSpent(1,4));