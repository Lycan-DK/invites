var fs = require('fs')
var data =  fs.readFileSync('./data.txt', 'utf8')
var lib =  require('@lycandk/calculatedistance')
var dublin = {  latitude:53.339428,
                longitude:-6.257664}
var distance = 100;

async function prep (){
    try{
        data  =await  lib.prepare(data, dublin, distance)
    }catch(e){
        console.log(e.name); // logs 'Error'
        console.log(e.message); // logs 'The message' or a JavaScript error message
    }
   
}
prep().then(()=>{
    data.sort(function(a, b){
        var keyA = a.user_id, // sorting according to user_id
            keyB = b.user_id;
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
    });
    console.log(data)
})