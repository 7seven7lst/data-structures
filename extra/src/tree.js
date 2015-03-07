var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent=null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Tree(value);
	child.value = value;
	child.parent=this;
	this.children.push(child);	
};

treeMethods.traverse = function(func){
	func(this.value);
	var childFinder = function(node){	
		for(var i = 0; i < node.children.length; i++){
			func(node.children[i].value);
			childFinder(node.children[i]);
		}
	}
	childFinder(this);
}

treeMethods.contains = function(target){
	var result=false;

	var childFinder = function(node){	
		if(node.value === target){
			return result = true;
		}
		for(var i = 0; i < node.children.length; i++){
			childFinder(node.children[i]);
		}
	}
	childFinder(this);
	return result;
};

treeMethods.removeFromParent = function(node){
	// remove  parent connection to children
	for (var i=0; i<node.parent.children.length; i++){
		if (node.parent.children[i]=== node) { // consider object comparison
			node.parent.children = node.parent.children.slice(0,i).concat(node.parent.children.slice(i+1));
		}
	}

	// remove child's connection to parent
	node.parent=null;
	return node;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
