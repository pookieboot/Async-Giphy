document.addEventListener('DOMContentLoaded', () => {
    async function getImage(query) {
        try {
            console.log('Fetching GIF for query:', query);  
            const response = await fetch(`/get-gif?query=${query}`);
            console.log('Response received:', response);  
            const data = await response.json();
            console.log('Parsed data:', data);  
            return data.gifUrl;
        } catch (error) {
            console.error('Error fetching the gif:', error);
        }
    }

    document.getElementById('searchForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const query = document.getElementById('searchQuery').value;
        console.log('Search query:', query); 
        
        const gifUrl = await getImage(query);
        console.log('Gif URL received:', gifUrl);  
        
        if (gifUrl) {
            document.getElementById('gifContainer').innerHTML = `<img src="${gifUrl}" alt="${query} gif">`;
            console.log('Gif inserted into DOM');
        } else {
            console.log('No Gif found');
        }
    });
});



