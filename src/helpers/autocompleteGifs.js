export const autocompleteGifs = async (searchitem) => {

    const url = `https://api.giphy.com/v1/gifs/search/tags?q=${ encodeURI(searchitem) }&limit=10&api_key=eijkqvC3mWFWTHfRdvENk5qA7jk7fawu`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);
    // const gifs = data.map(img => {
    //   return {
    //     id: img.id,
    //     title: img.title,
    //     url: img.images?.downsized_medium.url
    //   }
    // });

    return data;
  }