// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
// 1) appends a cat to the end of the cats array
    return cats.push(name)
}
function destructivelyPrependCat(name) {
// 2) prepends a cat to the beginning of the cats array
    return cats.unshift(name)
}
function destructivelyRemoveLastCat() {
// 3) removes the last cat from the cats array
     cats.pop()
}
function destructivelyRemoveFirstCat() {
// 4) removes the first cat from the cats array
     cats.shift()
}
function appendCat(name) {
// 5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    let copyCats = [...cats, name]
    return copyCats
}
function prependCat(name) {
// 6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    let copyCats = [name, ...cats]
    return copyCats
}
function removeLastCat(){
// 7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat() {
// 8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    return cats.slice(1)
}
