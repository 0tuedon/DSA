class Graphs {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      const ver1 = this.adjacencyList[vertex1];
      const ver2 = this.adjacencyList[vertex2];

      ver1.push(vertex2);
      ver2.push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.vertexExists(vertex1) && this.vertexExists(vertex2)) {
      let stored = [vertex1, vertex2];
      let ver1 = this.adjacencyList[vertex1];
      let ver2 = this.adjacencyList[vertex2];
      this.adjacencyList[vertex1] = ver1.filter((ver) => ver !== vertex2);
      this.adjacencyList[vertex2] = ver2.filter((ver) => ver !== vertex1);
      return stored;
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      const allVertexEdges = this.adjacencyList[vertex];
      for (let edge of allVertexEdges) {
        this.removeEdge(vertex, edge);
      }

      delete this.adjacencyList[vertex];
    }
  }

  vertexExists(vertex1) {
    return Boolean(this.adjacencyList[vertex1]);
  }

  traverse(vertex, visited, result) {
    if (!this.vertexExists(vertex)) return null;

    visited[vertex] = true;
    result.push(vertex);

    this.adjacencyList[vertex].forEach((neighbor)=>{
        if(!visited[neighbor]){
                return this.traverse(neighbor,visited,result)
        }
    })
    return result;
  }
  /*
   * @params vertex
   */
  dfsr(startingPoint) {
    let visited = {};
    let result = [];
    if (this.vertexExists(startingPoint, visited)) {
      return this.traverse(startingPoint, visited, result);
    }
  }

  dfsi(startingPoint){
    let stack = [];
    const result = [];
    const visited = {}
    stack.push(startingPoint);

    while(stack.length){
        const currVertex  = stack.pop();
        if(!visited[currVertex]){
            visited[currVertex] = true
            result.push(currVertex);
            stack.push(...this.adjacencyList[currVertex])
        }
        
    }

    return result
  }

  bfsi(startingPoint){
    if(!this.vertexExists(startingPoint)) return null;
    let queue = [];
    let result = [];
    let visited = {}
    queue.push(startingPoint)
    visited[startingPoint] = true;
    while(queue.length){
        const currVertex = queue.shift()
    
        result.push(currVertex);
           
        this.adjacencyList[currVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result
  }
}

const g = new Graphs();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
console.log(g.dfsi("A"));
console.log(g.bfsi("A"));
