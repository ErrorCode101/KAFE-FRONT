export default interface Item{
    id:string;
    itemId:string;
    name:string;
    description:string;
    price:number;
    readyInMinutes:number;
    likes: number;
    imageUrl: string;
    savings: string;
    reviews: string[];
    ingredients: string[];
}