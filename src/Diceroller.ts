export default function dicerollerSubmit (diceString: String): Array<DiceRoll> {
  let strings = diceString.split(',')
  let rolls: Array<DiceRoll> = []

  console.log(strings)

  strings.forEach((item) => {
    let roll = parseDiceString(item)

    rolls.push(roll)
  })

  return rolls
}

// Code is based from gefjon/dice@github
// Had to adapt as I was getting an error from their library
function parseDiceString (str: string): DiceRoll {
  str = str.replace(/ /g, '')

  let re = /(\d*)[dD](\d+)([+-]\d+)/
  let res = re.exec(str)
  if (!res) { throw new Error(`Wanted a dice string but was passed ${str}`) }

  let [, count, size, modifier] = res

  return new DiceRoll(
    count ? parseInt(count) : 1,
    parseInt(size),
    parseInt(modifier)
  )
}

class DiceRoll {
  public count: Number
  public size: Number
  public mod: Number

  constructor (count: Number, size: Number, mod: Number) {
    this.count = count
    this.size = size
    this.mod = mod
  }
}
