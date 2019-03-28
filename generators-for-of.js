function* meyveler() {
  yield 'elma'
  yield 'armut'
  yield 'kira'
  yield 'vişne'
}

let _m = meyveler()

for (meyve of _m) {
  console.log(meyve)
}