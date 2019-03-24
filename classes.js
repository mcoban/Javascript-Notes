function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

let kopek = new Dog('Karabaş', 'Kangal')
console.log(kopek)

Dog.prototype.havla = function () {
  console.log('Hav hav')
}

kopek.havla()


class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  miyavla () {
    console.log('Miyav')
  }
  get description () {
    return `Hello my name is ${this.name} and I am ${this.breed} type of cat`
  }
}

let kedi = new Cat('Lili', 'Van Kedisi')
console.log(kedi)
kedi.miyavla()
console.log(kedi.description)