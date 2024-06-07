const accessKey = '9ELgmw46fZsq9yaM167LQp8loBG4JQYjN2dekn9VH8M'; // Replace with your Unsplash API access key
const imageGallery = document.getElementById('total');

document.getElementById('loadImagesBtn').addEventListener('click', () => {
    fetchRandomBedroomImages(accessKey, 100) // Fetch 5 images (you can change the number)
        .then(images => {
            displayImages(images);
        })
        .catch(error => {
            console.error('An error occurred while fetching the images:', error);
        });
});

function fetchRandomBedroomImages(accessKey, count) {
    const endpoint = `https://api.unsplash.com/photos/random?query=diningroom&count=${count}&client_id=${accessKey}`;
    
    return fetch(endpoint)
        .then(response => response.json());
}

function displayImages(images) {
    imageGallery.innerHTML = '';
    
    images.forEach(imageData => {
        const imageElement = document.createElement('img');
        imageElement.src = imageData.urls.regular;
        imageElement.alt = imageData.description || 'Bedroom Image';
        imageGallery.appendChild(imageElement);
    });
}