const onehour = 45

const game_money = (silver, copper, time) => {
  const hoursilver = (onehour * silver)
  const first = Math.floor(hoursilver / 4)
  const second = (hoursilver - (first * 4)) * copper
  const totalsilver = hoursilver * time
  const Fthird = Math.floor(totalsilver / 4)
  const Sthird = (totalsilver - (Fthird * 4)) * copper
  console.log("gold로 환산 할 수 없는 나머지 값의 코퍼는 모두 " + second + "개 입니다.")
  console.log("이날 획득한 gold의 갯수는 " + first + "개 입니다.")
  console.log("8시간 gold 획득량은 " + Fthird + "이고 나머지 copper은 " + Sthird + "입니다.")
}

game_money(2, 8, 8)