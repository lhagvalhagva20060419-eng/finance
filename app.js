// delgetstei ajillah controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
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
    addListItem: function (item, type) {
      var html, list;
      if (type === "inc") {
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%%description%%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        list = document.querySelector(".income__list");
      } else {
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%%description%%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        list = document.querySelector(".expenses__list");
      }
      html = html.replace("%id%", item.id);
      html = html.replace("%%description%%", item.description);
      html = html.replace("%value%", item.value);

      list.insertAdjacentHTML("beforeend", html);
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
    items: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;
      if (data.items[type].length === 0) id = 1;
      else id = data.items[type][data.items[type].length - 1].id + 1;

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }
      data.items[type].push(item);
      return item;
    },
  };
})();

// programmiig holboh controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    var input = uiController.getInput();
    var item = financeController.addItem(
      input.type,
      input.description,
      input.value,
    );
    uiController.addListItem(item, input.type);
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        ctrlAddItem();
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
