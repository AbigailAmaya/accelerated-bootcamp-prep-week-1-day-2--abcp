function addElementToBeginningOfArray(array, element) {
// add the element to the beginning of the array without mutating the array
return[element,...array]

}


function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
array.shift(element)
return array
}

function removeElementFromBeginningOfArray(array, element) {
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
array.push(element)
return array
}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
}
