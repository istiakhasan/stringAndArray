function megaFriend(friends){
    if(Array.isArray(friends)==false){
        return 'Please provide an array';
    }
    let mega=friends[0];
    for(const friend of friends){
        if(friend.length>mega.length){
            mega=friend;
        }
    }
    return mega;
}

const friends=['kutub','Lion','Shamol','Sabbir','shamolpro']
const myBigBuddy=megaFriend(friends)
console.log(myBigBuddy)

//indexOf

if(friends.indexOf('Lion')!=-1){
    console.log('Lion exists')
}

//includs
if(friends.includes('Lion')){
    console.log('includes exist')
}

//concatination
const first=[1,2,5]
const secon=[3,4,6]
const combined=first.concat(secon)
console.log(combined)