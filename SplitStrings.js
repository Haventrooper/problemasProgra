solution('abc')

function solution(str){
    let stringPar = []
    var contPar = 0
   var cont = 0
   var i = 0
   for(i = 0; i < str.length; i++){
    cont++
    if(cont === 2){
        stringPar[contPar] = str[i-1] + str[i]
        contPar++
      cont = 0;
    }

   }
   if(str.length % 2 !== 0){
       stringPar[contPar] = str[str.length -1] + '_'
   }
   console.log(stringPar)
}