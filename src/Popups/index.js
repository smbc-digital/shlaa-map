const deliverablePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Deliverable Sites - SHLAA 2018</p>
  <p></p>
  <p class="info">Site Reference: ${feature.properties.site_reference}</p>
  <p class="info">Site Name: ${feature.properties.site_name}</p>
  <p class="info">Estimated Dwelling Capacity: ${feature.properties.site_capacity}</p>
  <p class="info">Development Period: ${feature.properties.development_trajectory}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const developablePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Developable Sites - SHLAA 2018</p>
  <p></p>
  <p class="info">Site Reference: ${feature.properties.site_reference}</p>
  <p class="info">Site Name: ${feature.properties.site_name}</p>
  <p class="info">Estimated Dwelling Capacity: ${feature.properties.site_capacity}</p>
  <p class="info">Delivery Period: ${feature.properties.development_trajectory}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const towncentrelivingareaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Town Centre Living Area</p>
  <p></p>
  <p class="info">Site Reference: ${feature.properties.site_reference}</p>
  <p class="info">Site Name: ${feature.properties.site_name}</p>
  <p class="info">Estimated Dwelling Capacity: ${feature.properties.site_capacity}</p>
  <p class="info">Delivery Period: ${feature.properties.development_trajectory}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const notdevelopablePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Not Developable SHLAA Sites - SHLAA 2018</p>
  <p></p>
  <p class="info">Site References: ${feature.properties.site_reference}</p>
  <p class="info">Site Name: ${feature.properties.site_address}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const residentialPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Already Residential - SHLAA 2018</p>
  <p></p>
  <p class="info">Site References: ${feature.properties.site_reference}</p>
  <p class="info">Site Name: ${feature.properties.site_address}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const rlaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Residential Land Availability Sites</p>
  <p></p>
  <p class="info">Site References: ${feature.properties.site_reference}</p>
  <p class="info">Site Name: ${feature.properties.site_name}</p>
  <p class="info">Estimated Dwelling Capacity: ${feature.properties.dwelling_capacity}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

export {
  deliverablePopup,
  developablePopup,
  towncentrelivingareaPopup,
  notdevelopablePopup,
  residentialPopup,
  rlaPopup
}