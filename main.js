    
      // Typed.js initialization
      var typeData = new Typed(".role", {
        strings: ["Web Developer", "Flutter Developer", "Problem Solver"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      });

      // Show/hide experience details
      var y1 = document.getElementById("btn1");
      var y2 = document.getElementById("btn2");
      var y3 = document.getElementById("btn3");

      var x1 = document.getElementById("exp");
      var x2 = document.getElementById("exp2");
      var x3 = document.getElementById("exp3");

      y1.innerText = "+";
      y2.innerHTML = "+";
      y3.innerHTML = "+";

      x1.style.display = "none"; // Hide the first experience entry by default
      x2.style.display = "none"; // Hide the second experience entry by default
      x3.style.display = "none"; // Hide the second experience entry by default

      function hideDetail() {
        if (x1.style.display === "none") {
          x1.style.display = "block";
          y1.innerText = "-";
        } else {
          x1.style.display = "none";
          y1.innerHTML = "+";
        }
      }

      function hideDetail1() {
        if (x2.style.display === "none") {
          x2.style.display = "block";
          y2.innerText = "-";
        } else {
          x2.style.display = "none";
          y2.innerHTML = "+";
        }
      }

      function hideDetail2() {
        if (x3.style.display === "none") {
          x3.style.display = "block";
          y3.innerText = "-";
        } else {
          x3.style.display = "none";
          y3.innerHTML = "+";
        }
      }
      const tracker = document.getElementById("mouse-tracker");

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  tracker.appendChild(trail);

  setTimeout(() => {
    trail.style.width = "0px";
    trail.style.height = "0px";
    trail.style.opacity = "0";
    setTimeout(() => {
      tracker.removeChild(trail);
    }, 400);
  }, 10);
});
