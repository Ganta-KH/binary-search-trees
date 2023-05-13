# Binary Search Trees
Implementation of Binaru Search Tree BST in JavaScript

## Features
- `buildTree` a function which takes an array of data and turns it into a balanced binary tree full of `Node`.
- `insert` which takes a value and insert it as a `Node` in the Tree.
- `delete` delete a `Node` from the tree that equals to it value.
- `find` function which accepts a value and returns the node with the given value.
- `levelOrder` returns an array in a way that breath-first level order traverse the tree.
- `preOrder` returns an array in a way that depth-first order traverse the tree in the perspective of `root -> left -> right`.
- `inOrder` returns an array in a way that depth-first order traverse the tree in the perspective of `left -> root -> right`.
- `postOrder` returns an array in a way that depth-first order traverse the tree in the perspective of `left -> right -> root`.
- `height` function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.
- `depth` function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.
- `isBalanced` function which checks if the tree is balanced.
- `rebalance` function which rebalances an unbalanced tree.
- `prettyPrint` a function that visualize the binary search tree from the consol.
```
│           ┌── 94
│       ┌── 89
│       │   └── 88
│   ┌── 87
│   │   │   ┌── 85
│   │   └── 78
│   │       └── 74
│   │           └── 71
└── 50
    │       ┌── 38
    │   ┌── 36
    │   │   └── 34
    │   │       └── 32
    └── 28
        │   ┌── 20
        └── 19
            └── 10
                └── 4
```