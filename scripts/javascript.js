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


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('rsvp-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target;
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.result === 'success') {
                    window.location.href = data.redirect;
                } else {
                    alert('An error occurred: ' + data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });
});