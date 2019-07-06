class Graph {
	constructor() {
		this.edges = {};
		this.nodes = [];
	}

	addNode(node) {
		this.nodes.push(node);
		this.edges[node] = [];
	}

	addEdge(startNode, endNode) {
		this.edges[startNode].push({ node: endNode });
		this.edges[endNode].push({ node: startNode });
	}

	contains(node) {
		return !!this.edges[node];
	}

	display() {

		let graph = '';
		this.nodes.forEach(node => {
			graph +=
				node +
				'->' +
				this.edges[node].map(n => n.node).join(', ') +
				'\n';
		});
		console.log(graph);
	}
}