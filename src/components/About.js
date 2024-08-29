/* 
About.js
Parameters: "element" - an HTML element with ID for about modal
Return: none
*/

export function About(element) {
  element.innerHTML = /*html*/
  `
  <div class="modal fade" id="about" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">About</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>MAppFx</strong> is a web page interactive map environment that retrieves an interactive graph of a site upon clicking a map feature object (be it a point, polygon, or a line). WERI Web MAppFx is a product of WERI through the Guam Hydrologic Survey Program (P.L. 24-247) and USGS 104-b, available through the <a href="https://guamhydrologicsurvey.uog.edu/" target="_blank" rel="noreferrer noopener">Guam Hydrologic Survey website</a>. 
              
            <br><br>
            Data originated from Bureau of Environmental and Coastal Quality's Data Manager and Team. Through a collaborative effort, the GHS Information 
            Management Team created this online data visualization tool to facilitate modern means of data sharing and interagency outreach. The primary focus of this tool is to use nitrates as an indicator of groundwater contamination, making it an essential resource for environmental monitoring.
            <br><br>
            In terms of future development, the team behind WERI MAppFx plans to further enhance the user interface and user experience, taking into account feedback received during the 2023 CNMI Water Advisory Council Meeting. This includes improvements in identifying well shapes, implementing a color legend, incorporating additional statistics, and providing layers for different islands like Saipan, Tinian, and Rota. The ultimate goal is to seek approval to make this valuable product available for public viewing online, ensuring that it serves as a powerful tool for a wide range of users.
            <br><br>

            <strong>Developers</strong><br>
            MW Zapata · DK Valerio · NC Habana <br><br> 

            <strong>Acknowledgements</strong><br>
            <i>Bureau of Environmental and Coastal Quality</i><br>
            Glenn Arriola · Travis Spaeth · BECQ Team
            <br><br>

            <i>Brigham Young University</i><br>
            Civil Engineering Department, Hydroinformatics Laboratory <br>
            Riley Hales · Dr. Gus Williams · Dr. Norm Jones <br><br>
            
            <i>Water & Environmental Research Institute of the Western Pacific</i> <br>
            University of Guam <br>
            Shahram Khosrowpanah · Mark A. Lander · Bill Whitman <br><br>
            
            <i>University of Guam’s Web Team</i><br>
            John Wiglesworth · Matthew Raymundo · UOG Web Team · Rommel Hidalgo
            <br><br><br>
             
            </p>
          </div>
          <!--
          <div class="modal-footer about-btns">
            <a class="btn btn-primary" href="https://guamhydrologicsurvey.uog.edu/index.php/2023/02/28/mappfx-production-well-nitrates-northern-guam-lens-aquifer-v2/" target="_blank" rel="noreferrer noopener" role="button">WERI Technical Report</a>
            <a class="btn btn-primary" href="https://guamhydrologicsurvey.uog.edu/index.php/interagency-maps/" target="_blank" rel="noreferrer noopener" role="button">NGLA Map Series</a>
          </div>
          -->
        </div>
      </div>
    </div>
    `
}