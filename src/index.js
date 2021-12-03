class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            // 전체 조회
            if (board.name === this.boards[i].name) {
                // 만일 같은 이름이 있으면
                throw new Error('중복입니다'); // 에러 던지고 함수 종료
            }
        }
        board.registerCheck = true; // 등록 확인
        this.boards.push(board); // 아니면 board추가
    }

    findBoardByName(name) {
        for (let i = 0; i < this.boards.length; i++) {
            // 전체를 조회하고
            if (name === this.boards[i].name) {
                // {}=> *.name undefinde
                //! (name: '...')
                // 같은 이름이 있으면
                return this.boards[i]; // board.name 조회
            }
        }
    }
}

class Board {
    // constructor(name){ // => name 을 이용하여 외부에서 주어진 값을 받는데, 암것도 안함

    constructor(name) {
        // !name 데이터를 포함한다, null, 공백은 허용하지 않는다
        this.name = name;
        this.articles = [];

        this.registerCheck = false;

        if (name === '' || name === null) {
            //= > WIL 쓸거
            throw new Error('ㅠㅠㅠ ');
        }
    }

    //! !Site 에 추가된 Board만 사용 가능한 것으로 간주하며 사용 불가능한 Board에는 Article을 추가할 수 없다
    // !site에 추가된 board만 사용한다. article을 추가한다.

    // !불가능한 board는  오류로 던저버린다

    publish(article) {
        const date = new Date(); // 참조변수

        if (this.registerCheck == false) {
            throw new Error('ㅠㅠㅠ ');
        } // 에러 던지고 함수 종료
        article.id = `${this.name}-${Math.floor(Math.random() * 10)}`; // 0~1까지 난수 발생
        //

        article.createdDate = date.toISOString();
        article.registerCheck = true;
        this.articles.push(article); // 아니면 article추가
    }

    getAllArticles() {
        return this.articles;
    }
}
class Article {
    constructor(article) {
        this.subject = article.subject;
        this.content = article.content;
        this.author = article.author;
        this.id = ''; // 설정
        this.createdDate = '';

        this.comments = [];
        this.registerCheck = false;

        //! subject, content, author 를 포함한다. null,'' 는 포함되지 않는다.
        if (article.subject === '' || article.subject === null) {
            throw new Error('ㅠㅠㅠ ');
            //= > WIL 쓸거
        } else if (article.content === '' || article.content === null) {
            throw new Error('ㅠㅠㅠ ');
        } else if (article.author === '' || article.author === null) {
            throw new Error('ㅠㅠㅠ ');
        }
    }

    reply(comment) {
        const date = new Date(); // 참조변수

        if (this.registerCheck == false) {
            // 등록이 안되어 있으면
            throw new Error('ㅠㅠㅠ ');
        } // 에러 던지고 함수 종료
        comment.id = `${this.name}-${Math.floor(Math.random() * 10)}`; // 날짜 생성 함수

        comment.createdDate = date.toISOString();
        this.comments.push(comment); // comment 추가
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        this.content = comment.content;
        this.author = comment.author;

        if (comment.author === '' || comment.author === null) {
            //= > WIL 쓸거
            throw new Error('ㅠㅠㅠ ');
        } else if (comment.author === '' || comment.author === null) {
            throw new Error('ㅠㅠㅠ ');
        }
    }
}
module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
