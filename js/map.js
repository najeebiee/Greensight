export const map = `
    <div id="mapid"></div>
`;

// Call this AFTER rendering the map tab
export function initMap() {
  // Create map
  const map = L.map('mapid').setView([40.73061, -73.935242], 11); // NYC coords

  // Add tile layer (Mapbox style or OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Example data points
  const locations = [
    {
      coords: [40.7648, -73.9808],
      title: "The Peninsula New York",
      desc: "Selecting The Right Hotel, Add File, Interface Design to Stage 1",
      address: "Chicago, IL 60622, 249 Jonathan Extension",
      phone: "492-377-6526",
      img: "https://via.placeholder.com/60", // Replace with real
      likes: 30,
      comments: 55,
      rating: 5.7
    },
    {
      coords: [40.85, -73.87],
      title: "Bin Location A",
      desc: "Recycling bin status: 70% full",
      address: "Bronx, NY",
      phone: "123-456-7890",
      img: "https://via.placeholder.com/60",
      likes: 15,
      comments: 20,
      rating: 4.2
    }
  ];

  // Custom marker icons
  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your own pin
    iconSize: [35, 35],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
  });

  // Add markers
  locations.forEach(loc => {
    const popupContent = `
      <div class="popup-card">
        <img src="${loc.img}" alt="${loc.title}">
        <div class="popup-info">
          <h3>${loc.title}</h3>
          <p>${loc.desc}</p>
          <p><strong>${loc.address}</strong><br>${loc.phone}</p>
          <div class="popup-footer">
            <button>👍 ${loc.likes}</button>
            <button>💬 ${loc.comments}</button>
            <span>⭐ ${loc.rating}</span>
          </div>
        </div>
      </div>
    `;

    L.marker(loc.coords, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent);
  });
}

