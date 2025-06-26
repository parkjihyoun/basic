//해시 인덱스를 계산하는 함수 구현하기
/*
    문자열의 i번째 문자를 유니코드 숫자값으로 바꿔서
    ex) 'a'.charCodeAt(0) → 97
    순서가 다르면 같은 문자라도 다른 숫자 부여해야하니까 (i+1)를 곱해준다. -> i는 0부터니까
    만들어진 숫자가 엄청 크기 때문에
    배열 크기로 나누어서 0 ~ 배열 크기-1 사이 수로 만듦

*/
function hash(key, bucketSize){
    let hashValue =0;
    for (let i=0; i< key.length; i++){
        hashValue += key.charCodeAt(i)* (i+1); 
    }
    hashValue %= bucketSize;
    return hashValue;
}

// 값을 해시맵에 추가하거나 업데이트 하기
function put(key, value){
    const index = hash(key, bucketSize); // 해시 인덱스 계산
    const bucket = bucket[index]; // 해당 인덱스의 버킷에 접근하기

    for (let i=0; i< bucket.length; i++){
        if (bucket[i][0]==key){
            bucket[i][1] = value; // 키가 이미 있으면 값만 수정해야함
            return;
        }
    }
    bucket.push([key, value]); // 새 키인 경우에 추가 !
}

// 키에 대응하는 값 반환
function get(key){
    const index = hash(key, bucketSize);
    const bucket = buckets[index];

    for (let i = 0; i< bucket.length; i++){
        if(bucket[i][0]===key){
            return bucket[i][1]; // 값 반환
        }
    }
    return null; // 없으면 null
}

// 키가 존재하는지 true, false 리턴
function containsKey(key) {
    const index = hash(key, bucketSize);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            return true;
        }
    }

    return false;
}

// 주어진 key에 해당하는 항목 삭제하기
function remove(key) {
    const index = hash(key, bucketSize);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1); // 해당 항목 삭제
            return;
        }
    }
}

// 전체 해시맵 초기화
function clear() {
    buckets = Array(bucketSize).fill(null).map(() => []);
}

// 비어있는지 확인
function isEmpty() {
    for (let i = 0; i < bucketSize; i++) {
        if (buckets[i].length > 0) {
            return false;
        }
    }
    return true; // 모든 버킷 비면 true
}

//모든 키를 배열로 반환
function keys() {
    const result = [];
    for (let i = 0; i < bucketSize; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            result.push(buckets[i][j][0]);
        }
    }
    return result;
}

// 전체 아이템 개수 리턴하기
function size() {
    let count = 0;
    for (let i = 0; i < bucketSize; i++) {
        count += buckets[i].length;
    }
    return count;
}

// bucketSize 크기의 배열을 만들고 각 칸은 빈 배열로 초기화하기
let bucketSize = 100;
let buckets = Array(bucketSize).fill(null).map(() => []);