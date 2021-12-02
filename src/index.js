class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) { //전체 조회
            if (board.name == this.boards[i].name) { // 만일 같은 이름이 있으면 
                throw new Error('중복입니다'); // 에러 던지고 함수 종료
            }
        }
        this.boards.push(board); // 아니면 추가 
    }

    findBoardByName(name) {
        for (let i = 0; i < this.boards.length; i++) { // 전체를 조회하고
            if (name == this.boards[i].name) { // 같은 이름이 있으면
                return this.boards[i]; //board.name 조회 
            }
        }
    }
}

class Board {
    constructor(name) {
        this.name = name;
    }

    //Site 에 추가된 Board만 사용 가능한 것으로 간주하며 사용 불가능한 Board에는 Article을 추가할 수 없다
    // 전체를 조회 한다 ->  추가된 Board인지 확인한다 -> Article을 추가한다 
    //  아닌것은 에러 던진다..
    publish() { 
      
    }

    getAllArticles()
}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
