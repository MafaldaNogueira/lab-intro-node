class SortedList {
  constructor() {
    this.items=[];
    this.length = (0);
  }


  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a-b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if(pos < this.items.length){
   return this.items.indexOf(pos);
  } else{
    throw new Error('OutOfBounds');
  }
}

  max() {
    if(this.items.length > 0){
      return this.items[this.length-1];
    }else {
      throw new Error('EmptySortedList');
    }
    
  }

  min() {
    if(this.items.length > 0){
      return this.items[0];
    }else {
      throw new Error('EmptySortedList');
    }
  }
    

  sum() {
    let sumNumbers=0;
    for (let i = 0; i < this.items.length; i++){ 
   
    sumNumbers += this.items[i]; 
    } 
    return sumNumbers; 
  }


  avg() {
    let sumNumbers=0;
    if (this.items.length > 0){
      for (let i = 0; i < this.items.length; i++){ 
        sumNumbers += this.items[i]; 
    } 
    return sumNumbers / this.items.length; 
  } else {
    throw new Error('EmptySortedList');
  }
}



  }
module.exports = SortedList;
