

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
         * @returns {TreeElement|null} The element that was found.
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
         * Search the element in a pre-order fashion.
         * NOTE: Only checks the immediate children of this element + this element.
         * @param {*} needle Check if needle is found.
         * @returns {TreeElement|null} The element that was found.
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
}(tree = window.tree || {}));