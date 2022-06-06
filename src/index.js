class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find(e => e.name === board.name))
            throw new Error("Error!");
        board.addBoard = true;
        return this.boards.push(board);
    }

    findBoardByName(board) {
        return this.boards.find(e => e.name === board);
    }

}

class Board {
    constructor(name) {
        if (!name) throw new Error("Error!");
        this.name = name;
        this.articles = [];
    };

    publish(article) {
        if (!this.addBoard) throw new Error("Erorr!");
        article.publish = true;
        article.id = `${this.name}-${Math.random()}`
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    };

    getAllArticles() {
        return this.articles;
    };
}

class Article {
    constructor(article) {
        const { subject, content, author } = article
        if (!subject || !content || !author) throw new Error("Error!");
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    };

    reply(comment) {
        if (!this.publish) throw new Error("Error!");
        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);

    }

    getAllComments() {
        return this.comments;
    }
}


class Comment {
    constructor(comment) {
        const { content, author } = comment;
        this.content = content;
        this.author = author;
        if (!content || !author) throw new Error("Error!");
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};