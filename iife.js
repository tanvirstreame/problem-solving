// Immediately Invoked Function Expressions or IIFEs.
// Regular Function.
function Greet() {
  console.log("Welcome");
};
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function() {
  console.log("Welcome from iife");
})();
