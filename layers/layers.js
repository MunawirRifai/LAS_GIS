var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasDesaterbaruMaret2020_1 = new ol.format.GeoJSON();
var features_BatasDesaterbaruMaret2020_1 = format_BatasDesaterbaruMaret2020_1.readFeatures(json_BatasDesaterbaruMaret2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaterbaruMaret2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaterbaruMaret2020_1.addFeatures(features_BatasDesaterbaruMaret2020_1);
var lyr_BatasDesaterbaruMaret2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaterbaruMaret2020_1, 
                style: style_BatasDesaterbaruMaret2020_1,
                popuplayertitle: "Batas Desa terbaru Maret 2020",
                interactive: true,
                title: '<img src="styles/legend/BatasDesaterbaruMaret2020_1.png" /> Batas Desa terbaru Maret 2020'
            });
var format_museum_2 = new ol.format.GeoJSON();
var features_museum_2 = format_museum_2.readFeatures(json_museum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_museum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_museum_2.addFeatures(features_museum_2);
var lyr_museum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_museum_2, 
                style: style_museum_2,
                popuplayertitle: "museum",
                interactive: true,
    title: 'museum<br />\
    <img src="styles/legend/museum_2_0.png" /> GEDUNG INDONESIA MENGGUGAT<br />\
    <img src="styles/legend/museum_2_1.png" /> HALL OF FAME JAWA BARAT - PANGGUNG INOHONG<br />\
    <img src="styles/legend/museum_2_2.png" /> MUSEUM 3D<br />\
    <img src="styles/legend/museum_2_3.png" /> MUSEUM BARLI<br />\
    <img src="styles/legend/museum_2_4.png" /> MUSEUM BIO FARMA<br />\
    <img src="styles/legend/museum_2_5.png" /> MUSEUM BUMI PAKARANG SASUHUNAN<br />\
    <img src="styles/legend/museum_2_6.png" /> MUSEUM GEDUNG SATE<br />\
    <img src="styles/legend/museum_2_7.png" /> MUSEUM GEOLOGI BANDUNG<br />\
    <img src="styles/legend/museum_2_8.png" /> MUSEUM KEBUDAYAAN TIONGHOA<br />\
    <img src="styles/legend/museum_2_9.png" /> MUSEUM KONFERENSI ASIA AFRIKA<br />\
    <img src="styles/legend/museum_2_10.png" /> MUSEUM KOTA BANDUNG<br />\
    <img src="styles/legend/museum_2_11.png" /> MUSEUM LAPAS BANCEUY<br />\
    <img src="styles/legend/museum_2_12.png" /> MUSEUM MAINAN<br />\
    <img src="styles/legend/museum_2_13.png" /> MUSEUM MANDALA WANGSIT SILIWANGI<br />\
    <img src="styles/legend/museum_2_14.png" /> MUSEUM NIKE ARDILLA<br />\
    <img src="styles/legend/museum_2_15.png" /> MUSEUM PENDIDIKAN NASIONAL<br />\
    <img src="styles/legend/museum_2_16.png" /> MUSEUM PERJUANGAN RAKYAT JAWA BARAT<br />\
    <img src="styles/legend/museum_2_17.png" /> MUSEUM POS INDONESIA<br />\
    <img src="styles/legend/museum_2_18.png" /> MUSEUM PREANGER<br />\
    <img src="styles/legend/museum_2_19.png" /> MUSEUM SRI BADUGA<br />\
    <img src="styles/legend/museum_2_20.png" /> MUSEUM VIRAJATI SESKOAD<br />\
    <img src="styles/legend/museum_2_21.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasDesaterbaruMaret2020_1.setVisible(true);lyr_museum_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasDesaterbaruMaret2020_1,lyr_museum_2];
lyr_BatasDesaterbaruMaret2020_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_museum_2.set('fieldAliases', {'id': 'id', 'kode_provi': 'kode_provi', 'nama_provi': 'nama_provi', 'bps_kode_k': 'bps_kode_k', 'bps_nama_k': 'bps_nama_k', 'nama_museu': 'nama_museu', 'alamat': 'alamat', 'tahun': 'tahun', 'lattitude': 'lattitude', 'longitude': 'longitude', 'foto': 'foto', });
lyr_BatasDesaterbaruMaret2020_1.set('fieldImages', {'OBJECTID': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'KDPKAB': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_museum_2.set('fieldImages', {'id': 'TextEdit', 'kode_provi': 'TextEdit', 'nama_provi': 'TextEdit', 'bps_kode_k': 'TextEdit', 'bps_nama_k': 'TextEdit', 'nama_museu': 'TextEdit', 'alamat': 'TextEdit', 'tahun': 'TextEdit', 'lattitude': 'TextEdit', 'longitude': 'TextEdit', 'foto': 'ExternalResource', });
lyr_BatasDesaterbaruMaret2020_1.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'KDPKAB': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_museum_2.set('fieldLabels', {'id': 'no label', 'kode_provi': 'no label', 'nama_provi': 'no label', 'bps_kode_k': 'no label', 'bps_nama_k': 'no label', 'nama_museu': 'no label', 'alamat': 'no label', 'tahun': 'no label', 'lattitude': 'no label', 'longitude': 'no label', 'foto': 'no label', });
lyr_museum_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});