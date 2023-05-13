import Tree from "./tree.js";
import { randomArray, addRandomToTree } from "./tools.js";

const arr = randomArray(10, 500)
const tree = new Tree(arr);

console.log(tree.isBalanced() ? "Tree is Balanced\n" : "Tree is Not Balanced\n")

console.log("preorder: \n", tree.preOrder(), "\n")
console.log("inorder: \n", tree.inOrder(), "\n");
console.log("postorder: \n", tree.postOrder(), "\n");

addRandomToTree(tree, 15, 999)

console.log(tree.isBalanced() ? "Tree is Balanced\n" : "Tree is Not Balanced\n");

if (!tree.isBalanced()) tree.rebalance();
console.log(tree.isBalanced() ? "Tree is Balanced\n" : "Tree is Not Balanced\n");

console.log("preorder: \n", tree.preOrder(), "\n");
console.log("inorder: \n", tree.inOrder(), "\n");
console.log("postorder: \n", tree.postOrder(), "\n");