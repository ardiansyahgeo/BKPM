var wms_layers = [];


        var lyr_SATELIT_GOOGLE_0 = new ol.layer.Tile({
            'title': 'SATELIT_GOOGLE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_googlestreet_1 = new ol.layer.Tile({
            'title': 'googlestreet',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_WIUP_2 = new ol.format.GeoJSON();
var features_WIUP_2 = format_WIUP_2.readFeatures(json_WIUP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_2.addFeatures(features_WIUP_2);
var lyr_WIUP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WIUP_2, 
                style: style_WIUP_2,
                interactive: true,
    title: 'WIUP<br />\
    <img src="styles/legend/WIUP_2_0.png" /> IPR<br />\
    <img src="styles/legend/WIUP_2_1.png" /> IUP<br />\
    <img src="styles/legend/WIUP_2_2.png" /> IUPK<br />\
    <img src="styles/legend/WIUP_2_3.png" /> KK<br />\
    <img src="styles/legend/WIUP_2_4.png" /> PKP2B<br />\
    <img src="styles/legend/WIUP_2_5.png" /> WIUP<br />\
    <img src="styles/legend/WIUP_2_6.png" /> WIUPK<br />'
        });
var lyr_KlusterPotensiBatubara_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kluster Potensi Batubara",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KlusterPotensiBatubara_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10677439.964957, -923228.792021, 15688598.162507, 549182.441634]
                            })
                        });
var format_TotalCadanganPotensiBatuBara_4 = new ol.format.GeoJSON();
var features_TotalCadanganPotensiBatuBara_4 = format_TotalCadanganPotensiBatuBara_4.readFeatures(json_TotalCadanganPotensiBatuBara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalCadanganPotensiBatuBara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalCadanganPotensiBatuBara_4.addFeatures(features_TotalCadanganPotensiBatuBara_4);
var lyr_TotalCadanganPotensiBatuBara_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalCadanganPotensiBatuBara_4, 
                style: style_TotalCadanganPotensiBatuBara_4,
                interactive: true,
    title: 'Total Cadangan Potensi BatuBara<br />\
    <img src="styles/legend/TotalCadanganPotensiBatuBara_4_0.png" /> 0 - 0<br />\
    <img src="styles/legend/TotalCadanganPotensiBatuBara_4_1.png" /> 0 - 0,81<br />\
    <img src="styles/legend/TotalCadanganPotensiBatuBara_4_2.png" /> 0,81 - 4,18<br />\
    <img src="styles/legend/TotalCadanganPotensiBatuBara_4_3.png" /> 4,18 - 16,41<br />\
    <img src="styles/legend/TotalCadanganPotensiBatuBara_4_4.png" /> 16,41 - 1979,69<br />'
        });
var format_PotensiTimah_5 = new ol.format.GeoJSON();
var features_PotensiTimah_5 = format_PotensiTimah_5.readFeatures(json_PotensiTimah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiTimah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiTimah_5.addFeatures(features_PotensiTimah_5);
var lyr_PotensiTimah_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiTimah_5, 
                style: style_PotensiTimah_5,
                interactive: true,
                title: '<img src="styles/legend/PotensiTimah_5.png" /> Potensi Timah'
            });
var format_PotensiBauksit_6 = new ol.format.GeoJSON();
var features_PotensiBauksit_6 = format_PotensiBauksit_6.readFeatures(json_PotensiBauksit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiBauksit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiBauksit_6.addFeatures(features_PotensiBauksit_6);
var lyr_PotensiBauksit_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiBauksit_6, 
                style: style_PotensiBauksit_6,
                interactive: true,
                title: '<img src="styles/legend/PotensiBauksit_6.png" /> Potensi Bauksit'
            });
var format_PotensiBesi_7 = new ol.format.GeoJSON();
var features_PotensiBesi_7 = format_PotensiBesi_7.readFeatures(json_PotensiBesi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiBesi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiBesi_7.addFeatures(features_PotensiBesi_7);
var lyr_PotensiBesi_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiBesi_7, 
                style: style_PotensiBesi_7,
                interactive: true,
                title: '<img src="styles/legend/PotensiBesi_7.png" /> Potensi Besi'
            });
var format_PotensiNikel_8 = new ol.format.GeoJSON();
var features_PotensiNikel_8 = format_PotensiNikel_8.readFeatures(json_PotensiNikel_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiNikel_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiNikel_8.addFeatures(features_PotensiNikel_8);
var lyr_PotensiNikel_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiNikel_8, 
                style: style_PotensiNikel_8,
                interactive: true,
                title: '<img src="styles/legend/PotensiNikel_8.png" /> Potensi Nikel'
            });
var format_PotensiTembaga_9 = new ol.format.GeoJSON();
var features_PotensiTembaga_9 = format_PotensiTembaga_9.readFeatures(json_PotensiTembaga_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiTembaga_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiTembaga_9.addFeatures(features_PotensiTembaga_9);
var lyr_PotensiTembaga_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiTembaga_9, 
                style: style_PotensiTembaga_9,
                interactive: true,
                title: '<img src="styles/legend/PotensiTembaga_9.png" /> Potensi Tembaga'
            });
var format_LokasiSmelter_10 = new ol.format.GeoJSON();
var features_LokasiSmelter_10 = format_LokasiSmelter_10.readFeatures(json_LokasiSmelter_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiSmelter_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiSmelter_10.addFeatures(features_LokasiSmelter_10);
var lyr_LokasiSmelter_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiSmelter_10, 
                style: style_LokasiSmelter_10,
                interactive: true,
    title: 'Lokasi Smelter<br />\
    <img src="styles/legend/LokasiSmelter_10_0.png" /> bauksit<br />\
    <img src="styles/legend/LokasiSmelter_10_1.png" /> besi<br />\
    <img src="styles/legend/LokasiSmelter_10_2.png" /> mangan<br />\
    <img src="styles/legend/LokasiSmelter_10_3.png" /> nikel<br />\
    <img src="styles/legend/LokasiSmelter_10_4.png" /> seng<br />\
    <img src="styles/legend/LokasiSmelter_10_5.png" /> tembaga<br />\
    <img src="styles/legend/LokasiSmelter_10_6.png" /> timbal<br />'
        });

lyr_SATELIT_GOOGLE_0.setVisible(true);lyr_googlestreet_1.setVisible(true);lyr_WIUP_2.setVisible(false);lyr_KlusterPotensiBatubara_3.setVisible(false);lyr_TotalCadanganPotensiBatuBara_4.setVisible(false);lyr_PotensiTimah_5.setVisible(false);lyr_PotensiBauksit_6.setVisible(false);lyr_PotensiBesi_7.setVisible(false);lyr_PotensiNikel_8.setVisible(false);lyr_PotensiTembaga_9.setVisible(false);lyr_LokasiSmelter_10.setVisible(false);
var layersList = [lyr_SATELIT_GOOGLE_0,lyr_googlestreet_1,lyr_WIUP_2,lyr_KlusterPotensiBatubara_3,lyr_TotalCadanganPotensiBatuBara_4,lyr_PotensiTimah_5,lyr_PotensiBauksit_6,lyr_PotensiBesi_7,lyr_PotensiNikel_8,lyr_PotensiTembaga_9,lyr_LokasiSmelter_10];
lyr_WIUP_2.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_TotalCadanganPotensiBatuBara_4.set('fieldAliases', {'objectid': 'objectid', 'no': 'no', 'idbb': 'idbb', 'namobj': 'namobj', 'sumberdata': 'sumberdata', 'lokasikhas': 'lokasikhas', 'klsbb': 'klsbb', 'kriteria': 'kriteria', 'hipotetik': 'hipotetik', 'tereka': 'tereka', 'tertunjuk': 'tertunjuk', 'terukur': 'terukur', 'total_sd': 'total_sd', 'terkira': 'terkira', 'terbukti': 'terbukti', 'total_cada': 'total_cada', 'sumber_lap': 'sumber_lap', 'acuan': 'acuan', 'lokasi': 'lokasi', 'update_': 'update_', 'statdikbb': 'statdikbb', 'idinstansi': 'idinstansi', 'provinsi': 'provinsi', 'kabupaten': 'kabupaten', 'pulau': 'pulau', 'remark': 'remark', 'status': 'status', });
lyr_PotensiTimah_5.set('fieldAliases', {'objectid': 'objectid', 'idlgm': 'idlgm', 'namobj': 'namobj', 'jnskom': 'jnskom', 'lbunsur': 'lbunsur', 'kellgm': 'kellgm', 'lokasilgm': 'lokasilgm', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'statdiklgm': 'statdiklgm', 'metadata': 'metadata', 'srs_id': 'srs_id', 'bjhhip': 'bjhhip', 'loghip': 'loghip', 'bjhtrka': 'bjhtrka', 'logtrka': 'logtrka', 'bjhtjuk': 'bjhtjuk', 'logtjuk': 'logtjuk', 'bjhtkur': 'bjhtkur', 'logtkur': 'logtkur', 'bjhtkira': 'bjhtkira', 'logtkira': 'logtkira', 'bjhtbkt': 'bjhtbkt', 'logtbkt': 'logtbkt', 'remark': 'remark', 'acuan': 'acuan', 'status_dat': 'status_dat', 'keterangan': 'keterangan', });
lyr_PotensiBauksit_6.set('fieldAliases', {'objectid': 'objectid', 'idlgm': 'idlgm', 'namobj': 'namobj', 'jnskom': 'jnskom', 'lbunsur': 'lbunsur', 'kellgm': 'kellgm', 'lokasilgm': 'lokasilgm', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'statdiklgm': 'statdiklgm', 'metadata': 'metadata', 'srs_id': 'srs_id', 'bjhhip': 'bjhhip', 'loghip': 'loghip', 'bjhtrka': 'bjhtrka', 'logtrka': 'logtrka', 'bjhtjuk': 'bjhtjuk', 'logtjuk': 'logtjuk', 'bjhtkur': 'bjhtkur', 'logtkur': 'logtkur', 'bjhtkira': 'bjhtkira', 'logtkira': 'logtkira', 'bjhtbkt': 'bjhtbkt', 'logtbkt': 'logtbkt', 'remark': 'remark', 'acuan': 'acuan', 'status_dat': 'status_dat', 'keterangan': 'keterangan', });
lyr_PotensiBesi_7.set('fieldAliases', {'objectid': 'objectid', 'idlgm': 'idlgm', 'namobj': 'namobj', 'jnskom': 'jnskom', 'lbunsur': 'lbunsur', 'kellgm': 'kellgm', 'lokasilgm': 'lokasilgm', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'statdiklgm': 'statdiklgm', 'metadata': 'metadata', 'srs_id': 'srs_id', 'bjhhip': 'bjhhip', 'loghip': 'loghip', 'bjhtrka': 'bjhtrka', 'logtrka': 'logtrka', 'bjhtjuk': 'bjhtjuk', 'logtjuk': 'logtjuk', 'bjhtkur': 'bjhtkur', 'logtkur': 'logtkur', 'bjhtkira': 'bjhtkira', 'logtkira': 'logtkira', 'bjhtbkt': 'bjhtbkt', 'logtbkt': 'logtbkt', 'remark': 'remark', 'acuan': 'acuan', 'status_dat': 'status_dat', 'keterangan': 'keterangan', });
lyr_PotensiNikel_8.set('fieldAliases', {'objectid': 'objectid', 'idlgm': 'idlgm', 'namobj': 'namobj', 'jnskom': 'jnskom', 'lbunsur': 'lbunsur', 'kellgm': 'kellgm', 'lokasilgm': 'lokasilgm', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'statdiklgm': 'statdiklgm', 'metadata': 'metadata', 'srs_id': 'srs_id', 'bjhhip': 'bjhhip', 'loghip': 'loghip', 'bjhtrka': 'bjhtrka', 'logtrka': 'logtrka', 'bjhtjuk': 'bjhtjuk', 'logtjuk': 'logtjuk', 'bjhtkur': 'bjhtkur', 'logtkur': 'logtkur', 'bjhtkira': 'bjhtkira', 'logtkira': 'logtkira', 'bjhtbkt': 'bjhtbkt', 'logtbkt': 'logtbkt', 'remark': 'remark', 'acuan': 'acuan', 'status_dat': 'status_dat', 'keterangan': 'keterangan', });
lyr_PotensiTembaga_9.set('fieldAliases', {'objectid': 'objectid', 'idlgm': 'idlgm', 'namobj': 'namobj', 'jnskom': 'jnskom', 'lbunsur': 'lbunsur', 'kellgm': 'kellgm', 'lokasilgm': 'lokasilgm', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'statdiklgm': 'statdiklgm', 'metadata': 'metadata', 'srs_id': 'srs_id', 'bjhhip': 'bjhhip', 'loghip': 'loghip', 'bjhtrka': 'bjhtrka', 'logtrka': 'logtrka', 'bjhtjuk': 'bjhtjuk', 'logtjuk': 'logtjuk', 'bjhtkur': 'bjhtkur', 'logtkur': 'logtkur', 'bjhtkira': 'bjhtkira', 'logtkira': 'logtkira', 'bjhtbkt': 'bjhtbkt', 'logtbkt': 'logtbkt', 'remark': 'remark', 'acuan': 'acuan', 'status_dat': 'status_dat', 'keterangan': 'keterangan', });
lyr_LokasiSmelter_10.set('fieldAliases', {'djmb.sde.S': 'djmb.sde.S', 'djmb.sde_1': 'djmb.sde_1', 'djmb.sde_2': 'djmb.sde_2', 'djmb.sde_3': 'djmb.sde_3', 'djmb.sde_4': 'djmb.sde_4', 'modi_prod_': 'modi_prod_', 'modi_pro_1': 'modi_pro_1', 'modi_pro_2': 'modi_pro_2', 'modi_pro_3': 'modi_pro_3', 'modi_pro_4': 'modi_pro_4', 'modi_pro_5': 'modi_pro_5', 'modi_pro_6': 'modi_pro_6', 'modi_pro_7': 'modi_pro_7', 'modi_pro_8': 'modi_pro_8', });
lyr_WIUP_2.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_TotalCadanganPotensiBatuBara_4.set('fieldImages', {'objectid': 'TextEdit', 'no': 'TextEdit', 'idbb': 'TextEdit', 'namobj': 'TextEdit', 'sumberdata': 'TextEdit', 'lokasikhas': 'TextEdit', 'klsbb': 'TextEdit', 'kriteria': 'TextEdit', 'hipotetik': 'TextEdit', 'tereka': 'TextEdit', 'tertunjuk': 'TextEdit', 'terukur': 'TextEdit', 'total_sd': 'TextEdit', 'terkira': 'TextEdit', 'terbukti': 'TextEdit', 'total_cada': 'TextEdit', 'sumber_lap': 'TextEdit', 'acuan': 'TextEdit', 'lokasi': 'TextEdit', 'update_': 'TextEdit', 'statdikbb': 'TextEdit', 'idinstansi': 'TextEdit', 'provinsi': 'TextEdit', 'kabupaten': 'TextEdit', 'pulau': 'TextEdit', 'remark': 'TextEdit', 'status': 'TextEdit', });
lyr_PotensiTimah_5.set('fieldImages', {'objectid': 'TextEdit', 'idlgm': 'TextEdit', 'namobj': 'TextEdit', 'jnskom': 'TextEdit', 'lbunsur': 'TextEdit', 'kellgm': 'TextEdit', 'lokasilgm': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'statdiklgm': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'bjhhip': 'TextEdit', 'loghip': 'TextEdit', 'bjhtrka': 'TextEdit', 'logtrka': 'TextEdit', 'bjhtjuk': 'TextEdit', 'logtjuk': 'TextEdit', 'bjhtkur': 'TextEdit', 'logtkur': 'TextEdit', 'bjhtkira': 'TextEdit', 'logtkira': 'TextEdit', 'bjhtbkt': 'TextEdit', 'logtbkt': 'TextEdit', 'remark': 'TextEdit', 'acuan': 'TextEdit', 'status_dat': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_PotensiBauksit_6.set('fieldImages', {'objectid': 'TextEdit', 'idlgm': 'TextEdit', 'namobj': 'TextEdit', 'jnskom': 'TextEdit', 'lbunsur': 'TextEdit', 'kellgm': 'TextEdit', 'lokasilgm': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'statdiklgm': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'bjhhip': 'TextEdit', 'loghip': 'TextEdit', 'bjhtrka': 'TextEdit', 'logtrka': 'TextEdit', 'bjhtjuk': 'TextEdit', 'logtjuk': 'TextEdit', 'bjhtkur': 'TextEdit', 'logtkur': 'TextEdit', 'bjhtkira': 'TextEdit', 'logtkira': 'TextEdit', 'bjhtbkt': 'TextEdit', 'logtbkt': 'TextEdit', 'remark': 'TextEdit', 'acuan': 'TextEdit', 'status_dat': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_PotensiBesi_7.set('fieldImages', {'objectid': 'TextEdit', 'idlgm': 'TextEdit', 'namobj': 'TextEdit', 'jnskom': 'TextEdit', 'lbunsur': 'TextEdit', 'kellgm': 'TextEdit', 'lokasilgm': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'statdiklgm': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'bjhhip': 'TextEdit', 'loghip': 'TextEdit', 'bjhtrka': 'TextEdit', 'logtrka': 'TextEdit', 'bjhtjuk': 'TextEdit', 'logtjuk': 'TextEdit', 'bjhtkur': 'TextEdit', 'logtkur': 'TextEdit', 'bjhtkira': 'TextEdit', 'logtkira': 'TextEdit', 'bjhtbkt': 'TextEdit', 'logtbkt': 'TextEdit', 'remark': 'TextEdit', 'acuan': 'TextEdit', 'status_dat': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_PotensiNikel_8.set('fieldImages', {'objectid': 'TextEdit', 'idlgm': 'TextEdit', 'namobj': 'TextEdit', 'jnskom': 'TextEdit', 'lbunsur': 'TextEdit', 'kellgm': 'TextEdit', 'lokasilgm': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'statdiklgm': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'bjhhip': 'TextEdit', 'loghip': 'TextEdit', 'bjhtrka': 'TextEdit', 'logtrka': 'TextEdit', 'bjhtjuk': 'TextEdit', 'logtjuk': 'TextEdit', 'bjhtkur': 'TextEdit', 'logtkur': 'TextEdit', 'bjhtkira': 'TextEdit', 'logtkira': 'TextEdit', 'bjhtbkt': 'TextEdit', 'logtbkt': 'TextEdit', 'remark': 'TextEdit', 'acuan': 'TextEdit', 'status_dat': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_PotensiTembaga_9.set('fieldImages', {'objectid': 'TextEdit', 'idlgm': 'TextEdit', 'namobj': 'TextEdit', 'jnskom': 'TextEdit', 'lbunsur': 'TextEdit', 'kellgm': 'TextEdit', 'lokasilgm': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'statdiklgm': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'bjhhip': 'TextEdit', 'loghip': 'TextEdit', 'bjhtrka': 'TextEdit', 'logtrka': 'TextEdit', 'bjhtjuk': 'TextEdit', 'logtjuk': 'TextEdit', 'bjhtkur': 'TextEdit', 'logtkur': 'TextEdit', 'bjhtkira': 'TextEdit', 'logtkira': 'TextEdit', 'bjhtbkt': 'TextEdit', 'logtbkt': 'TextEdit', 'remark': 'TextEdit', 'acuan': 'TextEdit', 'status_dat': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_LokasiSmelter_10.set('fieldImages', {'djmb.sde.S': 'TextEdit', 'djmb.sde_1': 'TextEdit', 'djmb.sde_2': 'TextEdit', 'djmb.sde_3': 'TextEdit', 'djmb.sde_4': 'TextEdit', 'modi_prod_': 'TextEdit', 'modi_pro_1': 'TextEdit', 'modi_pro_2': 'TextEdit', 'modi_pro_3': 'TextEdit', 'modi_pro_4': 'TextEdit', 'modi_pro_5': 'TextEdit', 'modi_pro_6': 'TextEdit', 'modi_pro_7': 'TextEdit', 'modi_pro_8': 'TextEdit', });
lyr_WIUP_2.set('fieldLabels', {'objectid': 'inline label', 'pulau': 'inline label', 'pejabat': 'inline label', 'id_prov': 'inline label', 'nama_prov': 'inline label', 'id_kab': 'inline label', 'nama_kab': 'inline label', 'jenis_izin': 'inline label', 'badan_usah': 'inline label', 'nama_usaha': 'inline label', 'kode_wiup': 'inline label', 'sk_iup': 'inline label', 'tgl_berlak': 'inline label', 'tgl_akhir': 'inline label', 'kegiatan': 'inline label', 'luas_sk': 'inline label', 'komoditas': 'inline label', 'kode_golon': 'inline label', 'kode_jnsko': 'inline label', 'cnc': 'inline label', 'generasi': 'inline label', 'kode_wil': 'inline label', 'lokasi': 'inline label', });
lyr_TotalCadanganPotensiBatuBara_4.set('fieldLabels', {'objectid': 'inline label', 'no': 'inline label', 'idbb': 'inline label', 'namobj': 'inline label', 'sumberdata': 'inline label', 'lokasikhas': 'inline label', 'klsbb': 'inline label', 'kriteria': 'inline label', 'hipotetik': 'inline label', 'tereka': 'inline label', 'tertunjuk': 'inline label', 'terukur': 'inline label', 'total_sd': 'inline label', 'terkira': 'inline label', 'terbukti': 'inline label', 'total_cada': 'inline label', 'sumber_lap': 'inline label', 'acuan': 'inline label', 'lokasi': 'inline label', 'update_': 'inline label', 'statdikbb': 'inline label', 'idinstansi': 'inline label', 'provinsi': 'inline label', 'kabupaten': 'inline label', 'pulau': 'inline label', 'remark': 'inline label', 'status': 'inline label', });
lyr_PotensiTimah_5.set('fieldLabels', {'objectid': 'inline label', 'idlgm': 'inline label', 'namobj': 'inline label', 'jnskom': 'inline label', 'lbunsur': 'inline label', 'kellgm': 'inline label', 'lokasilgm': 'inline label', 'kecamatan': 'inline label', 'kabupaten': 'inline label', 'provinsi': 'inline label', 'statdiklgm': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'bjhhip': 'inline label', 'loghip': 'inline label', 'bjhtrka': 'inline label', 'logtrka': 'inline label', 'bjhtjuk': 'inline label', 'logtjuk': 'inline label', 'bjhtkur': 'inline label', 'logtkur': 'inline label', 'bjhtkira': 'inline label', 'logtkira': 'inline label', 'bjhtbkt': 'inline label', 'logtbkt': 'inline label', 'remark': 'inline label', 'acuan': 'inline label', 'status_dat': 'inline label', 'keterangan': 'inline label', });
lyr_PotensiBauksit_6.set('fieldLabels', {'objectid': 'inline label', 'idlgm': 'inline label', 'namobj': 'inline label', 'jnskom': 'inline label', 'lbunsur': 'inline label', 'kellgm': 'inline label', 'lokasilgm': 'inline label', 'kecamatan': 'inline label', 'kabupaten': 'inline label', 'provinsi': 'inline label', 'statdiklgm': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'bjhhip': 'inline label', 'loghip': 'inline label', 'bjhtrka': 'inline label', 'logtrka': 'inline label', 'bjhtjuk': 'inline label', 'logtjuk': 'inline label', 'bjhtkur': 'inline label', 'logtkur': 'inline label', 'bjhtkira': 'inline label', 'logtkira': 'inline label', 'bjhtbkt': 'inline label', 'logtbkt': 'inline label', 'remark': 'inline label', 'acuan': 'inline label', 'status_dat': 'inline label', 'keterangan': 'inline label', });
lyr_PotensiBesi_7.set('fieldLabels', {'objectid': 'inline label', 'idlgm': 'inline label', 'namobj': 'inline label', 'jnskom': 'inline label', 'lbunsur': 'inline label', 'kellgm': 'inline label', 'lokasilgm': 'inline label', 'kecamatan': 'inline label', 'kabupaten': 'inline label', 'provinsi': 'inline label', 'statdiklgm': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'bjhhip': 'inline label', 'loghip': 'inline label', 'bjhtrka': 'inline label', 'logtrka': 'inline label', 'bjhtjuk': 'inline label', 'logtjuk': 'inline label', 'bjhtkur': 'inline label', 'logtkur': 'inline label', 'bjhtkira': 'inline label', 'logtkira': 'inline label', 'bjhtbkt': 'inline label', 'logtbkt': 'inline label', 'remark': 'inline label', 'acuan': 'inline label', 'status_dat': 'inline label', 'keterangan': 'inline label', });
lyr_PotensiNikel_8.set('fieldLabels', {'objectid': 'inline label', 'idlgm': 'inline label', 'namobj': 'inline label', 'jnskom': 'inline label', 'lbunsur': 'inline label', 'kellgm': 'inline label', 'lokasilgm': 'inline label', 'kecamatan': 'inline label', 'kabupaten': 'inline label', 'provinsi': 'inline label', 'statdiklgm': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'bjhhip': 'inline label', 'loghip': 'inline label', 'bjhtrka': 'inline label', 'logtrka': 'inline label', 'bjhtjuk': 'inline label', 'logtjuk': 'inline label', 'bjhtkur': 'inline label', 'logtkur': 'inline label', 'bjhtkira': 'inline label', 'logtkira': 'inline label', 'bjhtbkt': 'inline label', 'logtbkt': 'inline label', 'remark': 'inline label', 'acuan': 'inline label', 'status_dat': 'inline label', 'keterangan': 'inline label', });
lyr_PotensiTembaga_9.set('fieldLabels', {'objectid': 'inline label', 'idlgm': 'inline label', 'namobj': 'inline label', 'jnskom': 'inline label', 'lbunsur': 'inline label', 'kellgm': 'inline label', 'lokasilgm': 'inline label', 'kecamatan': 'inline label', 'kabupaten': 'inline label', 'provinsi': 'inline label', 'statdiklgm': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'bjhhip': 'inline label', 'loghip': 'inline label', 'bjhtrka': 'inline label', 'logtrka': 'inline label', 'bjhtjuk': 'inline label', 'logtjuk': 'inline label', 'bjhtkur': 'inline label', 'logtkur': 'inline label', 'bjhtkira': 'inline label', 'logtkira': 'inline label', 'bjhtbkt': 'inline label', 'logtbkt': 'inline label', 'remark': 'inline label', 'acuan': 'inline label', 'status_dat': 'inline label', 'keterangan': 'inline label', });
lyr_LokasiSmelter_10.set('fieldLabels', {'djmb.sde.S': 'inline label', 'djmb.sde_1': 'inline label', 'djmb.sde_2': 'inline label', 'djmb.sde_3': 'inline label', 'djmb.sde_4': 'inline label', 'modi_prod_': 'inline label', 'modi_pro_1': 'inline label', 'modi_pro_2': 'inline label', 'modi_pro_3': 'inline label', 'modi_pro_4': 'inline label', 'modi_pro_5': 'inline label', 'modi_pro_6': 'inline label', 'modi_pro_7': 'inline label', 'modi_pro_8': 'inline label', });
lyr_LokasiSmelter_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});