function updateCountdown() {
    var targetDate = new Date("2025-05-10T13:00:00");
    var currentDate = new Date();

    var remainingTime = targetDate - currentDate;
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";
}

updateCountdown(); // Initial call

// Update the countdown every second
setInterval(updateCountdown, 1000);


window.addEventListener("load", function() {
    const form = document.getElementById('rsvp-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(response => response.json())
      .then((responseData) => {
        if(responseData.result === 'success') {
          alert("Success!");
        } else {
          alert("Error: " + responseData.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert("There was an error submitting the form.");
      });
    });
  });