/* 
SelectionView.js
Parameters: "element" - HTML element with ID for selection view left side panel offcanvas 
Return: none
*/

import { MultiplePlots } from "./Plot.js";

let choices = [];
let choicesLayers = [];
let finalSelection = [];

export { choices, choicesLayers, finalSelection };

export function SelectionView(selection) {

    const selectionViewId = "selection-view-offcanvas";

    document.getElementById("selection-view").innerHTML = /*html*/
    `
    <div class="offcanvas offcanvas-start offcanvas-size-xl rounded shadow bg-body" data-bs-scroll="true" tabindex="-1" id="${selectionViewId}" aria-labelledby="offcanvasWithBothOptionsLabel" data-bs-backdrop="false" data-bs-animation="slide-in-left">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <h4><img src="./src/assets/hand-index-thumb-fill.svg"> Selection in progress...</h4>
        <p style="font-style: italic;">Click on points from th map to add to selection.</p>
        <hr/>
        <div id="selection-view-list"></div>
        <br>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-outline-danger" type="button" id="selection-view-clear-btn">Clear selection</button>
            <button class="btn btn-outline-success" type="button" id="selection-view-select-all-btn">Select all</button>
            <button class="btn btn-outline-primary" type="button" id="selection-view-plot-btn">Plot selection</button>
        </div>
      </div>

    </div>
    `;

    // functionality and visibilty for side panel offcanvas 
    const selectionView = document.getElementById(selectionViewId);
    const selectionViewOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(selectionView);
    selectionViewOffcanvas.show();

    // functionality for item checkbox 
    document.getElementById("selection-view-list").onclick = function(e) {
      if (e.target.value) {
        console.log(e.target.checked, e.target.value);
      }
    }

    // functionality for "select all" option 
    const selectAll = document.getElementById("selection-view-select-all-btn");
    selectAll.addEventListener("click", () => {
      selectAllPoints();
    });

    // functionality for "clear all" option 
    const clearAll = document.getElementById("selection-view-clear-btn");
    clearAll.addEventListener("click", () => {
      clearSelection();
    });

    const plotChecked = document.getElementById("selection-view-plot-btn");
    plotChecked.addEventListener("click", () => {
      plotSelection();
    })
}

function selectAllPoints() {
  // let checkboxes = document.getElementsByTagName("input");
  let checkboxes = document.getElementsByClassName("point-click-select");
  for (let i = 0; i < checkboxes.length; i++) {
    let choice = checkboxes[i];
    if (!choice.checked) {
      choice.checked = true; 
      choice.setAttribute("checked", "");
    }
  }
}

function clearSelection() {
  // let checkboxes = document.getElementsByTagName("input");
  let checkboxes = document.getElementsByClassName("point-click-select");
  for (let i = 0; i < checkboxes.length; i++) {
    let choice = checkboxes[i];
    if (choice.checked) {
      choice.checked = false; 
      choice.removeAttribute("checked");
    }
  }
  finalSelection = [];
}

// TODO - use the plotSelection from the Toast; going a different route may need to set choices as globals in order to send data to Plot
function plotSelection() {
  let checkboxes = document.getElementsByClassName("point-click-select");
  for (let i = 0; i < checkboxes.length; i++) {
    let choice = checkboxes[i];
    if (choice.checked) {
      console.log(choice.value)
      // TODO - prevent doubles; check before adding 
      finalSelection.push(choicesLayers[i]);
      // reviewChoicesLayers(choice.value);
    }
  }
  console.log(choicesLayers);
  console.log(finalSelection);
  // MultiplePlots(finalSelection, document.getElementById("multi-plot-view-contents"), "click");
}

function reviewChoicesLayers(name) {
  console.log('reviewChoiceLayers')
  for (let i = 0; i < choicesLayers.length; i++) {
    console.log(choicesLayers[i].name);
  }
}