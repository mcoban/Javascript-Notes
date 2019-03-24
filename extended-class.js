class Animal {
  constructor (name) {
    this.name = name
    this.thirst = 100
    this.belly = []
  }
  drink () {
    this.thirst -= 10
    return this.thirst
  }
  eat (food) {
    this.belly.push(food)
    return this.belly
  }
}

class Dog extends Animal {
  constructor (name, breed) {
    // super()
    // this.name = name
    super(name)
    this.breed = breed
  }
  havla () {
    console.log('hav hav')
  }
}

const karabas = new Dog('Karabaş', 'Kangal')
karabas.havla()