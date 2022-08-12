import { Node } from './node.js';

let oldSelected = null
let selectedNode = null;
let nodes = [];

const pool = document.getElementById('node-pool')
const newNodeBtn = document.getElementById('new-node');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('node-head')) {
        if (selectedNode) {
            selectedNode.classList.remove('selected');
        }
        selectedNode = e.target;
        selectedNode.classList.add('selected');
        oldSelected = selectedNode;
    } else {
        if (selectedNode){
            selectedNode.classList.remove('selected');
        }
        selectedNode = null;
    }
});

newNodeBtn.addEventListener('click', () => {;
    createNewNode('Node', 'node', 'img/html5-brands.svg', getSelectedNode());
    setTimeout(restoreSelection, 0.001)
});

function restoreSelection () {
    if (oldSelected) {
        console.log(oldSelected);
        console.log(selectedNode);
        selectedNode = oldSelected;
        selectedNode.classList.add('selected');
    }
}

function createNewNode (nName='Node', nTag='node', nIcon='img/html5-brands.svg', parent) {
    let node = new Node(nName, nTag, nIcon, parent);
    nodes.push(node)
    let nodeBody = getSelectedNode();
    if (getSelectedNode() !== pool) {
        nodeBody = getSelectedNode().getElementsByTagName('node-body')[0];
    }   
    nodeBody.appendChild(node.getElement());
}

function getSelectedNode () {
    let sel = pool;
    if (selectedNode !== null && selectedNode !== pool) {
        sel = selectedNode.parentElement;
    }
    return sel;
}

