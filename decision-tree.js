

(function(tree) {
    tree.DecisionNode = class extends tree.TreeNode {
        /**
         * Create a decision node.
         * @param {string|null} answer The answer needed to get to this node.
         * @param {string} question The question to ask.
         * @param {Array<TreeNode>|null} children An array of TreeNode elements to allow navigation of the tree.
         */
        constructor(answer, question, children = null) {
            super(answer);
            this.question = question;
            if (children) { this.addChildren(children); }
        }
    }

    tree.testTree = new tree.DecisionNode(null, "Hello, how are you?")
        .addChild(new tree.DecisionNode("yes", "I'm happy for you, did something good happen?")
                        .addChild(new tree.DecisionNode("yes", "Alright, let's go on1"))
                        .addChild(new tree.DecisionNode("no", "Alright, let's go on2")))
        .addChild(new tree.DecisionNode("no", "Oh gosh, did someone die?")
                        .addChild(new tree.DecisionNode("yes", "Alright, let's go on3"))
                        .addChild(new tree.DecisionNode("no", "Alright, let's go on4")));
}(tree = window.tree || {}));