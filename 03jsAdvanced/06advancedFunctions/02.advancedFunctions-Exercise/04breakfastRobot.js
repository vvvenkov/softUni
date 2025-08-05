function solution(str) {
    let carbohydrate = 0;
    let flavour = 0;
    let protein = 0;
    let fat = 0;

    return function (str) {
        let [command, element, quantity] = str.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            switch (element) {
                case 'carbohydrate': carbohydrate += quantity; break;
                case 'flavour': flavour += quantity; break;
                case 'protein': protein += quantity; break;
                case 'fat': fat += quantity; break;
            }
            return "Success"
        }

        if (command === 'prepare') {
            let missingIngredient = '';

            if (element === 'apple') {                          // Apple = 1 carbohydrate & 2 flavour 
                if ((1 * quantity) > carbohydrate) {
                    missingIngredient = 'carbohydrate'
                    return error();
                }
                if ((2 * quantity) > flavour) {
                    missingIngredient = 'flavour'
                    return error();
                }

                carbohydrate -= 1 * quantity;
                flavour -= 2 * quantity;
                return 'Success';

            } else if (element === 'lemonade') {             // Lemonade = 10 carbohydrate & 20 flavour 
                if ((10 * quantity) > carbohydrate) {
                    missingIngredient = 'carbohydrate'
                    return error();
                }
                if ((20 * quantity) > flavour) {
                    missingIngredient = 'flavour'
                    return error();
                }

                carbohydrate -= 10 * quantity;
                flavour -= 20 * quantity;
                return 'Success';

            } else if (element === 'burger') {                  // Burger = 5 carbohydrate & 7 fat
                if ((5 * quantity) > carbohydrate) {
                    missingIngredient = 'carbohydrate';
                    return error();
                }
                if ((7 * quantity) > fat) {
                    missingIngredient = 'fat';
                    return error();
                }
                if ((3 * quantity) > flavour) {
                    missingIngredient = 'flavour';
                    return error();
                }

                carbohydrate -= 5 * quantity;
                fat -= 7 * quantity;
                flavour -= 3 * quantity;
                return 'Success';

            } else if (element === 'eggs') {                  // Eggs = 5 protein, 1 fat & 1 flavour 
                if ((5 * quantity) > protein) {
                    missingIngredient = 'protein';
                    return error();
                }
                if (quantity > fat) {
                    missingIngredient = 'fat';
                    return error();
                }
                if (quantity > flavour) {
                    missingIngredient = flavour;
                    return error();
                }

                protein -= 5 * quantity;
                fat -= quantity;
                flavour -= quantity
                return 'Success';
            } else if (element === 'turkey') {              // Turkey = 10 protein, 10 carbohydrate, 10 fat * 10 flavour 
                if ((10 * quantity) > protein) {
                    missingIngredient = 'protein';
                    return error();
                }
                if ((10 * quantity) > carbohydrate) {
                    missingIngredient = 'carbohydrate';
                    return error();
                }
                if ((10 * quantity) > fat) {
                    missingIngredient = 'fat';
                    return error();
                }
                if ((10 * quantity) > flavour) {
                    missingIngredient = 'flavour';
                    return error();
                }
                
                protein -= 10 * quantity;
                carbohydrate -= 10 * quantity;
                fat -= 10 * quantity;
                flavour -= 10 * quantity;
                return 'Success';
            }

            function error() {
                return `Error: not enough ${missingIngredient} in stock`
            }
        } else if (command === 'report') {
            return (`protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`);
        }
    }
}
let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4")); 
