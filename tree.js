

(function(tree) {
    tree.TreeElement = class {
        constructor(value = null) {
            this.value = value;
            this.children = [];
        }

        /**
         * Search the element in a pre-order fashion.
         * NOTE: Only checks the immediate children of this element + this element.
         * @param {Function} fcheck A function that checks a value.
         * @returns boolean
         */
        immediateCustomSearch(fcheck) {
            if(fcheck(this.value)) { return true; }
            for (let index = 0; index < this.children.length; index++) {
                const child = this.children[index];
                if(fcheck(child.value)) { return true; }
            }
            return false;
        }

        /**
         * Search the element in a pre-order fashion.
         * NOTE: Only checks the immediate children of this element + this element.
         * @param {*} needle Check if needle is found.
         * @returns boolean
         */
        immediateSearch(needle) {
            return this.immediateCustomSearch(( val ) => { return (val === needle); });
        }

        /**
         * Adds a child to the right-most position in the node.
         * NOTE: Allows chaining.
         * @param {TreeElement} childElement The child to add to the tree.
         * @returns {TreeElement} The current node, this allows chaining.
         */
        addChild(childElement) {
            this.children.push(childElement);
            return this;
        }
    }


    tree.testTree = new tree.TreeElement(1)
        .addChild(new tree.TreeElement(2).addChild(new tree.TreeElement(3)))
        .addChild(new tree.TreeElement(4))
        .addChild(new tree.TreeElement(5));
}(tree = window.tree || {}));