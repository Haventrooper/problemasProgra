function getCount(str) {
    var count = 0;
    let vowels = ['a','e','i','o','u']
    var i = 0;
    var j = 0;
    
    for(i = 0; i < str.length; i++){
      for(j = 0; j < vowels.length; j++){
        if(str[i]==vowels[j]){
          count++
        }
        else{
          continue
        }
      }
    }
    return count;
  }