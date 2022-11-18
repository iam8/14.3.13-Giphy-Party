// Ioana Alex Mititean
// 11/17/22
// 14.3.13: Giphy Party Exercise

console.log("Let's get this party started!");

const $form = $("#search-form");
const $searchInput = $("#search-input");

// Add event listener for submitting the form
$form.on("submit", function(evt) {
    evt.preventDefault();

    getGifURL($searchInput.val());
    $searchInput.val("");

})

/** Search for a random GIF using the given search term and return its URL. */
async function getGifURL(searchTerm) {
    const getRes = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "g34JBy4NPfyJgqBiQ4LwU0bQFXySDlg0",
            q: searchTerm
        }});

    const foundGifs = getRes.data.data;

    if (foundGifs.length > 0) {
        const randIdx = Math.floor(Math.random() * foundGifs.length);
        return foundGifs[randIdx].url;
    }

    return null;
}
