/**
 * BinaryTreeNode: node for a general tree.
 *
 * @format
 */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(r = this.root) {
    if (!r) return 0;
    if (r.right === null && r.left === null) return 1;
    if (r.left === null) return this.minDepth(r.right) + 1;
    if (r.right === null) return this.minDepth(r.left) + 1;
    return Math.min(this.minDepth(r.left), this.minDepth(r.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(r = this.root) {
    if (!r) return 0;
    if (r.right === null && r.left === null) return 1;
    if (r.left === null) return this.maxDepth(r.right) + 1;
    if (r.right === null) return this.maxDepth(r.left) + 1;
    return Math.max(this.maxDepth(r.left), this.maxDepth(r.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root = this.root) {
    if (!root) return 0;
    if (root.right === null && root.left === null) return root.val;
    return root.val + getMaxSum(root.right) + getMaxSum(root.left);

    function getMaxSum(r) {
      if (!r) return 0;
      if (r.right === null && r.left === null) return r.val > 0 ? r.val : 0;
      if (r.left === null) return getMaxSum(r.right) + r.val;
      if (r.right === null) return getMaxSum(r.left) + r.val;
      return Math.max(getMaxSum(r.left), getMaxSum(r.right)) + r.val;
    }
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let arr = [];
    let toVisitStack = [this.root];
    if (!this.root) return null;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current.val > lowerBound) arr.push(current.val);
      if (current.right != null) toVisitStack.push(current.right);
      if (current.left != null) toVisitStack.push(current.left);
    }
    if (arr.length === 0) return null;
    return Math.min(...arr);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
