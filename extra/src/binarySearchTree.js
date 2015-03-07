var BinarySearchTree = function(value){

	tree= new BTree(value);
	//tree.root.value=value;

	tree.insert = function(value){
		var current=tree;
		var node= new BTree(value);
		//node.value=value;
		while (true){
			//console.log(current);
			if (value<current.value){
				if (current.left===null){
					current.left=node;
					break;
				} else {
					current=current.left;
				}
			}

			else if (value >current.value){
				if (current.right===null){
					current.right=node;
					break;
				}	else {
					current=current.right;
				}
			}
			else {
				break;
			}
		}
	};

	tree.contains = function(value){
		var flag = false;
		current = tree;
		while(!flag && current){
			if(value === current.value){
				flag = true;
			} else if(value > current.value){
				current = current.right;
			} else {
				current = current.left;
			}
		}

		return flag;
	};

	tree.depthFirstLog = function(func){
		var current=tree;
		function depthLogRecursive(node){
			if (node !==null){// if the current node exist
				func(node.value);
				depthLogRecursive(node.left);
				depthLogRecursive(node.right);
			}
			else { // if the current node doesn't exit
				return;
				
			}
		}
		depthLogRecursive(current);
	};

	tree.breadthFirstLog=function(func){
		var current=tree;
		var myQueue=[];
		myQueue.unshift(tree);
		while (myQueue){
			current= myQueue.shift();
			if (!current){
				break;
			}
			if (current) {
				func(current.value);
				if (current.left){
					myQueue.push(current.left);
				}
				if (current.right){
					myQueue.push(current.right);
				}
			}
		}
	}
	return tree;
};

	var BTree = function(value){
		this.value=value;
		this.left=null;
		this.right=null;
	}
/*
var Node = function(value){
  

  this.value = value;
  this.left=null;
  this.right=null;

};
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
