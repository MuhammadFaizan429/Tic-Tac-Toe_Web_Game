let cells = document.getElementsByClassName("cell");
let resetbtn = document.getElementById("reset-btn");
let titleBar = document.getElementById("title-bar");

let turn = "X";
let cellsArray = Array.from(cells);

let winningsequence = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
   ]
// function for disabling cells after the Winner is declared 
   let disablingcells = () => {
    cellsArray.forEach(cell => {
        cell.style.pointerEvents = "none";
    })
   }

   let winnercheck = () => {
    for(let sequence of winningsequence){
      let var1 = cells[sequence[0]].innerText;
      let var2 = cells[sequence[1]].innerText;
      let var3 = cells[sequence[2]].innerText;

      if(var1 === "X" && var2 === "X" && var3 === "X"){
        titleBar.innerText = "Player X wins !!"
        disablingcells();
      } else if(var1 === "O" && var2 === "O" && var3 === "O"){
        titleBar.innerText = " Player O wins !!"
       disablingcells ();
      }
    }};



cellsArray.forEach(cell => {
    cell.addEventListener("click",() => {
        if(turn === "X"){
            cell.innerText = "X";
            titleBar.innerText = " Player O turn ";
            turn = "O";
        } else if(turn === "O"){
            cell.innerText = "O";
            titleBar.innerText = " Player X turn ";
            turn = "X";
        }
        cell.style.pointerEvents = "none";
        winnercheck();
    })
})


resetbtn.addEventListener("click" ,() => {
      cellsArray.forEach(cell => {
        cell.innerText = "";
      }) 
      titleBar.innerText = "Player X turn";
      turn = "X";
});



