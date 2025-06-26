function find(param0, param1) {
    const books = [
      { title: "Great", outOfPrint: true, genre: "Novel", rating: 3.1, quantity: 2, start: "197001", end: "198104" },
      { title: "Laws", outOfPrint: true, genre: "Novel", rating: 4.8, quantity: 3, start: "198006", end: "198507" },
      { title: "Dracula", outOfPrint: true, genre: "Drama", rating: 2.3, quantity: 6, start: "199105", end: "199605" },
      { title: "Mario", outOfPrint: true, genre: "Drama", rating: 3.8, quantity: 4, start: "200109", end: "201211" },
      { title: "House", outOfPrint: false, genre: "Magazine", rating: 4.4, quantity: 1, start: "198707", end: null },
      { title: "Art1", outOfPrint: true, genre: "Design", rating: 4.2, quantity: 2, start: "198506", end: "199107" },
      { title: "Art2", outOfPrint: true, genre: "Design", rating: 3.0, quantity: 3, start: "199502", end: "200512" },
      { title: "Wars", outOfPrint: true, genre: "Novel", rating: 4.6, quantity: 2, start: "198204", end: "200303" },
      { title: "Solo", outOfPrint: false, genre: "Poem", rating: 4.9, quantity: 2, start: "200703", end: null },
      { title: "Lost", outOfPrint: false, genre: "Web", rating: 3.2, quantity: 8, start: "199806", end: null },
      { title: "Ocean", outOfPrint: true, genre: "Magazine", rating: 4.3, quantity: 1, start: "200502", end: "202006" },
    ];
  
    const result = books.filter(book => { // param0은 문자열 비교, param1은 정수
        return param0 >= book.start &&
               (book.end === null || param0 <= book.end) &&
               book.quantity >= param1;
      }).sort((a, b) => b.rating - a.rating)
        .map(book => {
          const mark = book.outOfPrint ? "*" : "";
          return `${book.title}${mark}(${book.genre}) ${book.rating}`;
        }); // 절판된 책 param0이 유효기간 안이면 포함하고 *표시하기
    
    return result.length ? result.join(", ") : "!EMPTY"; //결과 없으면 엠티!
}

// 테스트
console.log(find("198402", 2));
console.log(find("200008", 6));
console.log(find("199004", 3));