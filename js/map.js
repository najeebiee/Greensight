export const map = `
  <div class="map-page-container">
    <div id="mapid"></div>
  </div>
`;

// --- JavaScript Logic to Initialize the Map ---
// Call this AFTER rendering the map tab
export function initMap() {
  const mapElement = document.getElementById('mapid');
  if (!mapElement) return;

  // Prevent re-initializing the map
  if (mapElement._leaflet_id) {
    return;
  }
  
  // Create map centered on Davao City
  const map = L.map('mapid').setView([7.0780, 125.6080], 13);

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // This tells the map to re-evaluate its size after the browser has rendered the container.
  setTimeout(() => {
    map.invalidateSize();
  }, 0);

  // Expanded data points for Davao City eWaste Bins
 const locations = [
    {
      coords: [7.0673, 125.6081],
      title: "eWaste Bin #101 - People's Park",
      desc: "Status: 68% full (Batteries, Phones)",
      address: "Uyangguren, Poblacion District, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/f97316/ffffff?text=eWaste",
      likes: 45,
      comments: 18,
      rating: 4.5
    },
    {
      coords: [7.0983, 125.6315],
      title: "eWaste Bin #102 - SM Lanang",
      desc: "Status: 85% full (Laptops, Chargers)",
      address: "SM Lanang Premier, J.P. Laurel Ave, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/ef4444/ffffff?text=eWaste",
      likes: 92,
      comments: 34,
      rating: 4.8
    },
    {
        coords: [7.0609, 125.6053],
        title: "eWaste Bin #103 - Gaisano Mall",
        desc: "Status: 40% full (Mixed Small Electronics)",
        address: "J.P. Laurel Ave, Bajada, Davao City",
        phone: "N/A",
        img: "https://placehold.co/80x80/22c55e/ffffff?text=eWaste",
        likes: 61,
        comments: 22,
        rating: 4.3
    },
    {
        coords: [7.0722, 125.6128],
        title: "eWaste Bin #104 - Ateneo de Davao",
        desc: "Status: 25% full (Circuit Boards, Cables)",
        address: "E. Jacinto Street, Poblacion District, Davao City",
        phone: "N/A",
        img: "https://placehold.co/80x80/22c55e/ffffff?text=eWaste",
        likes: 38,
        comments: 15,
        rating: 4.1
    },
    {
        coords: [7.1158, 125.6472],
        title: "eWaste Bin #105 - Damosa IT Park",
        desc: "Status: 95% full (Office Electronics) - CRITICAL",
        address: "J.P. Laurel Ave, Buhangin, Davao City",
        phone: "N/A",
        img: "https://placehold.co/80x80/ef4444/ffffff?text=eWaste",
        likes: 112,
        comments: 41,
        rating: 4.9
    },
    {
      coords: [7.0863, 125.6119],
      title: "eWaste Bin #106 - Abreeza Mall",
      desc: "Status: 75% full (Mixed Electronics)",
      address: "J.P. Laurel Ave, Bajada, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/f97316/ffffff?text=eWaste",
      likes: 78,
      comments: 29,
      rating: 4.6
    },
    {
      coords: [7.0515, 125.5915],
      title: "eWaste Bin #107 - SM City Ecoland",
      desc: "Status: 90% full (Power Banks, Phones) - High",
      address: "Quimpo Blvd, Ecoland, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/ef4444/ffffff?text=eWaste",
      likes: 105,
      comments: 38,
      rating: 4.7
    },
    {
      coords: [7.1136, 125.5714],
      title: "eWaste Bin #108 - UP Mindanao",
      desc: "Status: 15% full (Lab Equipment, Wires)",
      address: "Mintal, Tugbok District, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/22c55e/ffffff?text=eWaste",
      likes: 22,
      comments: 9,
      rating: 4.0
    },
    {
      coords: [7.0683, 125.6091],
      title: "eWaste Bin #109 - Davao City Hall",
      desc: "Status: 55% full (Keyboards, Mice)",
      address: "San Pedro St, Poblacion District, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/f97316/ffffff?text=eWaste",
      likes: 53,
      comments: 25,
      rating: 4.4
    },
    {
      coords: [7.1256, 125.6456],
      title: "eWaste Bin #110 - Davao Airport",
      desc: "Status: 88% full (Confiscated Electronics)",
      address: "Daang Maharlika Hwy, Buhangin, Davao City",
      phone: "N/A",
      img: "https://placehold.co/80x80/ef4444/ffffff?text=eWaste",
      likes: 85,
      comments: 31,
      rating: 4.6
    }
  ];

  // Custom marker icon using your local SVG file
  const customIcon = L.icon({
    iconUrl: 'assets/Pin.svg', // --- KEY CHANGE IS HERE ---
    iconSize: [40, 40], // Adjust size as needed
    iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
  });

  // Add markers
  locations.forEach(loc => {
    const popupContent = `
      <div class="popup-card">
        <img src="${loc.img}" alt="${loc.title}" class="popup-img">
        <div class="popup-info">
          <h3>${loc.title}</h3>
          <p class="popup-desc">${loc.desc}</p>
          <p class="popup-address"><strong>${loc.address}</strong></p>
          <div class="popup-footer">
            <button class="popup-btn">👍 ${loc.likes}</button>
            <button class="popup-btn">💬 ${loc.comments}</button>
            <span class="popup-rating">⭐ ${loc.rating}</span>
          </div>
        </div>
      </div>
    `;

    L.marker(loc.coords, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent);
  });
}
