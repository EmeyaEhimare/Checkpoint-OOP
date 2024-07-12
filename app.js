class Product{

    constructor(id,name,price){
        this.id = id
        this.name= name
        this.price = price
    }
    
    totalprice() {
        console.log(Product.price * this.quantity)
    }
}

class Shoppingcartitem extends Product{
    constructor(product,quantity){
        super(product)
        this.quantity = quantity
    }

    
}

class Shoppingcart {
    constructor(){
        this.items = []
    }


    //methods
    // Get the total of items inside the cart
    totalItems(){
        console.log(this.items.length) 
    }



    //add items
    addItem(product, quantity = 1) {
            const existingItem = this.items.find(item => item.product.id === product.id);
            if (existingItem) {
            existingItem.quantity += quantity; 
            } else {
            this.items.push(new ShoppingCartItem(product, quantity));
            }
        }

    //remove item
        removeItem(product) {
            const itemIndex = this.items.findIndex(item => item.product.id === product.id);
            if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
            }
        }

    //display items
    displayCartItems() {
        if (this.items.length === 0) {
        console.log("Cart is empty.");
        } else {
        console.log("Cart Items:");
        for (const item of this.items) {
            console.log(`  - ${item.product.name} (x${item.quantity})`);
        }
        }
    }
    
    
    }


