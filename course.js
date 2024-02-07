// class FourSideShape {
// 	constructor(side1, side2, side3, side4) {
// 		this.side1 = side1;
// 		this.side2 = side2;
// 		this.side3 = side3;
// 		this.side4 = side4;
// 	}
// 	perimeter() {
// 		return this.side1 + this.side2 + this.side3 + (this.side4 ? this.side4 : 0);
// 	}
// }

// class Triangle extends FourSideShape {
// 	constructor(side1, side2, side3) {
//         super(side1,side2,side3,null)
//     }
//     printTriangle() {
// 		console.log("Triangle with sides:", this.side1, this.side2, this.side3);
// 		console.log("Perimeter:", this.perimeter());
// 		console.log("Area:", this.area());
// 	}
//     	area() {
// 		let s = this.perimeter() / 2;
// 		return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
// 	}
// }



// let triangle = new Triangle(3, 4, 5);
// console.log("Perimeter of triangle:", triangle.perimeter());
// console.log("Area of triangle:", triangle.area());
// triangle.printTriangle();

class FourSideShape {
	constructor(side1, side2, side3, side4) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.side4 = side4;
	}
	perimeter() {
		return this.side1 + this.side2 + this.side3 + (this.side4 ? this.side4 : 0);
	}
}

class Triangle extends FourSideShape {
	constructor(side1, side2, side3) {
        super(side1,side2,side3,null)
    }
    printTriangle() {
		console.log("Triangle with sides:", this.side1, this.side2, this.side3);
		console.log("Perimeter:", this.perimeter());
		console.log("Area:", this.area());
	}
    	area() {
		let s = this.perimeter() / 2;
		return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
	}
}



let triangle = new Triangle(3, 4, 5);
console.log("Perimeter of triangle:", triangle.perimeter());
console.log("Area of triangle:", triangle.area());
triangle.printTriangle();