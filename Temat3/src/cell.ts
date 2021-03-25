export class Cell{
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell: HTMLElement){
        this.htmlElement = cell;
        this.cellValue = 0;
    }

    getCellSymbol():string{
        switch(this.cellValue){
            case -1: return "O";
            case 1: return "X";
        }
    }
    setCellValue(value:number){
        // TODO: napisz samemu metodę, która ustawia w
        // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko
        // to wartość -1, krzyżyk to wartość 1, a 0 (zero)
        // oznacza pole nieustawione.
        if(this.cellValue == 0)
        {
            this.cellValue = value;
            switch(value){
                case 1: this.htmlElement.textContent = "X"; break;
                case -1: this.htmlElement.textContent = "O"; break;
                default: this.htmlElement.textContent = "ERR"; break;
                
            }
            return true;
        }
        return false;
        
    };
}