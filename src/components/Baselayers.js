/*
Baselayers.js
Parameters: "map" - instantiated Leaflet map; "maxZoom" - numerical value 
Return: "baseLayers" - object containing values for Leaflet map tiles 
*/

export function BaseLayers(map, maxZoom) {
    // add your name and the year the project was made here
    const names = "MWZapata, DKValerio, NCHabana";
    const year = 2024;

    // const devs = ` | <a href="https://weri.uog.edu/"><img src="./src/assets/WERI-Logo.ico" style="height: 15px;"/> WERI</a> - <a href="https://guamhydrologicsurvey.uog.edu/">GHS</a>: ${names} ${year}`;
    
    const devs = ` | <a href="https://weri.uog.edu/">WERI</a> - <a href="https://guamhydrologicsurvey.uog.edu/">GHS</a>: ${names} ${year}`;

    // Open Street Map layer 
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: maxZoom, 
        attribution: '© OpenStreetMap' + devs,
    }).addTo(map)

    // ESRI World Street Map 
    const ewsp = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: maxZoom,
        attribution: 'Tiles &copy; Esri' + devs,
    })

    // ESRI World Topo Map 
    const ewtm = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: maxZoom, 
        attribution: 'Tiles &copy; Esri' + devs,
    });

    // ESRI World Imagery 
    const ewi = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: maxZoom,
        attribution: 'Tiles &copy; Esri' + devs,
    }); 

    // ESRI World Gray Canvas 
    var ewgc = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri' + devs,
        maxZoom: maxZoom,
    });

    // container for all baselayers 
    const baseLayers = {
        'Open Street Map': osm,
        'ESRI World Imagery': ewi,
        'ESRI World Topo Map': ewtm,
        'ESRI World Street Map': ewsp,
        'ESRI World Gray Canvas': ewgc,
    }

    return baseLayers;
}