function* listPeople () {
  yield 'ali'
  yield 'veli'
  yield 'deli'
}

const people = listPeople()
console.log(people.next())
console.log(people.next())
console.log(people.next())