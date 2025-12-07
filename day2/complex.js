class ConsistentHashing{
    constructor(servers){
this.ring=new Map();
this.keys=[];

for(const server  of servers){
const hash =this.hash(server);
this.ring.set(hash,server);
this.keys.push(hash)
}
this.keys.sort((a,b)=>a-b)
    }

    hash(str){
        let hash=0;
        for(let i=0;i<str.length;i++){
            hash=(hash*31 + str.charCodeAt(i)) %10000
        }
        return hash;
    }

    getServer(clientID){
        const h=this.hash(clientID.toString());

        for(const key of this.keys){
            if(h<=key) return this.ring.get(key);

        }
        return this.ring.get(this.keys[0])

    }
}

const servers = ["Server-A", "Server-B", "Server-C"];
const lb=new ConsistentHashing(servers);

console.log("User 101 →", lb.getServer("101"));
console.log("User 102 →", lb.getServer("102"));
console.log("User 103 →", lb.getServer("103"));