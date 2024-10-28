require('dotenv').config({ path: 'API.env' });

async function getImage(query) {
    const fetch = await import('node-fetch').then(mod => mod.default);
    
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.data.length);
            const gifUrl = data.data[randomIndex].images.original.url;
            return gifUrl;
        } else {
            throw new Error('No gifs found for this query');
        }
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

module.exports = getImage;
