/* 
index.js 
Description: Entry point for project. Appends all components to #app in index.html. 
*/

// components 
import { About } from "./components/About.js";
import { FullscreenModal } from "./components/FullscreenModal.js";
import { NavBar } from "./components/NavBar.js";
import { LMap } from "./components/LMap.js";
import { Legend } from "./components/Legend_v3.js";
import { LargePlotModal } from "./components/Plot.js";

document.getElementById("app").innerHTML = /*html*/ 
`
    <div id="nav-bar"></div>
    <div id="legend-offcanvas"></div>
    <div id="map"></div>
    <div id="info"></div>
    <div id="notif"></div>
    <div id="multiple-plots"></div>
    <div id="side-panel"></div>
    <div id="large-plot"></div>
    <div id="selection-view"></div>
`

NavBar(document.getElementById("nav-bar"));
About(document.getElementById("info"));
Legend(document.getElementById("legend-offcanvas"));
FullscreenModal(document.getElementById("multiple-plots"));
LargePlotModal(document.getElementById("large-plot"));
LMap(document.getElementById("map"));