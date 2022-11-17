// Ioana Alex Mititean
// 11/17/22
// 14.3.13: Giphy Party Exercise

console.log("Let's get this party started!");

const $form = $("#search-form");
const $searchInput = $("#search-input");

// Add event listener for submitting the form
$form.on("submit", function(evt) {
    evt.preventDefault();

    searchForGif($searchInput.val());
    $searchInput.val("");

})

async function searchForGif(searchTerm) {
    const getRes = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "g34JBy4NPfyJgqBiQ4LwU0bQFXySDlg0",
            q: searchTerm
        }});

        console.log(getRes.data.data[0]);
}
