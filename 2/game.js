function play(param0){
    // 입력 배열 길이가 3의 배수가 아니면 0점 
    if (param0.length %3!==0){
        return new Map([["A","0"], ["B", "0"], ["C","0"]]);
    }
    const arrays = [ [10], [30], [50], [80]];
    const penalty = { A :0, B:0, C:0};
    const players = ['A', 'B', 'C'];

    for (let i=0;i<param0.length; i+=3){
        const turnCards =[
            {player : 'A', card: param0[i]},
            {player : 'B', card: param0[i+1]},
            { player : 'C', card: param0[i+2]}
        ];
        //카드 숫자 기준 오름차순 정렬해놓기 -> 가장 작은 숫자 카드부터 시작
        turnCards.sort((a,b)=> a.card - b.card); // 오류 !! -> for문 안에 있어야 반복해서 실행 가능 -> 수정 완료
    
    // 남은 배열 중에서 조건 A 만족할 때 찾기
    for (const {player, card} of turnCards){
        let selectedIdx = -1;
        let minDiff = Infinity;

        for (let j = 0; j < 4; j++) {
            if (arrays[j].length === 0) continue; // 빈 배열은 무시

            const lastCard = arrays[j][arrays[j].length - 1];
            const diff = Math.abs(lastCard - card);

            // 차이가 더 작거나 같을 때, 더 큰 마지막 숫자를 우선
            if (
            diff < minDiff ||
            (diff === minDiff &&
                arrays[j][arrays[j].length - 1] > arrays[selectedIdx]?.[arrays[selectedIdx].length - 1])
            ) {
            minDiff = diff;
            selectedIdx = j;
            }
        }
    
        if (selectedIdx === -1) {
                continue; // 전부 비어있으면 건너뜀
        }

        const lastCard = arrays[selectedIdx][arrays[selectedIdx].length - 1];
        if (card < lastCard) {
            arrays[selectedIdx].push(card);
        } 
        else {
            // 배열 비우고 벌점 부여
            penalty[player] += arrays[selectedIdx].length;
            arrays[selectedIdx] = [];

            // 배열 4개가 모두 비었으면 게임 종료
            if (arrays.every(arr => arr.length === 0)) {
            return new Map([
                ["A", penalty["A"].toString()],
                ["B", penalty["B"].toString()],
                ["C", penalty["C"].toString()]
            ]);
            }
        }
    }
}
    return new Map([
        ["A", penalty["A"].toString()],
        ["B", penalty["B"].toString()],
        ["C", penalty["C"].toString()]
      ]);
    
}

// 테스트
// console.log(play([21, 9, 4]));
// console.log(play([55,8,29,13,7,61]));

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let inputs = [];
rl.on('line', (line) => {
	inputs.push(line);
	if (inputs.length === 1) {
		rl.close();
	}
});

rl.on('close', () => {
	const numArray = inputs[0].split(',').map(Number);
	const answer = play(numArray);
	for (const [key, value] of answer){
		console.log(key + "=" + value);
	}
});