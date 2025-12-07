class LoadBalalncer{
    constructor(servers){
        this.servers=servers;

    }

    getServer(userID){
        const index=userID % this.servers.length;
        return this.servers[index]
    }

}

const lb = new LoadBalalncer(["Server-A", "Server-B", "Server-c"]);
const users=[101,202,303,404,505];

for(const user of users){
    console.log(`user ${user} ->  ${lb.getServer(user)}`)
}