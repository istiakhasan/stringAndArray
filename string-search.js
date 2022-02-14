const products=[
    'Del hardcore i29 200gp laptop',
    'iphone 1TB camera flashlight phone',
    'Delyellow laptop with black camera',
    'Del1X59 Lenovo commercial yoga Laptop',
    'LG supernova laptop',
    'HTC low price phone del',
    'purple color phone with laptop'
    
];


/* =====================================indexOf======================================== */
// const search='laptop';
//indexOf()
// const output=[];
// for(const product of products){
//     if(product.toLowerCase().indexOf(search.toLowerCase()) !=-1){
//         output.push(product)
//     }
// }

// console.log(output)
// includes===================================================================================
// const output=[];
// for( const product of products){
//     if(product.toLowerCase().includes(search.toLowerCase())){
//        output.push(product)
//     }
// }
// console.log(output)


// start with=============================================================================
const search='Del'
const output=[];
for( const product of products){
    // endWith diyeu kortey pari last a  ache kina
    if(product.toLowerCase().startsWith(search.toLowerCase())){
       output.push(product)
    }
}
console.log(output)


