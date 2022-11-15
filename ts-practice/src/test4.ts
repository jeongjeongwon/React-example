interface alpha {
  name: string;
  age?: number;
}

//interface beta{
//  name: string;
//  age: number;
//  color: string;
//}

interface beta extends alpha{
  color: string;
}

const a: alpha = {
  name: "정정원",
  age: 26
}

const b: beta = {
  name: "김일규",
  age: 26,
  color: "빨강"
}

