
// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code

}) ();

// UI CONTROLLER
var uiController = (function() {

    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value, // Will be either "inc" or "exp"
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            };
        },

        getDomStrings: function() {
            return domStrings;
        }
    };

}) ();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl) {

    var dom = uiCtrl.getDomStrings();

    var ctrlAddItem = function() {
        // 1. Get the input field data
        var input = uiCtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget
    
    };

    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) { // event parameter automatically gets passed to function by browser
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

}) (budgetController, uiController);