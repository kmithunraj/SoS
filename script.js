let sos_count = 0;
let sos_alert = 0;
let time = 6;
let intensity_val = "Unknown";

let sos = document.getElementById('sos');
let alert_button = document.getElementById('alert');
let instructions = document.getElementById('instructions');

sos.addEventListener('click', function() {
  sos_count++;
  if (sos_count == 2) {
    instructions.style.display = 'none';
    sos.disabled = true;
    sos.style.width = '75px';
    sos.style.height = '75px';
    fire_button.style.display = 'block';
    assault_button.style.display = 'block';
    disaster_button.style.display = 'block';
    cancel.style.display = 'block';
    alert_button.style.display = 'block';
    sos_alert = 1;
    start = 1;
    counter();
  }
});

let problem = 'Unknown';

let fire_button = document.getElementById('fire');
fire_button.addEventListener('click', function() {
    problem = 'Fire';
    intensity();
});

let assault_button = document.getElementById('assault');
assault_button.addEventListener('click', function() {
    problem = 'Assault';
    intensity();
});


let disaster_button = document.getElementById('disaster');
disaster_button.addEventListener('click', function() {
    problem = 'Disaster';
    intensity();
});

let cancel = document.getElementById('cancel');
cancel.addEventListener('click', function() {
    sos_count = 0;
    sos_alert = 0;
    problem = 'none';
    intensity_val = 0;
    sos.style.width = '150px';
    sos.style.height = '150px';
    fire_button.style.display = 'none';
    assault_button.style.display = 'none';
    disaster_button.style.display = 'none';
    cancel.style.display = 'none';
    alert_button.style.display = 'none';
    instructions.style.display = 'flex';
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    time = 6;
    timer.textContent = time;
    location.reload();
});

let timer = document.getElementById('timer');

function counter() {
    timer.textContent = time-1;
    if(sos_alert == 1) {
        setInterval(function() {
            if(sos_alert == 1 && time != 0){
            time--;
            }
            else if(sos_alert == 1 && time == 0){
                console.log(`Problem: ${problem}, Intensity: ${intensity_val}`);
                sos_alert = 0;
                sos_count = 0;
                problem = 'none';
                intensity_val = 0;
                sos.style.width = '150px';
                sos.style.height = '150px';
                fire_button.style.display = 'none';
                assault_button.style.display = 'none';
                disaster_button.style.display = 'none';
                cancel.style.display = 'none';
                alert_button.style.display = 'none';
                instructions.style.display = 'flex';
                one.style.display = 'none';
                two.style.display = 'none';
                three.style.display = 'none';
                time = 6;
                timer.textContent = time;
                alert('Your SOS has been sent!');
                location.reload();
            }
            timer.textContent = time;
        }, 1000);
    }
}

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

function intensity() {

    fire_button.style.display = 'none';
    assault_button.style.display = 'none';
    disaster_button.style.display = 'none';
    one.style.display = 'block';
    two.style.display = 'block';
    three.style.display = 'block';
    
}

one.addEventListener('click', function() {
    intensity_val = 1;
    
    sos.style.width = '150px';
    sos.style.height = '150px';
    fire_button.style.display = 'none';
    assault_button.style.display = 'none';
    disaster_button.style.display = 'none';
    cancel.style.display = 'none';
    alert_button.style.display = 'none';
    instructions.style.display = 'flex';
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    console.log(`Problem: ${problem}, Intensity: ${intensity_val}`);
    sos.disabled = false;
    alert('Your SOS has been sent!');
    location.reload();
    time = 6;
});

two.addEventListener('click', function() {
    intensity_val = 2;
    sos.style.width = '150px';
    sos.style.height = '150px';
    fire_button.style.display = 'none';
    assault_button.style.display = 'none';
    disaster_button.style.display = 'none';
    cancel.style.display = 'none';
    alert_button.style.display = 'none';
    instructions.style.display = 'flex';
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    console.log(`Problem: ${problem}, Intensity: ${intensity_val}`);
    sos.disabled = false;
    time = 6;
    alert('Your SOS has been sent!');
    location.reload();
});

three.addEventListener('click', function() {
    intensity_val = 3;
    sos.style.width = '150px';
    sos.style.height = '150px';
    fire_button.style.display = 'none';
    assault_button.style.display = 'none';
    disaster_button.style.display = 'none';
    cancel.style.display = 'none';
    alert_button.style.display = 'none';
    instructions.style.display = 'flex';
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    console.log(`Problem: ${problem}, Intensity: ${intensity_val}`);
    sos.disabled = false;
    time = 6;
    alert('Your SOS has been sent!');
    location.reload();
});


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    alert("Geolocation is not supported by this browser.");
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Now you have the latitude and longitude, you can use this information as needed.
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);  
}

function errorCallback(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');

    // Check if the browser supports WebRTC
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Access the user's camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing the camera:', error);
        });
    } else {
        console.error('WebRTC is not supported in this browser.');
    }
});



let search_button = document.getElementById('search');
search_button.addEventListener('click', function() {
    document.getElementById('sos_container').style.display = 'none';
    document.getElementById('help_button').style.display = 'none';
    document.getElementById('search_container').style.display = 'block';
    document.getElementById('location_button').style.display = 'block';
    document.getElementById('chat_container').style.display = 'none';
});

let home_button = document.getElementById('home');
home_button.addEventListener('click', function() {
    document.getElementById('sos_container').style.display = 'flex';
    document.getElementById('help_button').style.display = 'block';
    document.getElementById('search_container').style.display = 'none';
    document.getElementById('location_button').style.display = 'none';
    document.getElementById('chat_container').style.display = 'none';
});

let help_button = document.getElementById('help');
help_button.addEventListener('click', function() {
    document.getElementById('chat_container').style.display = 'block';
    document.getElementById('sos_container').style.display = 'none';
    document.getElementById('help_button').style.display = 'none';
    document.getElementById('search_container').style.display = 'none';
    document.getElementById('location_button').style.display = 'none';
});