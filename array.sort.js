const numbers=[4,6,3,1,5,8,9]
const sortedNumbers=numbers.sort()
// console.log(sortedNumbers)


const frieds=['kabli','josim','razzak','anwar','depjol']
// const sortedFriends=frieds.sort();//later dia sort korbe


// const reverseFriends=frieds.reverse()
const sortedReversedFriends=frieds.sort().reverse();
console.log(sortedReversedFriends)



//number sorting fun

const bigNumbers=[66,58,81,92,9,6,37,13,2]
const sortedBigNumbers=bigNumbers.sort(function(a,b){
    return a-b;
})
console.log(sortedBigNumbers)
