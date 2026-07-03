// delgetstei ajillah controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add_value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// sanhuutei ajillah controller
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

// programmiig holboh controller
var appController = (function (uiController, financeController) {
  var DOM = uiController.getDOMstrings();
  var ctrlAddItem = function () {};

  var setupEventListeners = function () {
    document
      .querySelector(DOM.inputBtn)
      .addEventListener("click", function () {});

    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
      }
    });
  };

  return {
    init: function () {
      console.log("Application has started.");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
