"use strict";

function Sensor(id, name, type, manufacturer, events) {

    this.id = id;
    this.name = name;
    this.type = type;
    this.manufacturer = manufacturer;
    this.events = events;
}

let frontDoor = new Sensor(1, "Front Door Sensor", 34, "climax", [{ time: 100, name: "Door Closed" }, { time: 101, name: "Door Opened" }]);
let motionSensor = new Sensor(2, "Motion Sensor", 43, "NYCE", [{ time: 100, name: "Light off" }]);
let porticoLight = new Sensor(3, "Portico Light", 54, "Osram", [{ time: 100, name: "Light off" }]);
let mainEntrance = new Sensor(4, "Main Entrance", 34, "climax", [{ time: 100, name: "Door Closed" }]);

let list = [frontDoor, motionSensor, porticoLight, mainEntrance];

function findSensorsByType(sensors, kind) {
    let arr = [];
    for (const element of sensors) {
        if (element.type === kind) {
            arr.push(element);
        }

    }

    return arr;
}

//console.log(findSensorsByType(list, 34));

function collectManufacturers(arr) {

    let result = [];

    for (const element of arr) {
        if (!result.includes(element.manufacturer)) {
            result.push(element.manufacturer);
        }
    }

    return result;
}

//console.log(collectManufacturers(list));

function getLatestEventofSensor(arr, Id) {

    let sensor = arr.find(element => element.id === Id);

    return sensor.events.reduce((event, current) => {

        if (current.time > event.time) {

            return current;
        } else {
            return event;
        }
    });
}

console.log(getLatestEventofSensor(list, 1));