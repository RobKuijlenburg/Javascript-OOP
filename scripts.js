const getCircle1 = document.getElementById('circle1');
const getCircle2 = document.getElementById('circle2');
const getCircle3 = document.getElementById('circle3');
const getSquare1 = document.getElementById('square1');
const getSquare2 = document.getElementById('square2');
const getSquare3 = document.getElementById('square3');
const getRect1 = document.getElementById('rect1');
const getRect2 = document.getElementById('rect2');
const getRect3 = document.getElementById('rect3');
const getName = document.getElementById('nameC');

class Shape {
    constructor(color, name) {
        this._color = color;
        this._name = name;
    }
    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

}

class Circle extends Shape {
    constructor(radius, color, name) {
        super(color, name);
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return (this.radius * this.radius) * 3.14;
    }
}


class Square extends Shape {
    constructor(size, color, name) {
        super(color, name);
        this._size = size;
    }

    get size() {
        return this._size;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.size * 4;
    }
}

class Rectangle extends Shape {
    constructor(width, height, color, name) {
        super(color, name);
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}


const circle1 = new Circle(1.5, 'blue', 'one');
const circle2 = new Circle(10, 'red', 'two');
const circle3 = new Circle(20, 'yellow', 'three');

const square1 = new Square(2, 'black', 'four');
const square2 = new Square(5, 'green', 'five');
const square3 = new Square(100, 'orange', 'six');


const rectangle1 = new Rectangle(2, 5, 'black', 'seven');
const rectangle2 = new Rectangle(5, 10, 'green', 'eight');
const rectangle3 = new Rectangle(100, 100, 'orange', 'nine');


function println() {
    getCircle1.innerHTML = circle1.area;
    getCircle2.innerHTML = circle2.area;
    getCircle3.innerHTML = circle3.area;
    getRect1.innerHTML = rectangle1.area;
    getRect2.innerHTML = rectangle2.area;
    getRect3.innerHTML = rectangle3.area;
    getSquare1.innerHTML = square1.area;
    getSquare2.innerHTML = square2.area;
    getSquare3.innerHTML = square3.area;
    getName.innerHTML = circle1.name;
}

println();