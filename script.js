// PART 2: Functions with scope, parameters, and return values

// Global variable example
let animationCount = 0;

// Function that increments count (demonstrates return values)
function increaseCount(num) {
  animationCount += num;
  return animationCount;
}

// Function to demonstrate local scope
function localScopeExample() {
  let message = "Hello from inside the function!";
  console.log(message); // works here
}
localScopeExample();
// console.log(message); // would cause error (local scope)


// PART 3: Functions triggering CSS animations

// Trigger box animation
function triggerAnimation() {
  let box = document.getElementById("animateBox");
  box.classList.toggle("animate");

  let newCount = increaseCount(1);
  console.log("Box animated " + newCount + " times!");
}

// Open modal
function openModal() {
  document.getElementById("modal").classList.add("show");
}

// Close modal
function closeModal() {
  document.getElementById("modal").classList.remove("show");
}
