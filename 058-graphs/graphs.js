class Graphs {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdges(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      const ver1 = this.adjacencyList[vertex1];
      const ver2 = this.adjacencyList[vertex2];

      ver1.push(vertex2);
      ver2.push(vertex1);
    }
  }

  removeEdges(vertex1, vertex2) {
    if (this.vertexExists(vertex1) && this.vertexExists(vertex2)) {
      let stored = [vertex1, vertex2];
      let ver1 = this.adjacencyList[vertex1];
      let ver2 = this.adjacencyList[vertex2];
      this.adjacencyList[vertex1] = ver1.filter((ver) => ver !== vertex2);
      this.adjacencyList[vertex2] = ver2.filter((ver) => ver !== vertex1);
      return stored;
    }
  }

  removeVertex(vertex){
    if(this.adjacencyList[vertex]){
        const allVertexEdges = this.adjacencyList[vertex]
        for(let edge of allVertexEdges){
            this.removeEdges(vertex,edge)
        }

        delete  this.adjacencyList[vertex];
    }
  }
  vertexExists(vertex1) {
    return Boolean(this.adjacencyList[vertex1]);
  }
}

const newGraph = new Graphs();
newGraph.addVertex("abuja");
newGraph.addVertex("lagos");
newGraph.addVertex("kano");
newGraph.addEdges("abuja", "lagos");
newGraph.addEdges("abuja", "kano");
newGraph.addEdges("lagos", "kano");
newGraph.removeEdges("abuja", "kano");
console.log(newGraph);

newGraph.removeVertex("abuja")

console.log(newGraph);

