const myUrlCreate = "http://localhost:3000/drones";
// const myUrlCreate = 'http://127.0.0.1:5500/drones'

// DOM
const dronesContainer = document.getElementById("dronesContainer");
const droneTemplate = document.getElementById("droneTemplate");


function printAllDrones(allDrones) {
  console.log("print");
  allDrones.forEach((drone) => {
    const myDrone = dronesContainer.importNode(droneTemplate.content, true);
    dronesContainer.appendChild(myDrone);
    myDrone.querySelector(".name").textContent = drone.name;
    myDrone.querySelector(".prop").textContent = drone.prop;
    myDrone.querySelector(".maxSpeed").textContent = drone.maxSpeed;
  });
}

async function getAllDrones() {
  try {
    const response = await fetch(myUrlCreate);
    const myDrones = response.json;
    console.log(myDrones);
    printAllDrones(myDrones);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", () => {
  getAllDrones();
});
