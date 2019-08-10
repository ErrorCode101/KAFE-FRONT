export class UserCreateDTO{
    username : string;
    firstName: string;
    lastName : string;
    password : string;
    restaurantId: string;
    roles: string[] = ["restaurant_user"];
}