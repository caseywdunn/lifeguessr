let videos = [];
document.getElementById("start-button").addEventListener("click", function() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            videos = data;
            document.getElementById("landing-page").style.display = "none";
            document.getElementById("game-interface").style.display = "block";
            loadVideo(0);
        })
        .catch(error => {
            console.error('Error loading video data:', error);
        });
});

let currentVideoIndex = 0;

function loadVideo(index) {
    if (index < videos.length) {
        const video = videos[index];
        const videoURLWithSettings = `${video.url}?start=${video.start}&autoplay=1&mute=1&modestbranding=1`;
        
        const overlay = document.getElementById("video-overlay");
        overlay.style.display = "flex";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 4000); // Hide for a few seconds so that overlay is not reveled

        document.getElementById("video-frame").src = videoURLWithSettings;
        document.getElementById("info-panel").style.display = "none";
    } else {
        console.error('Video index out of range');
    }
}




document.getElementById("reveal-button").addEventListener("click", function() {
    if (currentVideoIndex < videos.length) {
        const video = videos[currentVideoIndex];
        document.getElementById("organism-info").textContent = "Organism: " + video.organism;

        // Create a hyperlink for the NCBI Taxon ID
        const ncbiLink = "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=" + video.ncbiTaxonId;
        document.getElementById("ncbi-info").innerHTML = "NCBI Taxonomy ID: <a href='" + ncbiLink + "' target='_blank'>" + video.ncbiTaxonId + "</a>";

        document.getElementById("ncbi-taxon-string-info").textContent = "NCBI Taxonomy: " + video.ncbiTaxonString;
        document.getElementById("notes-info").textContent = "Notes: " + video.notes;
        document.getElementById("info-panel").style.display = "block";
    }
});



document.getElementById("next-button").addEventListener("click", function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
});
