async function handleFormSubmission(event) {
  event.preventDefault(); 

  const formData = new FormData(event.target);

  const formDataString = new URLSearchParams(formData).toString();

  try {
      const response = await fetch('http://localhost:3000/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formDataString
      });


      if (response.ok) {
          const responseData = await response.text();
          console.log('Server response:', responseData);
          alert('Thank you for your submission!');
      } else {
          console.error('Server error:', response.statusText);
          alert('There was an error processing your submission. Please try again later.');
      }
  } catch (error) {
      console.error('Fetch error:', error);
      alert('There was an error processing your submission. Please try again later.');
  }
}

document.getElementById('donationForm').addEventListener('submit', handleFormSubmission);

const hamburgerButton = document.getElementById('hamburgerButton');
const sidebar = document.querySelector('.sidebar');

hamburgerButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
