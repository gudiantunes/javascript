class Node {
    constructor (name, tag, icon, parent) {
        this.name = name;
        this.tag = tag;
        this.icon = icon;

        this.parent = parent;
        this.margin = 0;

        this.children = [];

        this.element = this.createElement()
    }

    createElement () {
        let newNode = document.createElement('node');
        let newNodeHead = document.createElement('node-head');
        let newNodeBody = document.createElement('node-body');
        let btn = document.createElement('button');
        let icon = document.createElement('img');
        let nodeName = document.createElement('p')
        
        nodeName.classList.add('node-name');
        nodeName.innerText = this.name;
        
        icon.classList.add('node-icon');
        icon.src = this.icon

        btn.classList.add('xpnd-node');
        btn.classList.add('hide');

        newNodeHead.appendChild(btn);
        newNodeHead.appendChild(icon);
        newNodeHead.appendChild(nodeName);

        newNodeHead.classList.add('node-head');

        newNode.appendChild(newNodeHead);
        newNode.appendChild(newNodeBody);
        newNode.classList.add('node');

        if (parent) {
            this.setParent(parent);
            newNode.style.marginLeft = '20px';
        }

        return newNode
    }

    setParent (parent) {
        this.parent = parent;
        // parent.children.push(this);
    }

    getElement () {
        return this.element;
    }

}

export { Node }