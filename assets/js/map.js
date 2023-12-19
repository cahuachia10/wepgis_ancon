var map = L.map('map', {
    center: [-11.771501, -77.172130],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-11.810087,-77.206846], [-11.654114,-77.059856]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }); 
googleSat.addTo(map);L.control.scale().addTo(map);
L.marker([-12.046631, -77.030037],{draggable: true}).addTo(map);
var circle = L.circle([-12.046631, -77.030037], { color: 'red', fillColor: '#33ECFF', fillOpacity: 0.5, radius: 50 }).addTo(map);

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }); 
googleStreets.addTo(map);


var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:colegios", //gisweb:centros educativos lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:mercados", //gisweb:centros comerciales lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:farmacias", //gisweb:centros salud lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);


var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:hoteles", //gisweb:centros comerciales lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var comisarias = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:comisarias", //gisweb:comisarias lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:restaurantes", //gisweb:centros comerciales lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var ancon = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:distrito_ancon", //gisweb:distrio ancon
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    ancon.addTo(map);

    var lima = L.tileLayer.wms("http://localhost:8080/geoserver/wepgis_ancon/wms?", {
	   layers: "wepgis_ancon:distritos_lima", //gisweb:departamento lima
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
    lima.addTo(map);
    
var baseMaps = {
    "OSM": basemapOSM,
    "google Satelite": googleSat,
    "google Streets": googleStreets
};

var overlayMaps = {
    "colegios ancon": colegios,
    "mercados ancon": mercados,
	"restaurantes ancon": restaurantes,
	"comisarias ancon": comisarias,
	"hoteles ancon": hoteles,
	"farmacias ancon": farmacias,
    "distrito ancon": ancon,
    "departamento lima": lima
    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
