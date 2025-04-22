function searchDino() {
  
    const dinoName = document.getElementById("dinoInput").value.trim();
    const imageEl = document.getElementById("dinoImage");
  
  
    imageEl.style.display = "none";
  
    if (dinoName === "") {
      return;
    }
  
    
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(dinoName)}`)
      .then(response => response.json())
      .then(data => {
      
        if (data.thumbnail && data.thumbnail.source) {
          imageEl.src = data.thumbnail.source;
          imageEl.style.display = "block"; 
        } else {
          imageEl.style.display = "none";
        }
      })
      .catch(error => {
        console.error("Gabim gjatë kërkimit:", error);
        imageEl.style.display = "none";
      });
  }
  