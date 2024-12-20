// Task3:WriteaJavaScript program that creates a class called 'Shape' with a method to calculate the area.
//  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area
//  calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for
//  the 'Triangle' class
class shape{

    constructor(name){
        this.name = name;
        console.log("this is a " + this.name)
    }
     area(area){
        console.log("the area is : " + area);
     }
     
}

class circle extends shape{

    constructor(name){
        super(name);
    }
    
    area(radius){
        // return 3.14 * radius * radius;
        let area = 3.14 * radius * radius;
        super.area(area);
    }

}

class traingle extends shape{

    constructor(name){
        super(name);
    }

    area(base , height){
        let area = (0.5 * base * height);
        super.area(area);// calling parent class method
    }

}

let circle1 = new circle("circle");
circle1.area(5);

let traingle1 = new traingle("traingle");
traingle1.area(5, 10);
