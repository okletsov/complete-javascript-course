
// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code

}) ();

// UI CONTROLLER
var uiController = (function() {
    
    // Some code

}) ();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl) {

    var ctrlAddItem = function() {
        // 1. Get the input field data

        // 2. Add the item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget

        console.log('It works');
    
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) { // event parameter automatically gets passed to function by browser
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

}) (budgetController, uiController);