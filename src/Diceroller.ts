function dicerollerSubmit (diceString: String): Array<DiceRoll> {
  let strings = diceString.split(',')
  let rolls: Array<DiceRoll> = []

  console.log(strings)

  strings.forEach((item) => {
    let roll = parseDiceString(item)

    rolls.push(roll)
  })

  return rolls
}

function rollDice (min: number = 1, max: number = 6, amount: number = 1): number {
  let total: number = 0
  let currentNum: number = 0

  for (let i = 0; i < amount; i++) {
    currentNum = Math.floor(Math.random() * max) + min
    total += currentNum
  }

  return currentNum
}

export { dicerollerSubmit, rollDice }

// Code is based from gefjon/dice@github
// Had to adapt as I was getting an error from their library
function parseDiceString (str: string): DiceRoll {
  str = str.replace(/ /g, '')

  let re = /(\d*)[dD](\d+)([+-]\d+)?/
  let res = re.exec(str)
  if (!res) { throw new Error(`Wanted a dice string but was passed '${str}'`) }

  let [, count, size, modifier] = res

  return new DiceRoll(
    count ? parseInt(count) : 1,
    parseInt(size),
    parseInt(modifier)
  )
}

class DiceRoll {
  public count: number
  public size: number
  public mod: number

  constructor (count: number, size: number, mod: number) {
    this.count = count
    this.size = size
    this.mod = mod
  }
}
