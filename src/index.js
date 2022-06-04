class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((exisBoard) => exisBoard.name === board.name)) {
            throw new Error('이름이 같으면 안됨');
        }
        this.boards.push(board);
    }

    findBoardByName() {
        return this.boards.find((board) => board.name);
    }
}

class Board {
    constructor(boardName) {
        if (boardName === '' || boardName === null) {
            throw new Error('보드이름을 넣으시오');
        }
        this.name = boardName;
        this.articles = [];
    }
    publish(board) {
        if (Site.findBoardByName.find((exisBoard) => exisBoard !== board)) {
            throw new Error('사이트에 보드가 없음');
        }
        this.articles.push(article);
    }

    // - `Site` 에 추가된 `Board`만 사용 가능한 것으로 간주하며 사용 불가능한 `Board`에는 `Article`을 추가할 수 없다.
    // - `Board`에 `Article`을 추가할 때 `Article`에 ID를 자동 생성해서 부여해야 한다.
    //     - 규칙은 `${board.name}-${랜덤 값}` 를 따른다.
    // - `Board`에 `Article`을 추가할 때 `Article`에 작성 일자가 들어가야 한다.
    //     - 저장되는 형식은 `[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)`을 따른다. ([참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString))
    // - `Article` 은 n개 이상 추가 할 수 있다.
    // - 작성된 `Article` 목록을 조회 할 수 있어야 한다.
}

class Article {
    constructor(subject, content, author) {
        this.subject = subject;
        this.content = content;
        this.author = author;
    }
    // - `Article`은 `subject`, `content`, `author` 3개의 데이터를 포함해야 하며 `null` 또는 빈 문자열(`''`)은 허용하지 않는다.
    // - `Board`에 추가된 `Article`만 사용 가능한 것으로 간주하며 사용 불가능한 `Article`에는 `Comment`를 추가할 수 없다.
    // - `Article`에 `Comment`를 추가할 때 `Comment`에 작성 일자가 들어가야 한다.
    //     - 저장되는 형식은 `[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)`을 따른다. ([참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString))
    // - `Comment`는 n개 이상 추가 할 수 있다.
    // - 작성된 `Comment` 목록을 조회 할 수 있어야 한다.
}

class Comment {
    // constructor(content, author) {
    //     this.content = content;
    //     this.author = author;
    // }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
