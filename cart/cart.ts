interface Item {
    id: string;
    name: string;
    price: number;
    description: string;
}

interface User {
    id: string;
    name: string;
    age: BigInteger;
    cart: array [];
}

function createUser(name: string, age: BigInteger): User {
    const user: User = {
        id: uuid(),
        name,
        age,
        cart: [],
      };
      return user;
    }
    

function createItem(name: string, price: BigInteger, description: string); Item {
    const item: Item = {
        id: uuid(),
        name,
        price,
        description,
      };
      return item;
    }
    function addToCart(item: Item, user: User): void {
        user.cart.push(item);
    }
    
    function removeFromCart(item: Item, user: User): void {
        user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
    }
    
    function removeQuantityFromCart(item: Item, quantity: number, user: User): void {
        const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
        if (index !== -1) {
        if (user.cart[index].quantity <= quantity) {
            user.cart.splice(index, 1);
        } else {
            user.cart[index].quantity -= quantity;
        }
        }
    }

    function cartTotal(user: User): number {
        let total = 0;
        for (const item of user.cart) {
          total += item.price;
        }
        return total;
      }
      
      function printCart(user: User): void {
        console.log(`User: ${user.name}'s Cart`);
        for (const item of user.cart) {
          console.log(`Item: ${item.name}, Price: ${item.price}`);
        }
      }
const user = createUser('CynCity', 18);

const itemComputer = createItem('Item Computer', 100, 'Beautiful Sony Computer');
const itemMouse = createItem('Item Mouse', 15, 'Ergonomic Mouse');
const itemMonitor = createItem('Item Monitor', 300, 'Nitro Monitor');

addToCart(itemComputer, user);
console.log('User cart after adding Computer:');
printCart(user);
console.log('Total: 100', cartTotal(user));

addToCart(itemMouse, user);
addToCart(itemMouse, user);
addToCart(itemMouse, user);
console.log('User cart after adding 3 Mice:');
printCart(user);
console.log('Total:45', cartTotal(user));

addToCart(itemMonitor, user);
addToCart(itemMonitor, user);
addToCart(itemMonitor, user);
console.log('User cart after adding 3 Monitors :');
printCart(user);
console.log('Total:900', cartTotal(user));

removeFromCart(itemMouse, user);
console.log('User cart after removing Mouse:');
printCart(user);
console.log('Total:30', cartTotal(user));

removeQuantityFromCart(itemMonitor, 2, user);
console.log('User cart after removing 2 Monitors:');
printCart(user);
console.log('Total:300', cartTotal(user));







      