class Circle {
    constructor(radius, color, name) {
        this.radius = radius;
        this._color = color;
        this._name = name;
    }

    get color() {
        return this.color;
    }

    get name() {
        return this.name;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return (this.radius * this.radius) * 3.14; 
    }
}


class Square {
    constructor(size, color, name) {
        this.size = size;
        this.color = color;
        this.name = name;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.size * 4;
    }
}


const circle1 = new Circle(1.5, 'blue', 'one');
const circle2 = new Circle(10, 'red', 'two');
const circle3 = new Circle(20, 'yellow', 'three');

window.onload = function(){
    document.createElement('div').innerText = circle1.area;
}


console.log(circle1.area);
console.log(circle2.area);
console.log(circle3.area);

const square1 = new Square(2, 'black', 'four');
const square2 = new Square(5, 'green', 'five');
const square3 = new Square(100, 'orange', 'six');

console.log(square1.area);
console.log(square2.area);
console.log(square3.area);