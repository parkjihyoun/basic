function nextPosition(current, dice) {
    const next = current + dice;
    if (next == 4) {
        return dice + 10;
    }
    else if (next == 8) {
        return dice + 22;
    }
    else if (next == 28) {
        return dice + 48;
    }
    else if (next == 21) {
        // return dice + 42; 
        return dice + 21; 
    }
    else if (next == 50) {
        return dice + 17;
    }
    else if (next == 71) {
        // return dice + 92;
        return dice + 21;
    }
    else if (next == 80) {
        return dice + 19;
    }

    //뱀처리 추가
    const snakeMove = snake(next,dice);
    if(snakeMove!==null){
        return snakeMove;
    }
    
    return dice;    
}
//뱀에게 물렸을 때
function snake(next, dice) {

    if (next == 32) return dice - 22;
    else if (next == 36) return dice - 30;
    else if (next == 48) return dice - 22;
    else if (next == 61) return dice - 44;
    else if (next == 88) return dice - 64;
    else if (next == 95) return dice - 39;
    else if (next == 97) return dice - 19;
    return null;
}



let start = 1;
let next = 1;
let dice = 3;
next = start + nextPosition(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 4;
next = start + nextPosition(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 3;
next = start + nextPosition(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 5;
next = start + nextPosition(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 1;
next = start + nextPosition(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);


// 뱀에게 물린 것을 확인하기 위한 테스트 케이스 

// start = 1;
// dice = 31; // 1 + 31 = 32 → 뱀에게 물려 10
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);

// start = 1;
// dice = 35; // 1 + 35 = 36 → 뱀에게 물려 6
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);

// start = 1;
// dice = 47; // 1 + 47 = 48 → 뱀에게 물려 26
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);

// start = 1;
// dice = 60; // 1 + 60 = 61 → 뱀에게 물려 18
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);

// start = 1;
// dice = 87; // 1 + 87 = 88 → 뱀에게 물려 24
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);

// start = 1;
// dice = 94; // 1 + 94 = 95 → 뱀에게 물려 56
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);

// start = 1;
// dice = 96; // 1 + 96 = 97 → 뱀에게 물려 78
// next = start + nextPosition(start, dice);
// console.log("from=",start,", dice=",dice,", next=", next);