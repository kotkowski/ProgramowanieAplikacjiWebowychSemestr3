import {Cell} from "./cell";

export class Board{
    cells: Cell[];
    currentSymbol: number;
    winner: HTMLElement;
    flag: boolean;

    constructor(size:number, playerSymbol: number){
        this.cells = new Array(size);
        this.currentSymbol = playerSymbol;
        this.winner = <HTMLElement>document.getElementById("winner");
        this.flag = false;
    let table =
<HTMLTableElement>document.getElementById("game");
 let i = 0;
 for (let r = 0; r < size; r++) {
 let row = table.insertRow(r);
 for (let c = 0; c < size; c++) {
 let cell = <HTMLTableDataCellElement>row.insertCell(c);
 cell.className = 'cell';
 const newCell = new Cell(cell);
 this.cells[i] = newCell;
 cell.addEventListener("click", () =>
this.makeMove(newCell), false);
 i++;

 }}}
 

 makeMove(cell: Cell): void {
    if(cell.setCellValue(this.currentSymbol) && this.flag == false){
        switch(this.currentSymbol){
            case -1: this.currentSymbol = 1;break;
            case 1: this.currentSymbol = -1;break;
            default: this.currentSymbol = 0;break;
        }
        this.checkForWin();
    }
    
    };
   
checkForWin():void{
    for(let i=0; i <= this.cells.length; i++){
        
    }
    if(this.cells[0].cellValue == this.cells[1].cellValue &&  this.cells[0].cellValue === this.cells[2].cellValue && this.cells[0].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " + this.cells[0].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[3].cellValue == this.cells[4].cellValue &&  this.cells[3].cellValue === this.cells[5].cellValue && this.cells[3].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[3].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[6].cellValue == this.cells[7].cellValue &&  this.cells[6].cellValue === this.cells[8].cellValue && this.cells[6].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[6].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[0].cellValue == this.cells[4].cellValue &&  this.cells[0].cellValue === this.cells[8].cellValue && this.cells[0].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[0].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[2].cellValue == this.cells[4].cellValue &&  this.cells[2].cellValue === this.cells[6].cellValue && this.cells[2].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[2].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[0].cellValue == this.cells[3].cellValue &&  this.cells[0].cellValue === this.cells[6].cellValue && this.cells[0].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[0].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[1].cellValue == this.cells[4].cellValue &&  this.cells[1].cellValue === this.cells[7].cellValue && this.cells[1].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[1].getCellSymbol();
        this.flag = true;
    }
    if(this.cells[2].cellValue == this.cells[5].cellValue &&  this.cells[2].cellValue === this.cells[8].cellValue && this.cells[2].cellValue != 0)
    {
        this.winner.textContent = "Zwycięża: " +  this.cells[2].getCellSymbol();
        this.flag = true;
    }
}

 }

 /*
0,1,2
3,4,5
6,7,8
0,4,8
2,4,6
0,3,6,
1,4,7,
2,5,8
 */