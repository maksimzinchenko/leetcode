/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var toBigInt =function (l) {
    let bufArray = []; 
    let hasNext = true;
    do {
        bufArray.push(l.val);
        hasNext=!!l.next;
        l = l.next;
    } while (hasNext);    
    return BigInt(bufArray.reverse().join(''));
}


function genListNode (val, next) {
    return new ListNode(val, next);
}



var toNodeList = function (a) {
    let next = null;
    for (let i = 0; i < a.length ; i++){
        next = genListNode(parseInt(a[i]), next);  
    }
    return next;
    
}

var addTwoNumbers = function (l1, l2) {
    let  summBigInt = toBigInt(l1) + toBigInt(l2);
    let resultStrArray = summBigInt.toString().split('');
    return toNodeList(resultStrArray);
};

