/* 
Legend.js
Parameters: "element" - HTML element with ID for legend left side panel offcanvas 
Return: none
*/

export function Legend(element) {
    element.innerHTML = /*html*/
    `
    <div class="offcanvas offcanvas-start offcanvas-size-xl rounded shadow bg-body" data-bs-scroll="true" tabindex="-1" id="legend-offcanvas" aria-labelledby="offcanvasWithBothOptionsLabel" data-bs-backdrop="false">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <!-- replace/update this section with legend values -->
        <h3>Legend</h3>
        <hr>
        <p>Increasing:</p>
        <br>
        <br>
        <br>
        <p>Decreasing:</p>
        <br>
        <br>
        <br>
        <p>Insignificant:</p>
      </div>

    </div>
    `
}