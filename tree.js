

(function(tree) {
    tree.TreeNode = class {
        constructor(value = null) {
            this.parent = null;
            this.value = value;
            this.children = [];
        }

        /**
         * Search the node in a pre-order fashion.
         * NOTE: Only checks the immediate children of this node + this node.
         * @param {Function} fcheck A function that checks a value.
         * @returns {TreeNode|null} The node that was found.
         */
        immediateCustomSearch(fcheck) {
            if(fcheck(this.value)) { return this; }
            for (let index = 0; index < this.children.length; index++) {
                const child = this.children[index];
                if(fcheck(child.value)) { return child; }
            }
            return null;
        }

        /**
         * Search the node in a pre-order fashion.
         * NOTE: Only checks the immediate children of this node + this node.
         * @param {*} needle Check if needle is found.
         * @returns {TreeNode|null} The node that was found.
         */
        immediateSearch(needle) {
            return this.immediateCustomSearch(( val ) => { return (val === needle); });
        }

        /**
         * Adds a child to the right-most position in the node.
         * NOTE: Allows chaining.
         * @param {TreeNode} childNode The child to add to the tree.
         * @returns {TreeNode} The current node, this allows chaining.
         */
        addChild(childNode) {
            childNode.parent = this;
            this.children.push(childNode);
            return this;
        }

        /**
         * Adds multiple children to the node.
         * @param {Array<TreeNode>} childrenNodes An array of children to add to the node.
         */
        addChildren(childrenToAdd) {
            for (let index = 0; index < childrenToAdd.length; index++) {
                const child = childrenToAdd[index];
                this.addChild(child);
            }
        }
    }
}(tree = window.tree || {}));