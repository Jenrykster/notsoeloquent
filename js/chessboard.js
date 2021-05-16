let boardSize = 8;
let board = ""
let column = 1
for(let pos = 1; pos <= boardSize * boardSize; pos++){
    pos % 2 == 0 ? board += " " : board += "#"
    if(pos % boardSize == 0 && pos != 0){
        console.log(pos);
        board += "\n"
        column++ ;
        if(column % 2 == 0) board += " ";
    }
}
console.log(board);