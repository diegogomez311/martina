var countdown = document.querySelector('.countdown');



// Update every second
var x = setInterval( function() {
  // Set Launch Date (ms)
var launchDate = new Date('Jul 29, 2023 21:00:00').getTime();
  // Get todays date and time (ms)
  var now = new Date().getTime();

  // Distance from now and the launch date (ms)
  var distance = launchDate - now;

  // Time calculation
  var Dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  var Horas = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seg = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${Dias}<span>Dias</span></div> 
  <div>${Horas}<span>Horas</span></div>
  <div>${min}<span>Min</span></div>
  <div>${seg}<span>Seg</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
