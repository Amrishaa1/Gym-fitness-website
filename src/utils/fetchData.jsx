export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}




export const youtubeOptions = {
  method: 'GET',
  
headers: {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
}

export const fetchData = async (url, options) => {
    // const response = await fetch(url,options)
    // const data = await response.json();

    // return data;
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
    }
};
