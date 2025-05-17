"use strict";
{
    class Person {
        getSleep() {
            console.log("Sleep 8 Hours");
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log("Sleep 6 Hours");
        }
    }
    class HR extends Person {
        getSleep() {
            console.log("Sleep 4 Hours");
        }
    }
    const getSleep = (p) => {
        p.getSleep();
    };
    // const e1 = new Person();
    // e1.getSleep();
    // const e2 = new Developer();
    // e2.getSleep();
    // const e3 = new HR();
    // e3.getSleep();
}
{
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(w, h) {
            super();
            this.w = w;
            this.h = h;
        }
        getArea() {
            return this.w * this.h;
        }
    }
    const getShapeArea = (shape) => {
        console.log(shape.getArea());
    };
    const s1 = new Shape();
    getShapeArea(s1);
    const s2 = new Circle(10);
    getShapeArea(s2);
    const s3 = new Rectangle(10, 20);
    getShapeArea(s3);
}
