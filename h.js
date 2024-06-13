function mySearch(){
    let textToSearch = document.getElementById("text-to-search").value;
    let paragrph = document.getElementById("paragraph");

    textToSearch = textToSearch.replace(/[.*+?^$${}()|[\]\\]/g, "\\$&")

     let pattern = new RegExp(`${textToSearch}`, "gi");
     paragrph.innerHTML = paragrph.textContent.replace(pattern , match => `<mark>${match}</mark>`)
}