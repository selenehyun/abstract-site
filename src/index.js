class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (board.name === this.boards[i].name) {
                throw new Error('중복입니다');
            }
        }
        this.boards.push(board);
    }

    findBoardByName(name) {
        for (let i = 0; i < this.boards.length; i++) {
            if (name === this.boards[i].name) {
                return this.boards[i];
            }
        }
    }
}

class Board {}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
