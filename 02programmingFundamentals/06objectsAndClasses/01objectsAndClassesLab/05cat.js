function catFactory(arr) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, ${this.age} says Meow`);
        }
    }

    for (let info of arr) {
        let [catName, catAge] = info.split(" ");
        let cat = new Cat(catName, catAge)
        cat.meow()
    }
}
catFactory(['Mellow 2', 'Tom 5'])