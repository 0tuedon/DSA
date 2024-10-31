const Bitcoin = require('@0tuedon/bitcoin_rpcjs')

const getTxFee = (tx) =>{
  let fee = 0
  for (const input of tx["inputs"]) {
      fee+=input["value"]
  }
  for (const ouput of tx["outputs"]) {
    fee-=ouput["value"]
  }
  return fee
}

function getSubsidy(height) {
  let subsidy = 5000000000
  const halvings = Math.floor(height / 210000)
  if (halvings >= 33) {
      return 0
  }
  if (halvings === 0) {
    return subsidy
  }
  let postHalvingSubsidy = Math.floor(subsidy / 2) >>> (halvings - 1)
  return postHalvingSubsidy
}
function validateBlock(block) {
    // YOUR CODE HERE
    let fee = 0
    let subsidy = getSubsidy(block["height"])
  
   for (const tx of block["txs"]) {
      fee+= getTxFee(tx)
  }
  return subsidy + fee == block["txs"][0]["outputs"][0]["value"]
  }

function showtime() {
    let height = 6929851;
    let tips = {};
    let prevs = {};
    let invalid = [];
    let valid = [];
    let last = Bitcoin.rpc("getinfo")["blocks"];

    while (height <= last) {
        let candidates = Bitcoin.rpc("getblocksbyheight", height);

        for (let i = 0; i < candidates.length; i++) {
            let bhash = candidates[i];
            let block = Bitcoin.rpc("getblock", bhash);

            // Don't even bother checking blocks with invalid parents
            if (invalid.includes(block["prev"]) || !validateBlock(block)) {
                invalid.push(bhash);
                continue;
            }

            // Valid blocks replace their parents in the tips list, extending the branch
            if (block["prev"] in tips) {
                delete tips[block["prev"]];
            }
            tips[block["hash"]] = block;

            // save prev mapping for final output
            prevs[bhash] = block["prev"];
        }
        height += 1;
    }

    // this is the tip of the longest valid chain
    let best = Object.values(tips).reduce((a, b) => a["height"] > b["height"] ? a : b);

    // now reconstruct the chain of parent blocks
    let best_hash = best["hash"];
    valid.push(best_hash);

    while (prevs.hasOwnProperty(best_hash)) {
        let prev = prevs[best_hash];
        valid.push(prev);
        best_hash = prev;
    }

    // reverse it because the instructions said to start low and go to tip
    valid.reverse();

    return {
        "valid": valid,
        "invalid": invalid
    };
}

console.log(showtime())