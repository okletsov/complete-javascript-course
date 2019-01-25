
// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []    
        },

        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into data structure
            data.allItems[type].push(newItem);

            // Return the element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    }

}) ();

// UI CONTROLLER
var uiController = (function() {

    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value, // Will be either "inc" or "exp"
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            };
        },

        addListitem: function(obj, type) {

            var html, newHtml, element;

            // Create HTML string with placeholder text

            if(type === 'inc') {
                element = domStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if(type === 'exp') {
                element = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            // Replace placeholder text with actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        getDomStrings: function() {
            return domStrings;
        }
    };

}) ();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl) {

    var setupEventListeners = function() {
        var dom = uiCtrl.getDomStrings();

        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) { // event parameter automatically gets passed to function by browser
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the input field data
        input = uiCtrl.getInput();

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add item to the UI
        uiCtrl.addListitem(newItem, input.type);

        // 4. Calculate the budget

        // 5. Display the budget
    
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };    
}) (budgetController, uiController);

controller.init();