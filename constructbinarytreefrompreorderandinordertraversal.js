//Objective is to build a binary tree from the 1-D array values of the preorder and
//inorder traversal.

let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]

class Node {
    constructor(val, left, right) {
        this.val = val
        this.left = null 
        this.right = null
    }
}

class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(data) {
      this.root = new Node(null, null, data)
    }
  
    addLeftNode(node, data) {
      node.left = new Node(null, null, data)
    }
  
    addRightNode(node, data) {
      node.right = new Node(null, null, data)
    }
}


//O(n) solution that recursively builds the left and right part of the root of the
//binary tree via where the root is in the inorder array.
function dfs(preorder, inorder) {
    if (!inorder || inorder.length < 1) {
        return null
    }

    let root = new Node(preorder.shift())
    let index = inorder.indexOf(root.val)

    let leftside = inorder.slice(0, index)
    let rightside = inorder.slice(index + 1)

    root.left = dfs(preorder, leftside)
    root.right = dfs(preorder, rightside)

    return root
}

console.log(dfs(preorder, inorder))


