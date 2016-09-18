class Tree(){
	//initialize tree root with null value;
	constructor(){
		this.root = null;
	}

	//traverse the tree (recursive function)
	traverse(callback){
		function walk(node){
			callback(node);
			node.children.forEach(walk);
		}

		walk(this.root);
	}

	add(value, parentValue)
	{
		var newNode = {
			value: value,
			children: [],
		};

		if(this.root === null)
		{
			this.root = newNode;
			return;
		}

		this.traverse(function(){
			if(node.value === parentValue)
			{
				node.children.push(newNode);

			}
		});
	}
}

var test = 3;