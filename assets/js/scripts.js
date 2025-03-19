document.addEventListener("DOMContentLoaded", function() {

    var parentDomain = window.location.hostname;



    var iframe1 = document.getElementById("twitch-iframe1");
    if (iframe1) {
        var channel1 = "awesomeprice";
        iframe1.src = `https://player.twitch.tv/?channel=${channel1}&parent=${parentDomain}&muted=true`;
    }

    var iframe2 = document.getElementById("twitch-iframe2");
    if (iframe2) {
        var channel2 = "kann3j";
        iframe2.src = `https://player.twitch.tv/?channel=${channel2}&parent=${parentDomain}&muted=true`;
    }

    // Bezoekersaantal bijwerken met localStorage
    var visitorCountElement = document.getElementById("visitor-count");
    var visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = visitorCount;

    // Dynamisch extra pagina's toevoegen aan de navigatiebalk
    var navList = document.getElementById("nav-list");
    var extraPages = [
        { name: "Gallery", url: "gallery.html" },
        // { name: "Blog", url: "blog.html" }
    ];

    extraPages.forEach(function(page) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = page.url;
        a.textContent = page.name;
        li.appendChild(a);
        navList.appendChild(li);
    });

    // Dynamisch afbeeldingen toevoegen aan de galerij
    var gallery = document.getElementById("gallery");
    var imageFolder = './assets/images/gallery/';

    fetch(imageFolder + 'images.txt')
        .then(response => response.text())
        .then(text => {
            const images = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
            images.forEach(function(image) {
                var imgDiv = document.createElement('div');
                imgDiv.className = 'gallery-item';
                var img = document.createElement('img');
                img.src = imageFolder + image;
                img.alt = image;
                imgDiv.appendChild(img);
                gallery.appendChild(imgDiv);
            });

            // Lightbox functionaliteit
            var lightbox = document.getElementById("lightbox");
            var lightboxImg = document.getElementById("lightbox-img");
            var close = document.getElementsByClassName("close")[0];

            document.querySelectorAll('.gallery-item img').forEach(function(img) {
                img.addEventListener('click', function() {
                    lightbox.style.display = "block";
                    lightboxImg.src = this.src;
                });
            });

            close.addEventListener('click', function() {
                lightbox.style.display = "none";
            });

            lightbox.addEventListener('click', function(event) {
                if (event.target == lightbox) {
                    lightbox.style.display = "none";
                }
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});