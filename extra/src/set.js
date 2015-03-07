var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	var itemStringified=JSON.stringify(item);
	this._storage[itemStringified]=true;
	console.log(this._storage);
};

setPrototype.contains = function(item){
	var result=false;
	var itemStringified=JSON.stringify(item);
	console.log(itemStringified);
	if (this._storage[itemStringified] === true){
		result=true;
	}
	console.log(result);
	return result;
};

setPrototype.remove = function(item){
	var itemStringified=JSON.stringify(item);
	if(this._storage[itemStringified]){
		delete this._storage[itemStringified];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
