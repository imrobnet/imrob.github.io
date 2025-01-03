// current date
window.addEventListener('load', function() {
  // Get the current date element
  const currentDateElement = document.getElementById('current-date');

  // Format the date (e.g., January 2, 2025)
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);

  // Display the formatted date
  currentDateElement.textContent = formattedDate;
});

// Current time
window.addEventListener('load', function() {
  // Get the current time element
  const currentTimeElement = document.getElementById('current-time');

  // Function to update time every second
  function updateTime() {
    // Get current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero to minutes and seconds if less than 10
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Display the formatted time
    currentTimeElement.textContent = formattedTime;
  }

  // Update the time immediately on load
  updateTime();

  // Call updateTime function every second (1000ms)
  setInterval(updateTime, 1000);
});

// Mouse cursor and coordinates
document.addEventListener('mousemove', function (e) {
  const cursorDot = document.querySelector('.cursor-dot');
  const rulerHorizontal = document.querySelector('.ruler-horizontal');
  const rulerVertical = document.querySelector('.ruler-vertical');
  const mouseXElement = document.getElementById('mouse-x');
  const mouseYElement = document.getElementById('mouse-y');

  const x = e.clientX;
  const y = e.clientY;

  // Move the dot
  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;

  // Move the horizontal line (cross the entire width)
  rulerHorizontal.style.top = `${y - 1}px`; // Align it with the cursor

  // Move the vertical line (cross the entire height)
  rulerVertical.style.left = `${x - 1}px`; // Align it with the cursor

  // Update the mouse coordinates display
  mouseXElement.textContent = x;
  mouseYElement.textContent = y;
});

// Website loadtime
window.addEventListener('load', () => {
  const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
  document.getElementById('load-time').textContent = `Load Time: ${loadTime / 1000} seconds`;
});

// Mouse speed
let lastTime = 0;
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', function(e) {
  const currentTime = Date.now();
  const timeDiff = currentTime - lastTime;
  const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
  const speed = (distance / timeDiff) * 1000; // pixels per second

  lastTime = currentTime;
  lastX = e.clientX;
  lastY = e.clientY;

  document.getElementById('mouse-speed').textContent = `Mouse Speed: ${speed.toFixed(2)} px/s`;
});





// Function to toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  const colorModeElement = document.getElementById('color-mode');

  // Toggle the light mode class on the body (dark mode is the default)
  body.classList.toggle('light-mode');

  // Update the theme text in the toggle
  if (body.classList.contains('light-mode')) {
    colorModeElement.textContent = 'light';
    localStorage.setItem('theme', 'light'); // Store the theme choice
  } else {
    colorModeElement.textContent = 'dark';
    localStorage.setItem('theme', 'dark'); // Store the theme choice
  }
}

// On page load, check for the saved theme preference
window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('theme');
  const colorModeElement = document.getElementById('color-mode');
  
  // If no theme is saved, the dark theme will be the default
  if (savedTheme === 'darl') {
    document.body.classList.add('light-mode');
    colorModeElement.textContent = 'light'; // Update the toggle text
  } else {
    document.body.classList.remove('light-mode');
    colorModeElement.textContent = 'dark'; // Update the toggle text
  }
});








