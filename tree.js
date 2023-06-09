import Node from "./node.js";
import mergeSort from "./mergeSort.js";

class Tree {
    constructor(arr) {
        this.root = this.buildTree(mergeSort([...new Set(arr)]));
    }

    buildTree(arr) {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new Node(arr[0]);

        const middle = Math.floor(arr.length / 2);

        const left = this.buildTree(arr.slice(0, middle));
        const right = this.buildTree(arr.slice(middle + 1));
        return new Node(arr[middle], left, right);
    }

    insert(value, node = this.root) {
        if (node === null) this.root = new Node(value);
        else if (node.data > value) {
            if (node.left !== null) this.insert(value, node.left);
            else node.left = new Node(value);
        } else if (node.right !== null) this.insert(value, node.right);
        else node.right = new Node(value);
    }

    delete(value, node = this.root) {
        if (!node) return node;
        if (node.data > value) {
            node.left = this.delete(value, node.left);
            return node;
        }
        if (node.data < value) {
            node.right = this.delete(value, node.right);
            return node;
        }
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let [succParent, succ] = [node, node.right];

        while (succ.left) {
            succParent = succ;
            succ = succ.left;
        }
        if (succParent !== node) succParent.left = succ.right;
        else succParent.right = succ.right;

        node.data = succ.data;

        return node;
    }

    find(value, node = this.root) {
        if (node.data === value) return node;
        if (node.data > value) return this.find(value, node.left);
        if (node.data < value) return this.find(value, node.right);
        return null;
    }

    levelOrder(queue = [this.root], arr = []) {
        if (!this.root) return [];
        if (queue.length === 0) return arr;
        arr.push(queue[0].data);
        if (queue[0].left) queue.push(queue[0].left);
        if (queue[0].right) queue.push(queue[0].right);
        queue.shift();
        return this.levelOrder(queue, arr);
    }

    inOrder(node = this.root, arr = []) {
        if (!node) return [];
        this.inOrder(node.left, arr);
        arr.push(node.data);
        this.inOrder(node.right, arr);
        return arr;
    }

    preOrder(node = this.root, arr = []) {
        if (!node) return [];
        arr.push(node.data);
        this.preOrder(node.left, arr);
        this.preOrder(node.right, arr);
        return arr;
    }

    postOrder(node = this.root, arr = []) {
        if (!node) return [];
        this.postOrder(node.left, arr);
        this.postOrder(node.right, arr);
        arr.push(node.data);
        return arr;
    }

    height(node) {
        if (node === null) return 0
        const leftHeight = this.height(node.left) + 1
        const rightHeight = this.height(node.right) + 1
        if (leftHeight > rightHeight) return leftHeight
        return rightHeight;
    }

    depth(node, root = this.root) {
        if (node.data < root.data) return this.depth(node, root.left) + 1;
        if (node.data > root.data) return this.depth(node, root.right) + 1;
        return 0;
    }

    isBalanced(node = this.root) {
        if (node == null) return true;
        if (Math.abs(this.height(node.left) - this.height(node.right)) > 1) return false;
        return true;
    }

    rebalance() {
        const arr = this.inOrder();
        this.root = this.buildTree([...new Set(arr)]);
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (!node) return;
        if (node.right) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }
}

export default Tree;
