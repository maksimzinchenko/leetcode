/**
 * @param {string} s
 * @return {number}
 */

var v1 = function (s) {
        
    let sLength = s.length; // all string length
    let curSSLength = 0; // current max substring length
    let nextSLength = s.length; // rest string length
    let lettersSet = new Set(); // letters uniq dict   
    
    for (let i = 0; i < s.length; i++){
        let curL = 0;
        lettersSet.clear();
        if (curSSLength >= nextSLength){
            break;
        }
        for(let j = i; j < s.length; j++){
            let s1 = s[j];
            if (!lettersSet.has(s1)){
                curL++;
                lettersSet.add(s1);
            } else {
                break;
                
            }         
        }
        if (curL > curSSLength){
            curSSLength = curL;
            nextSLength = sLength - i;
        }
    }
    return curSSLength;
}



var lengthOfLongestSubstring = function(s) {
    return v1(s);
};