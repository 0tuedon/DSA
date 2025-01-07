function minOperations(boxes) {
    let ballsR = 0;
    let movesR = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] == "1") {
            ballsR++;
            movesR += i;
        }
    }

    // ballsR =  2
    // MovesR = 2

    let ballsL = 0;
    let movesL = 0;
    const answer = new Array(boxes.length);
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] == "1") {
            ballsL++;
            ballsR--;
        }


        answer[i] = movesL + movesR;
        movesL += ballsL;
        movesR -= ballsR;
    }

    return answer;
};


console.log(minOperations("001011"))