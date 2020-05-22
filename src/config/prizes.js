export function getPrizeAmount (handRankKey) {
  const prizes = JSON.parse(localStorage.getItem('prizes'))
  return prizes[handRankKey]
}

export default {
  ROYAL_FLUSH: 2500,
  STRAIGHT_FLUSH: 250,
  FOUR_OF_A_KIND: 100,
  FULL_HOUSE: 50,
  FLUSH: 20,
  STRAIGHT: 15,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  PAIR: 2,
  HIGH_CARD: 0
}
