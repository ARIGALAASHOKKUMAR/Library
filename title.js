let input = document.getElementById("searchInput");

let result = document.getElementById("searchResults");

let heading = document.getElementById("heading");

let spinner = document.getElementById("spinner");

let bg=[""]


function total_data(item) {
    let name = item.title;

    let img_link = item.imageLink;

    let writer = item.author;

    let child_div = document.createElement("div")
    child_div.classList.add("col-6","col-md-4","col-lg-3")
    result.appendChild(child_div)
    let img = document.createElement("img")
    child_div.appendChild(img)
    img.src = img_link;

    let author = document.createElement("p")
    child_div.appendChild(author);
    author.textContent = writer;

}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        result.textContent="";
        spinner.classList.remove("d-none")
        let book = input.value;
        input.value=""
        let type = {
            method: "GET"
        }
        let url = "https://apis.ccbp.in/book-store?title="+book;
        fetch(url, type)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                spinner.classList.add("d-none")
                console.log(jsonData)
                let {
                    search_results
                } = jsonData //Object destructing
                for (let item of search_results) {
                    let f_title = item.title;
                    heading.textContent = "Popular Books";
                    total_data(item)
                }
            })
    }
})