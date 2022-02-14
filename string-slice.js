const anthem='Amar sonar bangla ami tomai valobashi'
const word=anthem.split(' ')
const withOurA=anthem.split('a')
// console.log(word)
// console.log(withOurA)



//slice first index=first perameter jekhan thekey suru hbe thekey  last index 
const smallSlice=anthem.slice(5,anthem.length)
const smallSliceWithNumber=anthem.slice(5,13)
// console.log(smallSlice)



//substr-kotha thekey suru korey porer koita index nibo
const anotherPart=anthem.substr(11,7)
// console.log(anotherPart)


//subString
const anotherSubString=anthem.substring(11,13)
// console.log(anotherSubString)
const first='amader'
const second='city'
// const fullString=first+second
const fullString=first.concat(second).concat('abc').concat('Robin')
console.log(fullString)



//
const words=['a', 'b', 'c', 'd']
const allJoined=words.join(',')
console.log(allJoined)







