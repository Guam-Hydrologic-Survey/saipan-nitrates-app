/*
CustomIcon.js
Description: Generates the map marker icon based on the last available values for chloride and production. 
*/

 // Function to create icon for point 
 export function getIcon(point) { // Expected argument: feature.properties 
    // Variables store lastest data values found 
    let latestNitrateValue = checkLastValue(point.y_vals)

    // Calls function and passes element at index 0 from array lists 
    let icon = checkNitrate(latestNitrateValue[0]) 
    return icon // Returns SVG string 
}

// Function checks last numerical value from array list 
export function checkLastValue(data) {
    let latestData = 0; let index = 0 // Initialize variables 

    for (let i = data.length - 1; i >= 0; i--) {
        index = i
        if (data[i] == null) {
            continue;
        } else {
            latestData = data[i];
            break;
        }
    }
    return [latestData, index]; // Returns array list with 2 values: Latest data found and array index of value 
}

// Function to compare nitrate value against a range to determine inner circle color 
// Expects a numerical value as an argument 
// Returns Hex code for color 
function checkNitrate(nitrate) {

    let nitrateIcon = "";

    const colors = [
        {
            name: "blue",
            hex: "#0070FF",
            range: "[0 - 30]",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#0070FF" stroke="black"/>
            </svg>
            `
        },
        {
            name: "green",
            hex: "#55FF00",
            range: "(30 - 150]",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#55FF00" stroke="black"/>
            </svg>
            `
        },
        {
            name: "yellow",
            hex: "#FFFF01",
            range: "(150 - 250]",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#FFFF01" stroke="black"/>
            </svg>
            `
        },
        {
            name: "orange",
            hex: "#FFAA00",
            range: "(250 - 500]",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#FFAA00" stroke="black"/>
            </svg>
            `
        },
        {
            name: "red",
            hex: "#FF0000",
            range: "(500 - 750]",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#FF0000" stroke="black"/>
            </svg>
            `
        },
        {
            name: "magenta",
            hex: "#A50080",
            range: "(750 - 1000]",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#A50080" stroke="black"/>
            </svg>
            `
        },
        {
            name: "purple",
            hex: "#73004C",
            range: "1000+",
            svg: `
            <svg width="100%" height="100%" viewBox="0 0 100 98" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path class="inner-shape" d="M76.9619 47.6222C76.9619 62.4791 64.9179 74.523 50.061 74.523C35.2041 74.523 23.1602 62.4791 23.1602 47.6222C23.1602 32.7652 35.2041 20.7213 50.061 20.7213C64.9179 20.7213 76.9619 32.7652 76.9619 47.6222Z" fill="#73004C" stroke="black"/>
            </svg>
            `
        }
    ]

    if (nitrate == null) {
        nitrateIcon = colors[0].svg
    } else if (nitrate == 0) {
        nitrateIcon = colors[0].svg
    } else if (nitrate <= 2) {
        nitrateIcon = colors[1].svg
    } else if (nitrate <= 4) {
        nitrateIcon = colors[2].svg
    } else if (nitrate <= 6) {
        nitrateIcon = colors[3].svg
    } else if (nitrate <= 8) {
        nitrateIcon = colors[4].svg
    } else if (nitrate <= 10) {
        nitrateIcon = colors[5].svg
    } else if (nitrate > 10) {
        nitrateIcon = colors[6].svg
    }

    return nitrateIcon;
}

