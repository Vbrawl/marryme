
/**
 * Runs all elements of a HTMLCollection through a specific action.
 * 
 * @param {HTMLCollection|NodeList} elements 
 * @param {Function} action 
 */
function applyForAll(elements, action) {
    for (let index = 0; index < elements.length; index++) { action(elements[index]); }
}


/**
 * Unfold the main-body container.
 */
function unfold_mainbody() {
    applyForAll(document.querySelectorAll(".main-body .bottom"), (e) => {
        e.classList.add("unfold");
    });
}

/**
 * Hide all unfold buttons.
 */
function hide_unfold_buttons() {
    applyForAll(document.getElementsByClassName("unfold-button"), (e) => {
        e.remove();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyForAll(document.getElementsByClassName("unfold-button"), (e) => {
        e.addEventListener('click', () => {
            hide_unfold_buttons();
            unfold_mainbody();
        });
    });
});