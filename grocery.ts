class Grocery {
    name: string;
    quantity: number; 
    brand: string;
    
    constructor(name:string, quantity:number, brand:string){
        this.name = name; 
        this.quantity = quantity;
        this.brand = brand; 
    }
}

let milk = new Grocery('2 percent milk', 3, 'kirkland');
let bread = new Grocery('White bread', 7, 'Wonder');
let eggs = new Grocery('Brown eggs', 3, 'Eggland');

let groceryList: Grocery[] = []; 

groceryList.push(milk);
groceryList.push(bread);
groceryList.push(eggs); 

groceryList.forEach((element, index, array) => {
    console.log(groceryList);
});



