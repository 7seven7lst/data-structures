var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.storage=new Array(this._limit);

};


/***
* 1st if (index is empty) - push nested array which makes the index an array
* else (index already has stored value) - push key value array into index array   
*
*                                         */


HashTable.prototype.insert = function(k, v){
  this.doubleSize();
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    //console.log(i);
    this._storage.set(i,[[k,v]]);
  }
  else{
    var temp=this._storage.get(i);
    temp.push([k,v]);
    this._storage.set(i, temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)){
    return null;
  }
  var temp=this._storage.get(i);
  for (var j = 0; j < temp.length; j++){
    if ( k === temp[j][0] ){
      return temp[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  //console.log("in remove, the limit",this._limit);
  this.halfSize();
  var i=getIndexBelowMaxForKey(k,this._limit);
  this._storage.set(i,null);

};

HashTable.prototype.getFillLevel=function(){
  var fillLevel=0;
  for (var i=0; i<this._limit; i++){
    if ( this._storage.get(i)){
      fillLevel++;
    }
  }
  return fillLevel;
}

HashTable.prototype.doubleSize=function(){
  var fillLevel=this.getFillLevel();

  //console.log(fillLevel);
  if (fillLevel+1>=0.75*this._limit){
    //console.log("here");
    this._limit*=2;
    var temp=LimitedArray(this._limit);

    for (var i=0; i<this._limit/2; i++){
      if (this._storage.get(i)){
        var index=getIndexBelowMaxForKey((this._storage.get(i))[0][0], this._limit);
        if (!temp.get(index)){
          temp.set(index,[[(this._storage.get(i))[0][0], (this._storage.get(i))[0][1]]]);
        }
        else{
          var template=this._storage.get(i);
          template.push([[(this._storage.get(i))[0][0], (this._storage.get(i))[0][1]]]);
          //temp[index].push([[this.storage[i][0][0], this.storage[i][0][1]]]);
          temp.set(i, template);
        }
      }
    }
    this._storage=temp;
  }

}

HashTable.prototype.halfSize=function(){
  var fillLevel=this.getFillLevel();
  if (fillLevel+1<=0.25*this._limit){
    //console.log(this._limit);
    this._limit/=2;
    //aconsole.log(this._limit);
    var temp=LimitedArray(this._limit);

    for (var i=0; i<this._limit*2; i++){
      if (this._storage.get(i)){
        var index=getIndexBelowMaxForKey((this._storage.get(i))[0][0], this._limit);
        if (!temp.get(index)){
          temp.set(index,[[(this._storage.get(i))[0][0], (this._storage.get(i))[0][1]]]);
        }
        else{
          var template=this._storage.get(i);
          template.push([[(this._storage.get(i))[0][0], (this._storage.get(i))[0][1]]]);
          //temp[index].push([[this.storage[i][0][0], this.storage[i][0][1]]]);
          temp.set(i, template);
        }
      }
    }
    this._storage=temp;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
 * Complexity: What is the time complexity of the above functions?
 */
