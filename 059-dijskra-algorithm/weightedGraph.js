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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
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
          currPath = distance[currPath];
        }

        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList) {
          const nextNode = neighbour.node;
          const currWeight = distance[smallest] + neighbour.weight;

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
}

var graph = new WeightedGraph();
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

graph.Dijkstra("A", "E");

console.log(graph.Dijkstra("A", "E"));
// ["A", "C", "D", "F", "E"]
