import { get, post, requestBody } from "@loopback/rest";

export class PizzaController { 
    constructor() {}

    @get('/pizzas')
    get Pizzas(): Array<object> {

        return [
            {
                name: "Hawaii",
                topping: "pineapple"
            }
        ];
    }

    @post("/pizzas")
    requestPizza(@requestBody() pizza: any): object {
        pizza.requested = "yes";
        return pizza;
    }
}