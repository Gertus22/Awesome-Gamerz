document.addEventListener("DOMContentLoaded", function() {
    
    var parentDomain = window.location.hostname;

    // var iframe = document.getElementById("twitch-iframe");
    // var videoId = "2364316732";
    // var startTime = "02h07m38s";
    // iframe.src = `https://player.twitch.tv/?video=${videoId}&t=${startTime}&parent=${parentDomain}&muted=true`;


    var iframe1 = document.getElementById("twitch-iframe1");
    var channel1 = "awesomeprice"; // Twitch-gebruikersnaam van de eerste streamer
    iframe1.src = `https://player.twitch.tv/?channel=${channel1}&parent=${parentDomain}&muted=true`;

    var iframe2 = document.getElementById("twitch-iframe2");
    var channel2 = "kann3j"; // Twitch-gebruikersnaam van de tweede streamer
    iframe2.src = `https://player.twitch.tv/?channel=${channel2}&parent=${parentDomain}&muted=true`;

    // Bezoekersaantal bijwerken met localStorage
    var visitorCountElement = document.getElementById("visitor-count");
    var visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = visitorCount;
});

