var recipes = {
  
}

<<<<<<< HEAD
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}

function deleteFromObjectByKey(object, key) {
  var object2 = Object.assign({}, object)
  delete object2[key]
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
=======
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes['key'] = 'value'
  return recipes
>>>>>>> 308f3cf1ed95a4322deb950734c6f50fa8fd7965
}