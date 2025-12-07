class Hash {

  constructor(buckets) {
    this.bocketCount = buckets;
    this.table = new Array(this.bocketCount).fill(null).map(() => []);
  }


  insert(key) {
    const index = this.getHasIndex(key);
    this.table[index].push(key);
  }

  remove(key) {
    const index = this.getHasIndex(key);
    const pos = this.table[index].indexOf(key);
    if (pos !== -1) {
      this.table[index].splice(pos, 1);
    }
  }

  display() {
    for (let i = 0; i < this.bocketCount; i++) {
      let output = i.toString();

      for (const key of this.table[i]) {
        output += "-->" + key;
      }
      console.log(output);
    }
  }

  getHasIndex(key) {
    return key % this.bocketCount;
  }
}

const keys=[7,18,12,25];
const  hasTable=new Hash(7);
for(const key of keys){
hasTable.insert(key)
}
hasTable.remove(12);
hasTable.display();