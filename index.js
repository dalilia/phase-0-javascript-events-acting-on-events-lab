// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    let left = dodger.style.left;
    left = parseInt(left);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`; // Move the dodger to the right by 1 pixel
    }
}

// The code below is just for simulation purposes to work in a testing environment.
// In a real web page, you would have your own way of invoking the moveDodgerRight() function.

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});