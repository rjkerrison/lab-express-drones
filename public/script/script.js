const myUrlCreate = "http://localhost:3000/drones";
// const myUrlCreate = 'http://127.0.0.1:5500/drones'

// DOM
const dronesContainer = document.getElementById("dronesContainer");
const droneTemplate = document.getElementById("droneTemplate");
const droneTplContent = droneTemplate.content;

function printAllDrones(allDrones) {
  console.log("print");
  allDrones.forEach((drone) => {
    console.log(drone);
    const oneDrone = document.importNode(droneTplContent, true);
    oneDrone.querySelector(".name").textContent = drone.name;
    oneDrone.querySelector(".prop").textContent = drone.propellers;
    oneDrone.querySelector(".maxSpeed").textContent = drone.maxSpeed;
    dronesContainer.appendChild(oneDrone);
  });
}

async function getAllDrones() {
  try {
    const response = await fetch(myUrlCreate);
    const myDrones = await response.json();
    printAllDrones(myDrones);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", () => {
  getAllDrones();
});
