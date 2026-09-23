var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_zfmt_delimitacion_vigente_1 = new ol.format.GeoJSON();
var features_zfmt_delimitacion_vigente_1 = format_zfmt_delimitacion_vigente_1.readFeatures(json_zfmt_delimitacion_vigente_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zfmt_delimitacion_vigente_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zfmt_delimitacion_vigente_1.addFeatures(features_zfmt_delimitacion_vigente_1);
var lyr_zfmt_delimitacion_vigente_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zfmt_delimitacion_vigente_1, 
                style: style_zfmt_delimitacion_vigente_1,
                popuplayertitle: 'zfmt_delimitacion_vigente',
                interactive: true,
    title: 'zfmt_delimitacion_vigente<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_0.png" /> AMBIENTES COSTEROS<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_1.png" /> EM<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_2.png" /> PM<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_3.png" /> PME<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_4.png" /> RECINTO PORTUARIO<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_5.png" /> TGM<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_6.png" /> ZF<br />\
    <img src="styles/legend/zfmt_delimitacion_vigente_1_7.png" /> ZFE<br />' });
var format_zfmt_localidades_mun_la_paz_2 = new ol.format.GeoJSON();
var features_zfmt_localidades_mun_la_paz_2 = format_zfmt_localidades_mun_la_paz_2.readFeatures(json_zfmt_localidades_mun_la_paz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zfmt_localidades_mun_la_paz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zfmt_localidades_mun_la_paz_2.addFeatures(features_zfmt_localidades_mun_la_paz_2);
var lyr_zfmt_localidades_mun_la_paz_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zfmt_localidades_mun_la_paz_2, 
                style: style_zfmt_localidades_mun_la_paz_2,
                popuplayertitle: 'zfmt_localidades_mun_la_paz',
                interactive: true,
                title: '<img src="styles/legend/zfmt_localidades_mun_la_paz_2.png" /> zfmt_localidades_mun_la_paz'
            });
var format_zfmt_localidades_03_mun_la_paz_3 = new ol.format.GeoJSON();
var features_zfmt_localidades_03_mun_la_paz_3 = format_zfmt_localidades_03_mun_la_paz_3.readFeatures(json_zfmt_localidades_03_mun_la_paz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zfmt_localidades_03_mun_la_paz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zfmt_localidades_03_mun_la_paz_3.addFeatures(features_zfmt_localidades_03_mun_la_paz_3);
var lyr_zfmt_localidades_03_mun_la_paz_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zfmt_localidades_03_mun_la_paz_3, 
                style: style_zfmt_localidades_03_mun_la_paz_3,
                popuplayertitle: 'zfmt_localidades_03_mun_la_paz',
                interactive: true,
                title: '<img src="styles/legend/zfmt_localidades_03_mun_la_paz_3.png" /> zfmt_localidades_03_mun_la_paz'
            });
var format_zfmt_buffer_litoral_costero_cuadricula_estrategica_4 = new ol.format.GeoJSON();
var features_zfmt_buffer_litoral_costero_cuadricula_estrategica_4 = format_zfmt_buffer_litoral_costero_cuadricula_estrategica_4.readFeatures(json_zfmt_buffer_litoral_costero_cuadricula_estrategica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zfmt_buffer_litoral_costero_cuadricula_estrategica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zfmt_buffer_litoral_costero_cuadricula_estrategica_4.addFeatures(features_zfmt_buffer_litoral_costero_cuadricula_estrategica_4);
var lyr_zfmt_buffer_litoral_costero_cuadricula_estrategica_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zfmt_buffer_litoral_costero_cuadricula_estrategica_4, 
                style: style_zfmt_buffer_litoral_costero_cuadricula_estrategica_4,
                popuplayertitle: 'zfmt_buffer_litoral_costero_cuadricula_estrategica',
                interactive: true,
                title: '<img src="styles/legend/zfmt_buffer_litoral_costero_cuadricula_estrategica_4.png" /> zfmt_buffer_litoral_costero_cuadricula_estrategica'
            });
var format_zfmt_litoral_costero_cuadricula_estrategica_5 = new ol.format.GeoJSON();
var features_zfmt_litoral_costero_cuadricula_estrategica_5 = format_zfmt_litoral_costero_cuadricula_estrategica_5.readFeatures(json_zfmt_litoral_costero_cuadricula_estrategica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zfmt_litoral_costero_cuadricula_estrategica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zfmt_litoral_costero_cuadricula_estrategica_5.addFeatures(features_zfmt_litoral_costero_cuadricula_estrategica_5);
var lyr_zfmt_litoral_costero_cuadricula_estrategica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zfmt_litoral_costero_cuadricula_estrategica_5, 
                style: style_zfmt_litoral_costero_cuadricula_estrategica_5,
                popuplayertitle: 'zfmt_litoral_costero_cuadricula_estrategica',
                interactive: true,
                title: '<img src="styles/legend/zfmt_litoral_costero_cuadricula_estrategica_5.png" /> zfmt_litoral_costero_cuadricula_estrategica'
            });
var format_Clavesdecartas_6 = new ol.format.GeoJSON();
var features_Clavesdecartas_6 = format_Clavesdecartas_6.readFeatures(json_Clavesdecartas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clavesdecartas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clavesdecartas_6.addFeatures(features_Clavesdecartas_6);
var lyr_Clavesdecartas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clavesdecartas_6, 
                style: style_Clavesdecartas_6,
                popuplayertitle: 'Claves de cartas',
                interactive: true,
                title: '<img src="styles/legend/Clavesdecartas_6.png" /> Claves de cartas'
            });
var format_zfmt_pol_cuadricula_estrategica_zonificada_7 = new ol.format.GeoJSON();
var features_zfmt_pol_cuadricula_estrategica_zonificada_7 = format_zfmt_pol_cuadricula_estrategica_zonificada_7.readFeatures(json_zfmt_pol_cuadricula_estrategica_zonificada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zfmt_pol_cuadricula_estrategica_zonificada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zfmt_pol_cuadricula_estrategica_zonificada_7.addFeatures(features_zfmt_pol_cuadricula_estrategica_zonificada_7);
var lyr_zfmt_pol_cuadricula_estrategica_zonificada_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zfmt_pol_cuadricula_estrategica_zonificada_7, 
                style: style_zfmt_pol_cuadricula_estrategica_zonificada_7,
                popuplayertitle: 'zfmt_pol_cuadricula_estrategica_zonificada',
                interactive: true,
                title: '<img src="styles/legend/zfmt_pol_cuadricula_estrategica_zonificada_7.png" /> zfmt_pol_cuadricula_estrategica_zonificada'
            });
var format_sentinel2_tiles_lpz_8 = new ol.format.GeoJSON();
var features_sentinel2_tiles_lpz_8 = format_sentinel2_tiles_lpz_8.readFeatures(json_sentinel2_tiles_lpz_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel2_tiles_lpz_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel2_tiles_lpz_8.addFeatures(features_sentinel2_tiles_lpz_8);
var lyr_sentinel2_tiles_lpz_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel2_tiles_lpz_8, 
                style: style_sentinel2_tiles_lpz_8,
                popuplayertitle: 'sentinel2_tiles_lpz',
                interactive: true,
                title: '<img src="styles/legend/sentinel2_tiles_lpz_8.png" /> sentinel2_tiles_lpz'
            });
var group_Cuadricula = new ol.layer.Group({
                                layers: [lyr_Clavesdecartas_6,lyr_zfmt_pol_cuadricula_estrategica_zonificada_7,lyr_sentinel2_tiles_lpz_8,],
                                fold: 'close',
                                title: 'Cuadricula'});
var group_PlanificacinLevFotogrametricos = new ol.layer.Group({
                                layers: [lyr_zfmt_buffer_litoral_costero_cuadricula_estrategica_4,lyr_zfmt_litoral_costero_cuadricula_estrategica_5,],
                                fold: 'close',
                                title: 'Planificación Lev. Fotogrametricos'});
var group_Localidades = new ol.layer.Group({
                                layers: [lyr_zfmt_localidades_mun_la_paz_2,lyr_zfmt_localidades_03_mun_la_paz_3,],
                                fold: 'close',
                                title: 'Localidades'});

lyr_GoogleSatelite_0.setVisible(true);lyr_zfmt_delimitacion_vigente_1.setVisible(true);lyr_zfmt_localidades_mun_la_paz_2.setVisible(true);lyr_zfmt_localidades_03_mun_la_paz_3.setVisible(true);lyr_zfmt_buffer_litoral_costero_cuadricula_estrategica_4.setVisible(true);lyr_zfmt_litoral_costero_cuadricula_estrategica_5.setVisible(true);lyr_Clavesdecartas_6.setVisible(true);lyr_zfmt_pol_cuadricula_estrategica_zonificada_7.setVisible(true);lyr_sentinel2_tiles_lpz_8.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_zfmt_delimitacion_vigente_1,group_Localidades,group_PlanificacinLevFotogrametricos,group_Cuadricula];
lyr_zfmt_delimitacion_vigente_1.set('fieldAliases', {'Layer': 'Layer', 'PLANO': 'PLANO', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'LOCALIDAD': 'LOCALIDAD', 'AÑO': 'AÑO', 'developer': 'developer', });
lyr_zfmt_localidades_mun_la_paz_2.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'NOM_ENT': 'NOM_ENT', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'LONGITUD': 'LONGITUD', 'LATITUD': 'LATITUD', 'ALTITUD': 'ALTITUD', 'POBTOT': 'POBTOT', 'POBFEM': 'POBFEM', 'POBMAS': 'POBMAS', 'P_0A2': 'P_0A2', 'P_0A2_F': 'P_0A2_F', 'P_0A2_M': 'P_0A2_M', 'P_3YMAS': 'P_3YMAS', 'P_3YMAS_F': 'P_3YMAS_F', 'P_3YMAS_M': 'P_3YMAS_M', 'P_5YMAS': 'P_5YMAS', 'P_5YMAS_F': 'P_5YMAS_F', 'P_5YMAS_M': 'P_5YMAS_M', 'P_12YMAS': 'P_12YMAS', 'P_12YMAS_F': 'P_12YMAS_F', 'P_12YMAS_M': 'P_12YMAS_M', 'P_15YMAS': 'P_15YMAS', 'P_15YMAS_F': 'P_15YMAS_F', 'P_15YMAS_M': 'P_15YMAS_M', 'P_18YMAS': 'P_18YMAS', 'P_18YMAS_F': 'P_18YMAS_F', 'P_18YMAS_M': 'P_18YMAS_M', 'P_3A5': 'P_3A5', 'P_3A5_F': 'P_3A5_F', 'P_3A5_M': 'P_3A5_M', 'P_6A11': 'P_6A11', 'P_6A11_F': 'P_6A11_F', 'P_6A11_M': 'P_6A11_M', 'P_8A14': 'P_8A14', 'P_8A14_F': 'P_8A14_F', 'P_8A14_M': 'P_8A14_M', 'P_12A14': 'P_12A14', 'P_12A14_F': 'P_12A14_F', 'P_12A14_M': 'P_12A14_M', 'P_15A17': 'P_15A17', 'P_15A17_F': 'P_15A17_F', 'P_15A17_M': 'P_15A17_M', 'P_18A24': 'P_18A24', 'P_18A24_F': 'P_18A24_F', 'P_18A24_M': 'P_18A24_M', 'P_15A49_F': 'P_15A49_F', 'P_60YMAS': 'P_60YMAS', 'P_60YMAS_F': 'P_60YMAS_F', 'P_60YMAS_M': 'P_60YMAS_M', 'REL_H_M': 'REL_H_M', 'POB0_14': 'POB0_14', 'POB15_64': 'POB15_64', 'POB65_MAS': 'POB65_MAS', 'PROM_HNV': 'PROM_HNV', 'PNACENT': 'PNACENT', 'PNACENT_F': 'PNACENT_F', 'PNACENT_M': 'PNACENT_M', 'PNACOE': 'PNACOE', 'PNACOE_F': 'PNACOE_F', 'PNACOE_M': 'PNACOE_M', 'PRES2015': 'PRES2015', 'PRES2015_F': 'PRES2015_F', 'PRES2015_M': 'PRES2015_M', 'PRESOE15': 'PRESOE15', 'PRESOE15_F': 'PRESOE15_F', 'PRESOE15_M': 'PRESOE15_M', 'P3YM_HLI': 'P3YM_HLI', 'P3YM_HLI_F': 'P3YM_HLI_F', 'P3YM_HLI_M': 'P3YM_HLI_M', 'P3HLINHE': 'P3HLINHE', 'P3HLINHE_F': 'P3HLINHE_F', 'P3HLINHE_M': 'P3HLINHE_M', 'P3HLI_HE': 'P3HLI_HE', 'P3HLI_HE_F': 'P3HLI_HE_F', 'P3HLI_HE_M': 'P3HLI_HE_M', 'P5_HLI': 'P5_HLI', 'P5_HLI_NHE': 'P5_HLI_NHE', 'P5_HLI_HE': 'P5_HLI_HE', 'PHOG_IND': 'PHOG_IND', 'POB_AFRO': 'POB_AFRO', 'POB_AFRO_F': 'POB_AFRO_F', 'POB_AFRO_M': 'POB_AFRO_M', 'PCON_DISC': 'PCON_DISC', 'PCDISC_MOT': 'PCDISC_MOT', 'PCDISC_VIS': 'PCDISC_VIS', 'PCDISC_LEN': 'PCDISC_LEN', 'PCDISC_AUD': 'PCDISC_AUD', 'PCDISC_M_1': 'PCDISC_M_1', 'PCDISC_MEN': 'PCDISC_MEN', 'PCON_LIMI': 'PCON_LIMI', 'PCLIM_CSB': 'PCLIM_CSB', 'PCLIM_VIS': 'PCLIM_VIS', 'PCLIM_HACO': 'PCLIM_HACO', 'PCLIM_OAUD': 'PCLIM_OAUD', 'PCLIM_MOT2': 'PCLIM_MOT2', 'PCLIM_RE_C': 'PCLIM_RE_C', 'PCLIM_PMEN': 'PCLIM_PMEN', 'PSIND_LIM': 'PSIND_LIM', 'P3A5_NOA': 'P3A5_NOA', 'P3A5_NOA_F': 'P3A5_NOA_F', 'P3A5_NOA_M': 'P3A5_NOA_M', 'P6A11_NOA': 'P6A11_NOA', 'P6A11_NOAF': 'P6A11_NOAF', 'P6A11_NOAM': 'P6A11_NOAM', 'P12A14NOA': 'P12A14NOA', 'P12A14NOAF': 'P12A14NOAF', 'P12A14NOAM': 'P12A14NOAM', 'P15A17A': 'P15A17A', 'P15A17A_F': 'P15A17A_F', 'P15A17A_M': 'P15A17A_M', 'P18A24A': 'P18A24A', 'P18A24A_F': 'P18A24A_F', 'P18A24A_M': 'P18A24A_M', 'P8A14AN': 'P8A14AN', 'P8A14AN_F': 'P8A14AN_F', 'P8A14AN_M': 'P8A14AN_M', 'P15YM_AN': 'P15YM_AN', 'P15YM_AN_F': 'P15YM_AN_F', 'P15YM_AN_M': 'P15YM_AN_M', 'P15YM_SE': 'P15YM_SE', 'P15YM_SE_F': 'P15YM_SE_F', 'P15YM_SE_M': 'P15YM_SE_M', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_INF': 'P15PRI_INF', 'P15PRI_INM': 'P15PRI_INM', 'P15PRI_CO': 'P15PRI_CO', 'P15PRI_COF': 'P15PRI_COF', 'P15PRI_COM': 'P15PRI_COM', 'P15SEC_IN': 'P15SEC_IN', 'P15SEC_INF': 'P15SEC_INF', 'P15SEC_INM': 'P15SEC_INM', 'P15SEC_CO': 'P15SEC_CO', 'P15SEC_COF': 'P15SEC_COF', 'P15SEC_COM': 'P15SEC_COM', 'P18YM_PB': 'P18YM_PB', 'P18YM_PB_F': 'P18YM_PB_F', 'P18YM_PB_M': 'P18YM_PB_M', 'GRAPROES': 'GRAPROES', 'GRAPROES_F': 'GRAPROES_F', 'GRAPROES_M': 'GRAPROES_M', 'PEA': 'PEA', 'PEA_F': 'PEA_F', 'PEA_M': 'PEA_M', 'PE_INAC': 'PE_INAC', 'PE_INAC_F': 'PE_INAC_F', 'PE_INAC_M': 'PE_INAC_M', 'POCUPADA': 'POCUPADA', 'POCUPADA_F': 'POCUPADA_F', 'POCUPADA_M': 'POCUPADA_M', 'PDESOCUP': 'PDESOCUP', 'PDESOCUP_F': 'PDESOCUP_F', 'PDESOCUP_M': 'PDESOCUP_M', 'PSINDER': 'PSINDER', 'PDER_SS': 'PDER_SS', 'PDER_IMSS': 'PDER_IMSS', 'PDER_ISTE': 'PDER_ISTE', 'PDER_ISTEE': 'PDER_ISTEE', 'PAFIL_PDOM': 'PAFIL_PDOM', 'PDER_SEGP': 'PDER_SEGP', 'PDER_IMSSB': 'PDER_IMSSB', 'PAFIL_IPRI': 'PAFIL_IPRI', 'PAFIL_OTRA': 'PAFIL_OTRA', 'P12YM_SOLT': 'P12YM_SOLT', 'P12YM_CASA': 'P12YM_CASA', 'P12YM_SEPA': 'P12YM_SEPA', 'PCATOLICA': 'PCATOLICA', 'PRO_CRIEVA': 'PRO_CRIEVA', 'POTRAS_REL': 'POTRAS_REL', 'PSIN_RELIG': 'PSIN_RELIG', 'TOTHOG': 'TOTHOG', 'HOGJEF_F': 'HOGJEF_F', 'HOGJEF_M': 'HOGJEF_M', 'POBHOG': 'POBHOG', 'PHOGJEF_F': 'PHOGJEF_F', 'PHOGJEF_M': 'PHOGJEF_M', 'VIVTOT': 'VIVTOT', 'TVIVHAB': 'TVIVHAB', 'TVIVPAR': 'TVIVPAR', 'VIVPAR_HAB': 'VIVPAR_HAB', 'VIVPARH_CV': 'VIVPARH_CV', 'TVIVPARHAB': 'TVIVPARHAB', 'VIVPAR_DES': 'VIVPAR_DES', 'VIVPAR_UT': 'VIVPAR_UT', 'OCUPVIVPAR': 'OCUPVIVPAR', 'PROM_OCUP': 'PROM_OCUP', 'PRO_OCUP_C': 'PRO_OCUP_C', 'VPH_PISODT': 'VPH_PISODT', 'VPH_PISOTI': 'VPH_PISOTI', 'VPH_1DOR': 'VPH_1DOR', 'VPH_2YMASD': 'VPH_2YMASD', 'VPH_1CUART': 'VPH_1CUART', 'VPH_2CUART': 'VPH_2CUART', 'VPH_3YMASC': 'VPH_3YMASC', 'VPH_C_ELEC': 'VPH_C_ELEC', 'VPH_S_ELEC': 'VPH_S_ELEC', 'VPH_AGUADV': 'VPH_AGUADV', 'VPH_AEASP': 'VPH_AEASP', 'VPH_AGUAFV': 'VPH_AGUAFV', 'VPH_TINACO': 'VPH_TINACO', 'VPH_CISTER': 'VPH_CISTER', 'VPH_EXCSA': 'VPH_EXCSA', 'VPH_LETR': 'VPH_LETR', 'VPH_DRENAJ': 'VPH_DRENAJ', 'VPH_NODREN': 'VPH_NODREN', 'VPH_C_SERV': 'VPH_C_SERV', 'VPH_NDEAED': 'VPH_NDEAED', 'VPH_DSADMA': 'VPH_DSADMA', 'VPH_NDACMM': 'VPH_NDACMM', 'VPH_SNBIEN': 'VPH_SNBIEN', 'VPH_REFRI': 'VPH_REFRI', 'VPH_LAVAD': 'VPH_LAVAD', 'VPH_HMICRO': 'VPH_HMICRO', 'VPH_AUTOM': 'VPH_AUTOM', 'VPH_MOTO': 'VPH_MOTO', 'VPH_BICI': 'VPH_BICI', 'VPH_RADIO': 'VPH_RADIO', 'VPH_TV': 'VPH_TV', 'VPH_PC': 'VPH_PC', 'VPH_TELEF': 'VPH_TELEF', 'VPH_CEL': 'VPH_CEL', 'VPH_INTER': 'VPH_INTER', 'VPH_STVP': 'VPH_STVP', 'VPH_SPMVPI': 'VPH_SPMVPI', 'VPH_CVJ': 'VPH_CVJ', 'VPH_SINRTV': 'VPH_SINRTV', 'VPH_SINLTC': 'VPH_SINLTC', 'VPH_SINCIN': 'VPH_SINCIN', 'VPH_SINTIC': 'VPH_SINTIC', 'TAMLOC': 'TAMLOC', 'developer': 'developer', });
lyr_zfmt_localidades_03_mun_la_paz_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'CVE_AGEB', 'CVE_MZA': 'CVE_MZA', 'NOMGEO': 'NOMGEO', 'PLANO': 'PLANO', 'developer': 'developer', });
lyr_zfmt_buffer_litoral_costero_cuadricula_estrategica_4.set('fieldAliases', {'Id': 'Id', 'estatus': 'estatus', 'limite': 'limite', 'distancia': 'distancia', 'zona': 'zona', 'developer': 'developer', 'Longitud': 'Longitud', 'Dist': 'Dist', });
lyr_zfmt_litoral_costero_cuadricula_estrategica_5.set('fieldAliases', {'Id': 'Id', 'estatus': 'estatus', 'limite': 'limite', 'distancia': 'distancia', 'zona': 'zona', 'developer': 'developer', 'Longitud': 'Longitud', 'Dist': 'Dist', });
lyr_Clavesdecartas_6.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'CLAVE': 'CLAVE', });
lyr_zfmt_pol_cuadricula_estrategica_zonificada_7.set('fieldAliases', {'id': 'id', 'clave': 'clave', });
lyr_sentinel2_tiles_lpz_8.set('fieldAliases', {'Name': 'Name', });
lyr_zfmt_delimitacion_vigente_1.set('fieldImages', {'Layer': 'TextEdit', 'PLANO': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'AÑO': 'TextEdit', 'developer': 'TextEdit', });
lyr_zfmt_localidades_mun_la_paz_2.set('fieldImages', {'ENTIDAD': 'TextEdit', 'NOM_ENT': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'LONGITUD': 'TextEdit', 'LATITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'POBTOT': 'TextEdit', 'POBFEM': 'TextEdit', 'POBMAS': 'TextEdit', 'P_0A2': 'TextEdit', 'P_0A2_F': 'TextEdit', 'P_0A2_M': 'TextEdit', 'P_3YMAS': 'TextEdit', 'P_3YMAS_F': 'TextEdit', 'P_3YMAS_M': 'TextEdit', 'P_5YMAS': 'TextEdit', 'P_5YMAS_F': 'TextEdit', 'P_5YMAS_M': 'TextEdit', 'P_12YMAS': 'TextEdit', 'P_12YMAS_F': 'TextEdit', 'P_12YMAS_M': 'TextEdit', 'P_15YMAS': 'TextEdit', 'P_15YMAS_F': 'TextEdit', 'P_15YMAS_M': 'TextEdit', 'P_18YMAS': 'TextEdit', 'P_18YMAS_F': 'TextEdit', 'P_18YMAS_M': 'TextEdit', 'P_3A5': 'TextEdit', 'P_3A5_F': 'TextEdit', 'P_3A5_M': 'TextEdit', 'P_6A11': 'TextEdit', 'P_6A11_F': 'TextEdit', 'P_6A11_M': 'TextEdit', 'P_8A14': 'TextEdit', 'P_8A14_F': 'TextEdit', 'P_8A14_M': 'TextEdit', 'P_12A14': 'TextEdit', 'P_12A14_F': 'TextEdit', 'P_12A14_M': 'TextEdit', 'P_15A17': 'TextEdit', 'P_15A17_F': 'TextEdit', 'P_15A17_M': 'TextEdit', 'P_18A24': 'TextEdit', 'P_18A24_F': 'TextEdit', 'P_18A24_M': 'TextEdit', 'P_15A49_F': 'TextEdit', 'P_60YMAS': 'TextEdit', 'P_60YMAS_F': 'TextEdit', 'P_60YMAS_M': 'TextEdit', 'REL_H_M': 'TextEdit', 'POB0_14': 'TextEdit', 'POB15_64': 'TextEdit', 'POB65_MAS': 'TextEdit', 'PROM_HNV': 'TextEdit', 'PNACENT': 'TextEdit', 'PNACENT_F': 'TextEdit', 'PNACENT_M': 'TextEdit', 'PNACOE': 'TextEdit', 'PNACOE_F': 'TextEdit', 'PNACOE_M': 'TextEdit', 'PRES2015': 'TextEdit', 'PRES2015_F': 'TextEdit', 'PRES2015_M': 'TextEdit', 'PRESOE15': 'TextEdit', 'PRESOE15_F': 'TextEdit', 'PRESOE15_M': 'TextEdit', 'P3YM_HLI': 'TextEdit', 'P3YM_HLI_F': 'TextEdit', 'P3YM_HLI_M': 'TextEdit', 'P3HLINHE': 'TextEdit', 'P3HLINHE_F': 'TextEdit', 'P3HLINHE_M': 'TextEdit', 'P3HLI_HE': 'TextEdit', 'P3HLI_HE_F': 'TextEdit', 'P3HLI_HE_M': 'TextEdit', 'P5_HLI': 'TextEdit', 'P5_HLI_NHE': 'TextEdit', 'P5_HLI_HE': 'TextEdit', 'PHOG_IND': 'TextEdit', 'POB_AFRO': 'TextEdit', 'POB_AFRO_F': 'TextEdit', 'POB_AFRO_M': 'TextEdit', 'PCON_DISC': 'TextEdit', 'PCDISC_MOT': 'TextEdit', 'PCDISC_VIS': 'TextEdit', 'PCDISC_LEN': 'TextEdit', 'PCDISC_AUD': 'TextEdit', 'PCDISC_M_1': 'TextEdit', 'PCDISC_MEN': 'TextEdit', 'PCON_LIMI': 'TextEdit', 'PCLIM_CSB': 'TextEdit', 'PCLIM_VIS': 'TextEdit', 'PCLIM_HACO': 'TextEdit', 'PCLIM_OAUD': 'TextEdit', 'PCLIM_MOT2': 'TextEdit', 'PCLIM_RE_C': 'TextEdit', 'PCLIM_PMEN': 'TextEdit', 'PSIND_LIM': 'TextEdit', 'P3A5_NOA': 'TextEdit', 'P3A5_NOA_F': 'TextEdit', 'P3A5_NOA_M': 'TextEdit', 'P6A11_NOA': 'TextEdit', 'P6A11_NOAF': 'TextEdit', 'P6A11_NOAM': 'TextEdit', 'P12A14NOA': 'TextEdit', 'P12A14NOAF': 'TextEdit', 'P12A14NOAM': 'TextEdit', 'P15A17A': 'TextEdit', 'P15A17A_F': 'TextEdit', 'P15A17A_M': 'TextEdit', 'P18A24A': 'TextEdit', 'P18A24A_F': 'TextEdit', 'P18A24A_M': 'TextEdit', 'P8A14AN': 'TextEdit', 'P8A14AN_F': 'TextEdit', 'P8A14AN_M': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15YM_AN_F': 'TextEdit', 'P15YM_AN_M': 'TextEdit', 'P15YM_SE': 'TextEdit', 'P15YM_SE_F': 'TextEdit', 'P15YM_SE_M': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_INF': 'TextEdit', 'P15PRI_INM': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15PRI_COF': 'TextEdit', 'P15PRI_COM': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'P15SEC_INF': 'TextEdit', 'P15SEC_INM': 'TextEdit', 'P15SEC_CO': 'TextEdit', 'P15SEC_COF': 'TextEdit', 'P15SEC_COM': 'TextEdit', 'P18YM_PB': 'TextEdit', 'P18YM_PB_F': 'TextEdit', 'P18YM_PB_M': 'TextEdit', 'GRAPROES': 'TextEdit', 'GRAPROES_F': 'TextEdit', 'GRAPROES_M': 'TextEdit', 'PEA': 'TextEdit', 'PEA_F': 'TextEdit', 'PEA_M': 'TextEdit', 'PE_INAC': 'TextEdit', 'PE_INAC_F': 'TextEdit', 'PE_INAC_M': 'TextEdit', 'POCUPADA': 'TextEdit', 'POCUPADA_F': 'TextEdit', 'POCUPADA_M': 'TextEdit', 'PDESOCUP': 'TextEdit', 'PDESOCUP_F': 'TextEdit', 'PDESOCUP_M': 'TextEdit', 'PSINDER': 'TextEdit', 'PDER_SS': 'TextEdit', 'PDER_IMSS': 'TextEdit', 'PDER_ISTE': 'TextEdit', 'PDER_ISTEE': 'TextEdit', 'PAFIL_PDOM': 'TextEdit', 'PDER_SEGP': 'TextEdit', 'PDER_IMSSB': 'TextEdit', 'PAFIL_IPRI': 'TextEdit', 'PAFIL_OTRA': 'TextEdit', 'P12YM_SOLT': 'TextEdit', 'P12YM_CASA': 'TextEdit', 'P12YM_SEPA': 'TextEdit', 'PCATOLICA': 'TextEdit', 'PRO_CRIEVA': 'TextEdit', 'POTRAS_REL': 'TextEdit', 'PSIN_RELIG': 'TextEdit', 'TOTHOG': 'TextEdit', 'HOGJEF_F': 'TextEdit', 'HOGJEF_M': 'TextEdit', 'POBHOG': 'TextEdit', 'PHOGJEF_F': 'TextEdit', 'PHOGJEF_M': 'TextEdit', 'VIVTOT': 'TextEdit', 'TVIVHAB': 'TextEdit', 'TVIVPAR': 'TextEdit', 'VIVPAR_HAB': 'TextEdit', 'VIVPARH_CV': 'TextEdit', 'TVIVPARHAB': 'TextEdit', 'VIVPAR_DES': 'TextEdit', 'VIVPAR_UT': 'TextEdit', 'OCUPVIVPAR': 'TextEdit', 'PROM_OCUP': 'TextEdit', 'PRO_OCUP_C': 'TextEdit', 'VPH_PISODT': 'TextEdit', 'VPH_PISOTI': 'TextEdit', 'VPH_1DOR': 'TextEdit', 'VPH_2YMASD': 'TextEdit', 'VPH_1CUART': 'TextEdit', 'VPH_2CUART': 'TextEdit', 'VPH_3YMASC': 'TextEdit', 'VPH_C_ELEC': 'TextEdit', 'VPH_S_ELEC': 'TextEdit', 'VPH_AGUADV': 'TextEdit', 'VPH_AEASP': 'TextEdit', 'VPH_AGUAFV': 'TextEdit', 'VPH_TINACO': 'TextEdit', 'VPH_CISTER': 'TextEdit', 'VPH_EXCSA': 'TextEdit', 'VPH_LETR': 'TextEdit', 'VPH_DRENAJ': 'TextEdit', 'VPH_NODREN': 'TextEdit', 'VPH_C_SERV': 'TextEdit', 'VPH_NDEAED': 'TextEdit', 'VPH_DSADMA': 'TextEdit', 'VPH_NDACMM': 'TextEdit', 'VPH_SNBIEN': 'TextEdit', 'VPH_REFRI': 'TextEdit', 'VPH_LAVAD': 'TextEdit', 'VPH_HMICRO': 'TextEdit', 'VPH_AUTOM': 'TextEdit', 'VPH_MOTO': 'TextEdit', 'VPH_BICI': 'TextEdit', 'VPH_RADIO': 'TextEdit', 'VPH_TV': 'TextEdit', 'VPH_PC': 'TextEdit', 'VPH_TELEF': 'TextEdit', 'VPH_CEL': 'TextEdit', 'VPH_INTER': 'TextEdit', 'VPH_STVP': 'TextEdit', 'VPH_SPMVPI': 'TextEdit', 'VPH_CVJ': 'TextEdit', 'VPH_SINRTV': 'TextEdit', 'VPH_SINLTC': 'TextEdit', 'VPH_SINCIN': 'TextEdit', 'VPH_SINTIC': 'TextEdit', 'TAMLOC': 'TextEdit', 'developer': 'TextEdit', });
lyr_zfmt_localidades_03_mun_la_paz_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'CVE_LOC': 'TextEdit', 'CVE_AGEB': 'TextEdit', 'CVE_MZA': 'TextEdit', 'NOMGEO': 'TextEdit', 'PLANO': 'TextEdit', 'developer': 'TextEdit', });
lyr_zfmt_buffer_litoral_costero_cuadricula_estrategica_4.set('fieldImages', {'Id': 'TextEdit', 'estatus': 'TextEdit', 'limite': 'TextEdit', 'distancia': 'TextEdit', 'zona': 'TextEdit', 'developer': 'TextEdit', 'Longitud': 'TextEdit', 'Dist': 'TextEdit', });
lyr_zfmt_litoral_costero_cuadricula_estrategica_5.set('fieldImages', {'Id': '', 'estatus': '', 'limite': '', 'distancia': '', 'zona': '', 'developer': '', 'Longitud': '', 'Dist': '', });
lyr_Clavesdecartas_6.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'CLAVE': 'TextEdit', });
lyr_zfmt_pol_cuadricula_estrategica_zonificada_7.set('fieldImages', {'id': 'TextEdit', 'clave': 'TextEdit', });
lyr_sentinel2_tiles_lpz_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_zfmt_delimitacion_vigente_1.set('fieldLabels', {'Layer': 'inline label - always visible', 'PLANO': 'inline label - always visible', 'ESTADO': 'no label', 'MUNICIPIO': 'no label', 'LOCALIDAD': 'inline label - always visible', 'AÑO': 'inline label - always visible', 'developer': 'inline label - always visible', });
lyr_zfmt_localidades_mun_la_paz_2.set('fieldLabels', {'ENTIDAD': 'no label', 'NOM_ENT': 'no label', 'MUN': 'no label', 'NOM_MUN': 'no label', 'LOC': 'no label', 'NOM_LOC': 'no label', 'LONGITUD': 'no label', 'LATITUD': 'no label', 'ALTITUD': 'no label', 'POBTOT': 'no label', 'POBFEM': 'no label', 'POBMAS': 'no label', 'P_0A2': 'no label', 'P_0A2_F': 'no label', 'P_0A2_M': 'no label', 'P_3YMAS': 'no label', 'P_3YMAS_F': 'no label', 'P_3YMAS_M': 'no label', 'P_5YMAS': 'no label', 'P_5YMAS_F': 'no label', 'P_5YMAS_M': 'no label', 'P_12YMAS': 'no label', 'P_12YMAS_F': 'no label', 'P_12YMAS_M': 'no label', 'P_15YMAS': 'no label', 'P_15YMAS_F': 'no label', 'P_15YMAS_M': 'no label', 'P_18YMAS': 'no label', 'P_18YMAS_F': 'no label', 'P_18YMAS_M': 'no label', 'P_3A5': 'no label', 'P_3A5_F': 'no label', 'P_3A5_M': 'no label', 'P_6A11': 'no label', 'P_6A11_F': 'no label', 'P_6A11_M': 'no label', 'P_8A14': 'no label', 'P_8A14_F': 'no label', 'P_8A14_M': 'no label', 'P_12A14': 'no label', 'P_12A14_F': 'no label', 'P_12A14_M': 'no label', 'P_15A17': 'no label', 'P_15A17_F': 'no label', 'P_15A17_M': 'no label', 'P_18A24': 'no label', 'P_18A24_F': 'no label', 'P_18A24_M': 'no label', 'P_15A49_F': 'no label', 'P_60YMAS': 'no label', 'P_60YMAS_F': 'no label', 'P_60YMAS_M': 'no label', 'REL_H_M': 'no label', 'POB0_14': 'no label', 'POB15_64': 'no label', 'POB65_MAS': 'no label', 'PROM_HNV': 'no label', 'PNACENT': 'no label', 'PNACENT_F': 'no label', 'PNACENT_M': 'no label', 'PNACOE': 'no label', 'PNACOE_F': 'no label', 'PNACOE_M': 'no label', 'PRES2015': 'no label', 'PRES2015_F': 'no label', 'PRES2015_M': 'no label', 'PRESOE15': 'no label', 'PRESOE15_F': 'no label', 'PRESOE15_M': 'no label', 'P3YM_HLI': 'no label', 'P3YM_HLI_F': 'no label', 'P3YM_HLI_M': 'no label', 'P3HLINHE': 'no label', 'P3HLINHE_F': 'no label', 'P3HLINHE_M': 'no label', 'P3HLI_HE': 'no label', 'P3HLI_HE_F': 'no label', 'P3HLI_HE_M': 'no label', 'P5_HLI': 'no label', 'P5_HLI_NHE': 'no label', 'P5_HLI_HE': 'no label', 'PHOG_IND': 'no label', 'POB_AFRO': 'no label', 'POB_AFRO_F': 'no label', 'POB_AFRO_M': 'no label', 'PCON_DISC': 'no label', 'PCDISC_MOT': 'no label', 'PCDISC_VIS': 'no label', 'PCDISC_LEN': 'no label', 'PCDISC_AUD': 'no label', 'PCDISC_M_1': 'no label', 'PCDISC_MEN': 'no label', 'PCON_LIMI': 'no label', 'PCLIM_CSB': 'no label', 'PCLIM_VIS': 'no label', 'PCLIM_HACO': 'no label', 'PCLIM_OAUD': 'no label', 'PCLIM_MOT2': 'no label', 'PCLIM_RE_C': 'no label', 'PCLIM_PMEN': 'no label', 'PSIND_LIM': 'no label', 'P3A5_NOA': 'no label', 'P3A5_NOA_F': 'no label', 'P3A5_NOA_M': 'no label', 'P6A11_NOA': 'no label', 'P6A11_NOAF': 'no label', 'P6A11_NOAM': 'no label', 'P12A14NOA': 'no label', 'P12A14NOAF': 'no label', 'P12A14NOAM': 'no label', 'P15A17A': 'no label', 'P15A17A_F': 'no label', 'P15A17A_M': 'no label', 'P18A24A': 'no label', 'P18A24A_F': 'no label', 'P18A24A_M': 'no label', 'P8A14AN': 'no label', 'P8A14AN_F': 'no label', 'P8A14AN_M': 'no label', 'P15YM_AN': 'no label', 'P15YM_AN_F': 'no label', 'P15YM_AN_M': 'no label', 'P15YM_SE': 'no label', 'P15YM_SE_F': 'no label', 'P15YM_SE_M': 'no label', 'P15PRI_IN': 'no label', 'P15PRI_INF': 'no label', 'P15PRI_INM': 'no label', 'P15PRI_CO': 'no label', 'P15PRI_COF': 'no label', 'P15PRI_COM': 'no label', 'P15SEC_IN': 'no label', 'P15SEC_INF': 'no label', 'P15SEC_INM': 'no label', 'P15SEC_CO': 'no label', 'P15SEC_COF': 'no label', 'P15SEC_COM': 'no label', 'P18YM_PB': 'no label', 'P18YM_PB_F': 'no label', 'P18YM_PB_M': 'no label', 'GRAPROES': 'no label', 'GRAPROES_F': 'no label', 'GRAPROES_M': 'no label', 'PEA': 'no label', 'PEA_F': 'no label', 'PEA_M': 'no label', 'PE_INAC': 'no label', 'PE_INAC_F': 'no label', 'PE_INAC_M': 'no label', 'POCUPADA': 'no label', 'POCUPADA_F': 'no label', 'POCUPADA_M': 'no label', 'PDESOCUP': 'no label', 'PDESOCUP_F': 'no label', 'PDESOCUP_M': 'no label', 'PSINDER': 'no label', 'PDER_SS': 'no label', 'PDER_IMSS': 'no label', 'PDER_ISTE': 'no label', 'PDER_ISTEE': 'no label', 'PAFIL_PDOM': 'no label', 'PDER_SEGP': 'no label', 'PDER_IMSSB': 'no label', 'PAFIL_IPRI': 'no label', 'PAFIL_OTRA': 'no label', 'P12YM_SOLT': 'no label', 'P12YM_CASA': 'no label', 'P12YM_SEPA': 'no label', 'PCATOLICA': 'no label', 'PRO_CRIEVA': 'no label', 'POTRAS_REL': 'no label', 'PSIN_RELIG': 'no label', 'TOTHOG': 'no label', 'HOGJEF_F': 'no label', 'HOGJEF_M': 'no label', 'POBHOG': 'no label', 'PHOGJEF_F': 'no label', 'PHOGJEF_M': 'no label', 'VIVTOT': 'no label', 'TVIVHAB': 'no label', 'TVIVPAR': 'no label', 'VIVPAR_HAB': 'no label', 'VIVPARH_CV': 'no label', 'TVIVPARHAB': 'no label', 'VIVPAR_DES': 'no label', 'VIVPAR_UT': 'no label', 'OCUPVIVPAR': 'no label', 'PROM_OCUP': 'no label', 'PRO_OCUP_C': 'no label', 'VPH_PISODT': 'no label', 'VPH_PISOTI': 'no label', 'VPH_1DOR': 'no label', 'VPH_2YMASD': 'no label', 'VPH_1CUART': 'no label', 'VPH_2CUART': 'no label', 'VPH_3YMASC': 'no label', 'VPH_C_ELEC': 'no label', 'VPH_S_ELEC': 'no label', 'VPH_AGUADV': 'no label', 'VPH_AEASP': 'no label', 'VPH_AGUAFV': 'no label', 'VPH_TINACO': 'no label', 'VPH_CISTER': 'no label', 'VPH_EXCSA': 'no label', 'VPH_LETR': 'no label', 'VPH_DRENAJ': 'no label', 'VPH_NODREN': 'no label', 'VPH_C_SERV': 'no label', 'VPH_NDEAED': 'no label', 'VPH_DSADMA': 'no label', 'VPH_NDACMM': 'no label', 'VPH_SNBIEN': 'no label', 'VPH_REFRI': 'no label', 'VPH_LAVAD': 'no label', 'VPH_HMICRO': 'no label', 'VPH_AUTOM': 'no label', 'VPH_MOTO': 'no label', 'VPH_BICI': 'no label', 'VPH_RADIO': 'no label', 'VPH_TV': 'no label', 'VPH_PC': 'no label', 'VPH_TELEF': 'no label', 'VPH_CEL': 'no label', 'VPH_INTER': 'no label', 'VPH_STVP': 'no label', 'VPH_SPMVPI': 'no label', 'VPH_CVJ': 'no label', 'VPH_SINRTV': 'no label', 'VPH_SINLTC': 'no label', 'VPH_SINCIN': 'no label', 'VPH_SINTIC': 'no label', 'TAMLOC': 'no label', 'developer': 'no label', });
lyr_zfmt_localidades_03_mun_la_paz_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'CVE_LOC': 'no label', 'CVE_AGEB': 'no label', 'CVE_MZA': 'no label', 'NOMGEO': 'no label', 'PLANO': 'no label', 'developer': 'no label', });
lyr_zfmt_buffer_litoral_costero_cuadricula_estrategica_4.set('fieldLabels', {'Id': 'no label', 'estatus': 'no label', 'limite': 'no label', 'distancia': 'no label', 'zona': 'no label', 'developer': 'no label', 'Longitud': 'no label', 'Dist': 'no label', });
lyr_zfmt_litoral_costero_cuadricula_estrategica_5.set('fieldLabels', {'Id': 'no label', 'estatus': 'inline label - always visible', 'limite': 'no label', 'distancia': 'no label', 'zona': 'no label', 'developer': 'no label', 'Longitud': 'no label', 'Dist': 'inline label - always visible', });
lyr_Clavesdecartas_6.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'CLAVE': 'inline label - always visible', });
lyr_zfmt_pol_cuadricula_estrategica_zonificada_7.set('fieldLabels', {'id': 'no label', 'clave': 'inline label - always visible', });
lyr_sentinel2_tiles_lpz_8.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_sentinel2_tiles_lpz_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});