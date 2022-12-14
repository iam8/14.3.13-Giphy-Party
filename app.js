// Ioana Alex Mititean
// 11/17/22
// 14.3.13: Giphy Party Exercise

console.log("Let's get this party started!");

const $form = $("#search-form");
const $searchInput = $("#search-input");
const $removeBtn = $("#remove-gifs");
const $gifSection = $("#gif-section");

/** When form is submitted, add a GIF to the page (if found). */
$form.on("submit", async function(evt) {
    evt.preventDefault();

    const gifURL = await getGifURL($searchInput.val());
    $searchInput.val("");

    if (gifURL) {
        const $gifDiv = $("<div>", {class: "single-gif-container"});
        $gifDiv.append($("<img>", {src: gifURL}));
        $gifSection.append($gifDiv);
    } else {
        alert("No GIF was found for that search term.");
    }
})

/** Search for a random GIF using the given search term and return its original URL. */
async function getGifURL(searchTerm) {
    const getRes = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "g34JBy4NPfyJgqBiQ4LwU0bQFXySDlg0",
            q: searchTerm
        }});

    const foundGifs = getRes.data.data;

    if (foundGifs.length > 0) {
        const randIdx = Math.floor(Math.random() * foundGifs.length);
        return foundGifs[randIdx].images.original.url;
    }

    return null;
}

/** Remove all GIFs from the page when the 'Remove images' button is clicked. */
$removeBtn.on("click", function() {
    $gifSection.empty();
})

