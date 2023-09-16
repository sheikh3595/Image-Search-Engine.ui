const searchForm = document.getElementById("search-form")
    const searchBox = document.getElementById('search-box')
    const searchResult = document.getElementById('search-result')
    const searchMore = document.getElementById('show-more')

    let key = '';
    let page = 1;

   async function searchImage(){
    key = searchBox.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=oouosft-YSS7s98X7GpGtCgOByVWkkHtbu8npGKs1Ms&per_page=16`;

        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        if(page === 1){
            searchResult.innerHTML = "";
        }

        results.map((result) =>{
            const Image = document.createElement("img");
            Image.src = result.urls.small;

            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';

            imageLink.appendChild(Image);
            searchResult.appendChild(imageLink);
        })
        searchMore.style.display = "block";
    }

    searchForm.addEventListener('submit', (error) =>{
        error.preventDefault();
        page = 1;
        searchImage();
    })
    
    searchMore.addEventListener('click', () => {
        page++;
        searchImage();
    })