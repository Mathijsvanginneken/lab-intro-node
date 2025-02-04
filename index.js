class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
  this.items.push(item)
  this.items.sort(function (a, b) {
    return a - b;
  })
  this.length = this.items.length
  
  }
  get(pos) {
    if (this.length < pos){
      throw new Error('OutOfBounds');
    }
  return this.items.indexOf(pos)
  }

  max() {
    if (this.length === 0){
      throw new Error('OutOfBounds');
    }
  return this.items[this.items.length -1]
  }
  

  min() {
    if (this.length === 0){
      throw new Error('OutOfBounds');
    }
  return this.items[0]
  }
  

  sum() {
    if (this.items.length === 0){
      return 0
    }
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
  return this.sum() / this.length
  }
}

module.exports = SortedList;
