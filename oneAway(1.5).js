var oneAway = function(str1, str2){
    var numOfEdits = false; 
    
    var i = 0;
    var j = 0; 
    
    if (Math.abs(str1.length - str2.length) > 1) return false; 
    
    while(i < str1.length && j < str2.length){
        if (str1[i] != str2[j]){
            if (str1.length < str2.length){
                i++; 
            } else if (str2.length < str1.length){
                j++;
            } 
            if (numOfEdits) return false; 
            numOfEdits = true; 
        }
        i++;
        j++;
    }
    
    
    return true;
}
