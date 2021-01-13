import { deliverablePopup, developablePopup, towncentrelivingareaPopup, notdevelopablePopup, residentialPopup, rlaPopup} from './Popups'
import { deliverableStyle, developableStyle, towncentrelivingareaStyle, notdevelopableStyle, residentialStyle, rlaStyle} from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.391067,-2.1197936],
        StartingZoom: 2,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
    },
    DynamicData: 
    [

        {
            key: 'Deliverable SHLAA Sites',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa18_deliverable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: deliverablePopup,
                maxZoom: 2,
                style: deliverableStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Developable SHLAA Sites',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa18_developable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: developablePopup,
                maxZoom: 2,
                style: developableStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Town Centre Living Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa18_town_centre&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: towncentrelivingareaPopup,    
                maxZoom: 2,
                style: towncentrelivingareaStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },       
        
        {
            key: 'Not Developable SHLAA Sites',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa18_not_developable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: notdevelopablePopup,
                maxZoom: 2,
                style: notdevelopableStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Already Residential',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa18_resi_not_developable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: residentialPopup,
                maxZoom: 2,
                style: residentialStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Residential Land Availability',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:rla&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: rlaPopup,
                maxZoom: 2,
                style: rlaStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
        
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration