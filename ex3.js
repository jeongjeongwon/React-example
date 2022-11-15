/**
 * !거스름돈 계산하기
 * !함수 이름은 change_money
 * !필요한 정보 : 지불 금액, 총 구입 금액, 거스름돈(지불금액 - 총 구입 금액)
 * !함수 단위는 오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원
 * ?총 고른 물건 값은 34830원
 * ?받아야 되는 거스름돈 65200원? 계산해 보니까 65170원 인데?
 * ?천원짜리와 오천원짜리는 모두 소진된 상태
 * *중요 조건 : 다른사람도 계산 할 수 있도록 기능 구현, 다른 화폐가 소진했을때도 계산가능 하도록 제작
 */

//* 각 화패 단위 기록

  const five_Million = 50000
  const one_Million= 10000
  const five_Thousand= 5000
  const one_Thousand= 1000
  const five_Hundred= 500
  const one_Hundred= 100
  const fifty= 50
  const ten= 10

/**
 * *totaltax는 지불한 금액, totalpurchase는 총 구매 금액, penny는 거스름돈
 * *다른사람의 결제를 위해 거스름돈과 혹시 부족하다면 부족한 금액에 대한 값 출력
 * *돈의 매수 무식하게 탐색(반복되는 부분이 많다)
 */
function change_money (a, b) {
  let totaltax = a
  let totalpurchase = b
  let penny = totaltax - totalpurchase
  if (penny >= 0) {
    console.log("받을 거스름돈은 " +  penny + "원 입니다.")
  } else {
    console.log("더 지불할 금액은 " + Math.abs(penny) + "원 입니다.")
  }
  const five_Millioncost = Math.floor(penny / five_Million)
  penny = penny - five_Million* five_Millioncost
  console.log(`5만원 :  ${five_Millioncost}`)
  const one_Millioncost = Math.floor(penny / one_Million)
  penny = penny - one_Million* one_Millioncost
  console.log(`1만원 :  ${one_Millioncost}`)
  const five_Hundredcost = Math.floor(penny / five_Hundred)
  penny = penny - five_Hundred* five_Hundredcost
  console.log(`500원 :  ${five_Hundredcost}`)
  const one_Hundredcost = Math.floor(penny / one_Hundred)
  penny = penny - one_Hundred* one_Hundredcost
  console.log(`100원 :  ${one_Hundredcost}`)
  const fiftycost = Math.floor(penny / fifty)
  penny = penny - fifty* fiftycost
  console.log(`50원 :  ${fiftycost}`)
  const tencost = Math.floor(penny / ten)
  penny = penny - ten* tencost
  console.log(`10원 :  ${tencost}`)
}

change_money(100000, 34830, (one_Million))

/**
 * 개인 정리 : 중요점은 최소한 각 큰 수의 화폐가 최대한 줄수 있는 만큼 주고 다음으로 넘겨야함
 * 해당 화패가 없을 경우 다음으로 넘길수 있어야함
 * 반복문에 조건문을 사용하여 작성해야할까?
 * 반복문 사용해서 가능 할거 같은데 오류가 가득.. 이건 연습이 필요할것 같음
 * 따로 부족한 금액에 대한 처리 하는 함수 필요! 아직 미구현(그냥 무식한 방법으로 처리해서...)
 */