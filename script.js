// Set minimum check-in date to today's date
const today = new Date().toISOString().split('T')[0];
document.getElementById('check-in').setAttribute('min', today);

// Room image slider
document.querySelectorAll('.image-slider').forEach(slider => {
  let currentIndex = 0;
  const images = slider.querySelectorAll('img');

  function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds
});

// Select a room and show the booking form
function bookRoom(roomType) {
  alert(`You have selected: ${roomType}`);
  document.querySelector('#booking-form h3').textContent = `Confirm Your Booking for ${roomType}`;
  document.getElementById('booking-form').style.display = 'block';
}

// Confirm booking and show the contact details form
function confirmBooking() {
  const checkInDate = new Date(document.getElementById('check-in').value);
  const checkOutDate = new Date(document.getElementById('check-out').value);
  const currentDate = new Date();

  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    alert("Please select both check-in and check-out dates.");
    return false;
  }

  if (checkInDate < currentDate) {
    alert("Check-in date cannot be in the past.");
    return false;
  }

  if (checkOutDate <= checkInDate) {
    alert("Check-out date must be at least one day after the check-in date.");
    return false;
  }

  // Hide booking form and show contact details form
  document.getElementById('booking-form').style.display = 'none';
  document.getElementById('contact-form').style.display = 'block';
}

// Submit the booking with contact details
function submitBooking() {
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!fullName || !email || !phone) {
    alert("Please fill in all contact details.");
    return false;
  }

  alert(`Booking confirmed!\n\nDetails:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}`);
}

// Facilities Slider
let slideIndex = 1;

// Show the first slide by default
window.onload = () => {
  showSlide(slideIndex);
};

// Function to change slides
function changeSlide(step) {
  showSlide((slideIndex += step));
}

// Function to display the current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const descriptions = document.querySelectorAll('.slide-descriptions p');

  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and descriptions
  slides.forEach((slide) => (slide.style.display = 'none'));
  descriptions.forEach((desc) => desc.classList.remove('active'));

  // Show the active slide and description
  slides[slideIndex - 1].style.display = 'block';
  descriptions[slideIndex - 1].classList.add('active');
}