
const blocks = [
  {
  'gym' : false,
  'school' : true,
  'store' : false
  },
  {
  'gym' : true,
  'school' : false,
  'store' : false
  },
  {
  'gym' : true,
  'school' : true,
  'store' : false
  },
  {
  'gym' : false,
  'school' : true,
  'store' : false
  },
  {
  'gym' : false,
  'school' : true,
  'store' : true
  },
];

const reqs = ['gym', 'school', 'store'];

function getBestAp(blocks, reqs) {
  let best = 0;
  let bestMaxDists = {}; 
  for (const block of blocks) {
    let dists = reqs.map(() => blocks.length-1);
    for (const ob of blocks) {
      for (const r of reqs) {
        let d = getDist(blocks.indexOf(block), blocks.indexOf(ob));
        if (ob[r] && d < dists[reqs.indexOf(r)]) {
          dists[reqs.indexOf(r)] = d;
        }
      }
    }
    let maxDist = getMax(...dists);
    bestMaxDists[blocks.indexOf(block)] = maxDist
    
  }
  // console.log(bestMaxDists);
  let tempDist = blocks.length;
  for (dist in bestMaxDists) {
    if (bestMaxDists[dist] < tempDist) {
      tempDist = bestMaxDists[dist];
      best = dist;
    }
  }
  return best;
}

function getDist(a, b) {
  return Math.abs(a-b);
}

function getMax(...nums) {
  let max = 0;
  for (const n of nums) {
    if (n > max) {
      max = n;
    }
  }    
  return max
}
  
let bestAp = getBestAp(blocks, reqs);
console.log(`The best apartment is the number: ${bestAp}`)