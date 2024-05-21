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
            <span class="weri-tr-title" id="weri-tr-num">WERI Technical Report No. ###</span>
            <br>
            <span class="weri-tr-title" id="weri-tr-text">Project Title</span>
            <br><br>
            <p id="abstract">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae. Sit amet mauris commodo quis imperdiet. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Turpis tincidunt id aliquet risus feugiat in. Nibh sit amet commodo nulla facilisi nullam vehicula. Diam maecenas sed enim ut sem viverra. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Facilisis magna etiam tempor orci eu. Aliquet porttitor lacus luctus accumsan tortor posuere. Risus in hendrerit gravida rutrum quisque. Pretium fusce id velit ut. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Nam libero justo laoreet sit. Nam at lectus urna duis convallis convallis. Eu lobortis elementum nibh tellus molestie nunc non blandit. Tristique senectus et netus et malesuada fames ac turpis. Quam pellentesque nec nam aliquam sem et.</p>
            <p class="people">
              <span>Authors</span>
              <br>
              <span class="names">Author 1 · Author 2 · Author 3</span>
            </p>
            <p class="people">
              <span>Contributors</span>
              <br>
              <span class="names">Developer · Data Analyst · Etc.</span>
            </p>
            <p class="people">
              <span>Acknowledgements</span>
              <br>
              <span class="group">Group</span>
              <br>
              <span class="dept">Deptartment</span>
              <br>
              <span class="names">Person 1 · Person 2 · Person 3</span>
            </p>
          </div>
          <div class="modal-footer about-btns">
            <a class="btn btn-primary" href="#" target="_blank" rel="noreferrer noopener" role="button">WERI Technical Report</a>
            <a class="btn btn-primary" href="https://guamhydrologicsurvey.uog.edu/index.php/interagency-maps/" target="_blank" rel="noreferrer noopener" role="button">NGLA Map Series</a>
          </div>
        </div>
      </div>
    </div>
    `
}