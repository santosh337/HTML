

let button = document.getElementById("searchButton");
let search = document.getElementById("searchInput");
let avatar = document.getElementById('avatar')

button.addEventListener('click',getUserByName)



async function getUserByName() {
    console.log(search.value);
    let baseUrl = "https://api.github.com/users/" + search.value
    let response = await fetch(baseUrl)
    let json = await response.json()

    console.log(json);

    console.log(json.name)
    alert(json.name)
    let getImg = `<img scr="${json.avatar_url}">`
    avatar.innerHTML = getImg
    console.log(json.avatar_url)

}



const loadImage = url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img); // resolve the promise if the image has been successfully loaded
      img.onerror = () => reject(); // else reject the promise
      img.src = url; // set the source only after the event handlers have been set
    });
  };
  
  const renderImages = async () => {
     try {
       const loadedImages = await Promise.all(imgs.map(loadImage));
       const frag = document.createDocumentFragment();
       frag.append(...loadedImages);
       container.appendChild(frag); 
     } catch {
       console.error("Couldn't render the images");
     }
  };

