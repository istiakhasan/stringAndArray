function addNumbers(num1,num2){
    // console.log(arguments[1])
    let result=0
    for(const num of arguments){
        result=result+num
    }
    return result
}
//arguments is  array like object
const sum=addNumbers(23,12)
console.log(sum)



function getFullName(firstName,lastName){

    let fullName='';
    for(const part of arguments){
        fullName=fullName+part+' ';
    }
    return fullName

}
const name=getFullName('Omuk','Songket','bin','Hanif', 'Songket')
console.log(name)