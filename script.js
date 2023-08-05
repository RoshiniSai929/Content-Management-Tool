const form = document.querySelector('form');
const titleInput = document.getElementById('post-title');
const contentInput = document.getElementById('post-content');
const imageInput = document.getElementById('post-image');
const videoInput = document.getElementById('post-video');
const submittedContent = document.getElementById('submitted-content');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  //Clear the previous submitted content
  while(submittedContent.firstChild) {
  submittedContent.removeChild(submittedContent.firstChild);
  }

  // Create a new div to display the submitted content
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('submitted-post');

  // Create and add the title element to the content container
  const titleElement = document.createElement('h2');
  titleElement.textContent = titleInput.value;
  contentContainer.appendChild(titleElement);

  // Create and add the content element to the content container
  const contentElement = document.createElement('p');
  contentElement.textContent = contentInput.value;
  contentContainer.appendChild(contentElement);

  // Check if an image is uploaded
  if (imageInput.files[0]) {
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(imageInput.files[0]);
    imageElement.alt = 'Uploaded Image';
    contentContainer.appendChild(imageElement);
  }

  // Check if a video is uploaded
  if (videoInput.files[0]) {
    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(videoInput.files[0]);
    videoElement.controls = true;
    contentContainer.appendChild(videoElement);
  }

  // Append the new content to the "submitted-content" section
  submittedContent.appendChild(contentContainer);

  // Reset the form to clear the input fields after submission
  form.reset();
});