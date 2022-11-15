interface Shape {
  volume(): number
}

class cone_volume implements Shape{
  Radius: number;
  Height: number;
  constructor(radius: number, Height: number) {
    this.Radius = Math.floor(Math.random() * (100 - 1) + 1)
    this.Height = Math.floor(Math.random()*(100 - 1) + 1)
  }
  volume() {
      return (Math.PI * (this.Radius*this.Radius) * this.Height) / 3
  }
}