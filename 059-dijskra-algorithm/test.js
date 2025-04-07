class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  numEdges() {
    let total = 0;

    Object.values(this.adjacencyList).forEach((list) => {
      total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  Dijkstra(start, end) {
    let nodes = new PriorityQueue();
    let distance = {};
    let previous = {};
    let path = [];

    for (let node in this.adjacencyList) {
      if (node === start) {
        distance[node] = 0;
      } else {
        distance[node] = Infinity;
      }

      previous[node] = null;
      nodes.enqueue(node, distance[node]);
    }

    while (nodes.values.length) {
      const smallest = nodes.dequeue().val;


      if (smallest === end) {
        let currPath = smallest;
        while (currPath !== start) {
          path.push(currPath);
          currPath = previous[currPath];
        }

        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList) {
          const nextNode = neighbour.node;
          const currWeight = distance[smallest] + neighbour.weight;

          console.log(neighbour, this.adjacencyList)
          if (distance[smallest] > currWeight) {
            distance[smallest] = currWeight;
            previous[nextNode] = smallest;

            nodes.enqueue(nextNode, currWeight);
          }
        }
      }
    }

    return [start].concat([...path.reverse()]);
  }

  // add the necessary code here
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));