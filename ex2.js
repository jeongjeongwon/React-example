//const topshoot = 3;
//const midshoot = 2;
//const freeshoot = 1;

//const playerA = 16;
//const topplayer = topshoot * playerA
//
////const finalscore = 84;
//const Remainder = finalscore - topplayer;
//
//const ather = Remainder / 2
//const midnum = ather / midshoot;
//const freenum = ather / freeshoot * 2
//
//console.log(topplayer)
//console.log(Remainder)
//console.log(midnum)
//console.log(freenum)

const topshoot = 3;
const midshoot = 2;
const freeshoot = 1
const finalscore = 84;

const score_analysis = (shooting, midpercent, freepercent) => {
  const playerA = topshoot * shooting;
  const Remainder = finalscore - playerA;
  const midscore = Remainder / midpercent;
  const freescore = Remainder / freepercent;
  if (Remainder !== 0 && midscore === freescore) {
    const midshooting = midscore / midshoot;
    const freeshooting = freescore / freeshoot * 2
    console.log("2점슛은 총 " + midshooting + " 번 성공하였습니다")
    console.log("1점슛은 총 " + freeshooting + " 번 시도하였고 " + freeshooting/2 + " 번 성공하였습니다")
  }
}

score_analysis(16, 2, 2)