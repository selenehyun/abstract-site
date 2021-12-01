const e = require("express");

class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board){
        for(let i =0 ;i<this.boards.length;i++){
            if(this.boards[i].name === board.name){
                throw new Error('같은이름은 추가 할 수 없습니다.');
            }
        }
        board.exist = true;
        this.boards.push(board);
    }
    findBoardByName(noticeBoard){
        for(let i =0 ;i<this.boards.length; i++){
            if(this.boards[i]['name']===noticeBoard){
                return this.boards[i]
            }
        }
    }
}



class Board {
   constructor(name){
       if(name !== null && name !== ''){
           this.name = name;
           this.exist = false;
           this.article = [];
       }else{
           throw new Error(`null과 ' ' 값은 허용하지 않습니다.`);
       }
   }
   publish(article){
       if(!this.exist){ //false
           throw new Error('Site 에 추가된 Board만 사용 가능합니다.');
       }else{    //true
            article.id = `${this.name}-`//${board.name}-${랜덤 값} ??
            const date = new Date();
            article.createdDate = date.toISOString();
            //  console.log(article.createdDate);
            article.exist = true;
            this.article.push(article);
       }
   }
   getAllArticles(){
       return this.article;
   }
}

class Article {
    constructor(data){
        const subject = data['subject'];
        const content = data['content'];
        const author = data['author'];
        //console.log(subject, content, author)
        if(subject !==null && subject!==''||content !==null && content!=='' || author !==null && author!==''){
            this.subject = subject;
            this.content = content;
            this.author = author;
            this.exist =false;
            this.comment = [];
        }
        else{   
            throw new Error(`null 과 ''은 혀용하지 않습니다.`)
        }
    }
    reply(reply){
        console.log(reply)
        if(!this.exist){
            throw new Error('사용 불가능한 Article에는 Comment를 추가할 수 없다')
        }else{
            reply.createdDate = new Date().toISOString();
            this.comment.push(reply);
        }
    }
    getAllComments(){
        return this.comment;
    }
}

class Comment {
    constructor(review){
        const comment = review['content'];
        const writer = review['author']
        console.log(comment, writer);
        if(comment !== null && comment !== '' || writer !==null && writer !==''){
            this.comment = comment;
            this.writer = writer;
        }else{
            throw new Error(`null 과 ''은 혀용하지 않습니다.`)
        }
    }
    
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
