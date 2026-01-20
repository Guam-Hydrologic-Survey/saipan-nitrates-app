/*
Legend_v3.js
*/

let nitrateToggleBtns = [];


const layersResetBtnId = "legend-layers-reset";
const layersRemoveBtnId = "legend-layers-remove";

// TODO - cleanup and use constants for marker color and shapes (from Chloride and Production components)
export function Legend(element) {

    let nitrateId = "nitrate-range";
    // let productionId = "production-range";
  
    element.innerHTML = /*html*/ 
    `
    <!-- Bootstrap Offcanvas for Legend -->
    <div class="offcanvas offcanvas-start offcanvas-size-sm rounded shadow bg-body" data-bs-scroll="true" tabindex="-1" id="legend" aria-labelledby="offcanvasWithBothOptionsLabel" data-bs-backdrop="false">
      <div class="offcanvas-header">
        <h3 class="offcanvas-title" id="legend-offcanvas-title">Legend</h3>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div id="${nitrateId}"></div>
       
        <hr>
        <div class="d-grid">
            <button type="button" class="btn btn-primary" id="${layersResetBtnId}" title="Add layers back on map"><i class="bi bi-arrow-clockwise"></i> Reset Layers</button>
            <span class="spacer"></span>
            <button type="button" class="btn btn-secondary" id="${layersRemoveBtnId}" title="Remove layers from map"><i class="bi bi-x-lg"></i> Remove Layers</button>
        </div>
      </div>
    </div>
    `;
  
    legend(nitrateId);
  }

  export { nitrateToggleBtns, layersResetBtnId, layersRemoveBtnId }
  
  function legend(nitrateId) {
    let nitrate = document.getElementById(nitrateId) 
    nitrate.innerHTML = /*html*/
    `
    <h6>Nitrate - ppm (mg/L) </h6>
    `;

    const nitratePath = "./src/data/nitrateRange.json"
 
    fetch(nitratePath)
        .then(response => response.json())
        .then(json =>  {
            let data = json.nitrateRange;
            for (let i = 0; i < data.length; i++) {
                let toggleBtnId = `nitrate-range-${data[i].name}`;
                nitrateToggleBtns.push(toggleBtnId);
                nitrate.innerHTML += /*html*/ `
                <div class="form-check">
                    <input class="form-check-input checkbox-input" type="checkbox" value="${toggleBtnId}" id="${toggleBtnId}" checked>
                    <label class="form-check-label" for="${toggleBtnId}">
                        <?xml version="1.0" encoding="UTF-8"?>
                        <svg id="circle-icon-svg" width="20px" height="24px" stroke-width="2" viewBox="0 0 24 20" fill="${data[i].hex}" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        ${data[i].range}
                    </label>
                </div>
                `;
            }
        });
  
    
  } 
