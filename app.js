// delgetstei ajillah controller
var uiController = (function () {})();

// sanhuutei ajillah controller
var financeController = (function () {})();

// programmiig holboh controller
var appController = (function (uiController, financeController) {
  document.querySelector(".add__btn").addEventListener("click", function () {
    // oruulah ogogdliig delgetsees awah
    // ogogdloo sanhuutei controller ruu damjuulah
    // delgetsend uzuuleh
    // tosviig shinechleh
    // etssiin uldegdel tootsoog delgetsend uzuuleh
  });

  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // oruulah ogogdliig delgetsees awah
      // ogogdloo sanhuutei controller ruu damjuulah
      // delgetsend uzuuleh
      // tosviig shinechleh
      // etssiin uldegdel tootsoog delgetsend uzuuleh
    }
  });
})(uiController, financeController);
