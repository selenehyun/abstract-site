class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        try {
            if (this.boards.find((item) => item['name'] === board.name))
                throw new Error('이름이 같은 board가 있습니다.');
            board.added = true;
            this.boards.push(board);
        } catch (error) {
            throw error;
        }
    }

    findBoardByName(name) {
        return this.boards.find((item) => item['name'] === name);
    }
}

class Board {
    constructor(name) {
        this.name = name;
        this.articles = [];
        this.added = false;

        try {
            if (name === '' || name === null) throw new Error('빈 문자열이나 null은 안됩니다.');
        } catch (error) {
            throw error;
        }
    }

    publish(article) {
        try {
            if (this.added) {
                article.id = this.name + '-' + Math.random();
                article.published = true;
                this.articles.push(article);
            } else {
                throw new Error('Site에 추가된 Board에서만 Article을 추가할 수 있습니다.');
            }
        } catch (error) {
            throw error;
        }
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        try {
            if (article['subject'] === '' || article['subject'] === null)
                throw new Error('빈 문자열이나 null은 안됩니다.');
            if (article['content'] === '' || article['content'] === null)
                throw new Error('빈 문자열이나 null은 안됩니다.');
            if (article['author'] === '' || article['author'] === null)
                throw new Error('빈 문자열이나 null은 안됩니다.');
        } catch (error) {
            throw error;
        }
        this.subject = article['subject'];
        this.content = article['content'];
        this.author = article['author'];
        this.createdDate = new Date().toISOString();
        this.published = false;
        this.comments = [];
    }

    reply(comment) {
        try {
            if (this.published) {
                this.comments.push(comment);
            } else {
                throw new Error('Board에 추가된 Article에서만 Comment를 추가할 수 있습니다.');
            }
        } catch (error) {
            throw error;
        }
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        try {
            if (comment['content'] === '' || comment['content'] === null)
                throw new Error('빈 문자열이나 null은 안됩니다.');
            if (comment['author'] === '' || comment['author'] === null)
                throw new Error('빈 문자열이나 null은 안됩니다.');
        } catch (error) {
            throw error;
        }
        this.content = comment['content'];
        this.author = comment['author'];
        this.createdDate = new Date().toISOString();
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};