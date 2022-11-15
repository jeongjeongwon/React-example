interface Shape{
  getArea(): number;
}

class Circle implements Shape{
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
      return this.radius * this.radius * Math.PI
  }
}

class Rectangle implements Shape{
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const Shape: Shape[] = [new Circle(5), new Rectangle(10, 5)];

Shape.forEach(Shape => {
  console.log(Shape.getArea());
})