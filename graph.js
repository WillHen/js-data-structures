function Graph() {
	this.edges = {};
	this.nodes = [];
}

Graph.prototype.addNode = function(node) {
	this.nodes.push(node);
	this.edges[node] = [];
};

Graph.prototype.contains = function(node) {
	return !!this.edges[node];
};

Graph.prototype.addEdge = function(startNode, endNode) {
	this.edges[startNode].push({ node: endNode });
	this.edges[endNode].push({ node: startNode });
};

Graph.prototype.display = function() {
	var graph = "";

	this.nodes.forEach(node => {
		graph +=
			node +
			"->" +
			this.edges[node]
				.map(function(n) {
					n.node;
				})
				.join(", ") +
			"\n";
	});
	console.log(graph);
};
