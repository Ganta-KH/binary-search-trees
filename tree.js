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
        if (node == null) return node;
        if (node.data > value) {
            node.left = this.delete(value, node.left);
            return node;
        }
        if (node.data < value) {
            node.right = this.delete(value, node.right);
            return node;
        }
        if (node.left == null) return node.right;
        if (node.right == null) return node.left;

        let [succParent, succ] = [node, node.right];

        while (succ.left != null) {
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

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? "│   " : "    "}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? "    " : "│   "}`,
                true
            );
        }
    }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const t = new Tree(arr);
t.prettyPrint();
t.root = t.delete(4)
t.prettyPrint()
console.log(t.find(23));
export default Tree;
