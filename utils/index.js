 function traverseAndLog(node) {
    const visited = new WeakSet();

    function recursiveLog(obj) {
        if (obj === null || typeof obj !== 'object') return obj;

        if (visited.has(obj)) return '[Circular]';
        visited.add(obj);

        const result = {};
        for (const key in obj) {
            result[key] = recursiveLog(obj[key]);
        }
        return result;
    }

    return recursiveLog(node);
}

export default traverseAndLog;