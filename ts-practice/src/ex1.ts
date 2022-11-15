function game_money(hour:number){
  let lether = hour * 45
  let silver = lether * 2
  let gold = silver / 4

  if (hour === 1) {
    const first = Math.floor(gold)
    const second = (silver - (first * 4)) * 8
    console.log("이날 획득한 gold의 갯수는 " + first + "개 입니다.")
    console.log("gold로 환산 할 수 없는 나머지 값의 코퍼는 모두 " + second + "개 입니다.")
  }

  if (hour = 8) {
    const Fthird = Math.floor(gold)
    const Sthird = (silver - (Fthird * 4)) * 8
    console.log("8시간 gold 획득량은 " + Fthird + "이고 나머지 copper은 " + Sthird + "입니다.")
  }
}

