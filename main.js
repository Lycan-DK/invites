var fs = require('fs')
var data =  fs.readFileSync('./data.txt', 'utf8')
var lib =  require('@lycandk/calculatedistance')
var dublin = {  latitude:53.339428,
                longitude:-6.257664}
var distance = 100;

async function prep (){
    data  =await  lib.prepare(data, dublin, distance)
}
prep().then(result=>{
    data.sort(function(a, b){
        var keyA = a.user_id, // sorting according to user_id
            keyB = b.user_id;
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
    });
    console.log(data)
})