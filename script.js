if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    console.log("Service worker registered");
  });
}

const songsContainer = document.getElementById("songs-container");

const renderSongList = async () => {
  const response = await fetch(
    "https://glb-backend-production.up.railway.app/api/songs?sort=singer&limit=40"
  );
  const data = await response.json();

  data?.data.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.className = "song";
    songElement.innerHTML = `
            <h3>${song.singer}&nbsp;</h3>-<p>&nbsp;${song.name}</p>
        `;
    songsContainer.appendChild(songElement);
  });
};

renderSongList();
