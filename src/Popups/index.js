const developablesitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Sites - Developable (SHLAA 2020)</p>
  <p></p>
  <p class="info">Site Reference: ${feature.properties.site_reference}</p>
  <p class="info">Site Address: ${feature.properties.site_address}</p>
  <p class="info">Site Description: ${feature.properties.site_description_2020}</p>
  <p class="info">Site Area (Ha): ${feature.properties.site_area}</p>
  <p class="info">Est. Site Capacity: ${feature.properties.capacity}</p>
  <p class="info">Est. Delivery Years: ${feature.properties.delivery_years}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const tclaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Town Centre Living Area</p>
  <p></p>
  <p class="info">Site Address: ${feature.properties.site_address}</p>
  <p class="info">Site Description: ${feature.properties.site_description_2020}</p>
  <p class="info">Site Area (Ha): ${feature.properties.site_area}</p>
  <p class="info">Site Capacity: ${feature.properties.capacity}</p>
  <p class="info">Delivery Years: ${feature.properties.delivery_years}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const conservationPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Conservation Area</p>
  <p></p>
  <p class="info">Name: ${feature.properties.cons_area}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const permissionedPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Sites with planning permission for housing (SHLAA 2020)</p>
  <p></p>
  <p class="info">Site Reference: ${feature.properties.site_reference}</p>
  <p class="info">Site Address: ${feature.properties.site_address}</p>
  <p class="info">Site Area (Ha): ${feature.properties.site_area}</p>
  <p class="info">Net Site Capacity remaining: ${feature.properties.net_capacity}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const notassessedPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Sites that did not pass initial sift (SHLAA 2020)</p>
  <p></p>
  <p class="info">Site Address: ${feature.properties.temp_id} (Working reference)</p>
  <p class="info">Site Address: ${feature.properties.site_address}</p>
  <p class="info">${feature.properties.website_map_text}</p>

  
  </div>`
 
  layer.bindPopup(content)
 }

 const nondevelopablesitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Sites - Not Developable (SHLAA 2020)</p>
  <p></p>
  <p class="info">Site Reference: ${feature.properties.site_reference} (Working reference)</p>
  <p class="info">Site Address: ${feature.properties.site_address}</p>
  <p class="info">Site Description: ${feature.properties.site_description}</p>
  <p class="info">Site Area (Ha): ${feature.properties.site_area}</p>
  <p class="info">Notes: ${feature.properties.assessment_text}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const allsitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">All Sites Considered (SHLAA 2020)</p>
  <p></p>
  <p class="info">Site Address: ${feature.properties.reference} (Working reference)</p>

  
  </div>`

  layer.bindPopup(content)
}

export {
  developablesitesPopup,
  conservationPopup,
  permissionedPopup,
  notassessedPopup,
  tclaPopup,
  nondevelopablesitesPopup,
  allsitesPopup
} 