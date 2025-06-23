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
    // 32인경우 뱀에게 물려 10로 떨어짐
    else if (next == 32) {
        return dice - 22;
    }
    // 36인경우 뱀에게 물려 6로 떨어짐
    else if (next == 36) {
        return dice - 30;
    }
    // 48인경우 뱀에게 물려 26로 떨어짐
    else if (next == 48) {
        return dice - 22;
    }
    else if (next == 50) {
        return dice + 17;
    }
    // 61인경우 뱀에게 물려 18로 떨어짐
    else if (next == 61) {
        return dice - 44;
    }
    else if (next == 71) {
        // return dice + 92;
        return dice + 21;
    }
    else if (next == 80) {
        return dice + 19;
    }
    // 88인경우 뱀에게 물려 24로 떨어짐
    else if (next == 88) {
        return dice - 64;
    }
    // 95인경우 뱀에게 물려 56로 떨어짐
    else if (next == 95) {
        return dice - 39;
    }
    // 97인경우 뱀에게 물려 78로 떨어짐
    else if (next == 97) {
        return dice - 19;
    }
    
    return dice;    
}

let start = 1;
let next = 1;
let dice = 5;
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
