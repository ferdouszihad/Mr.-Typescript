"use strict";
{
    // type dAgent = {
    //   car: "Tyota";
    //   truck: "mitsubishi";
    //   cycle: "Duronto";
    //   bike: "Dayang";
    // };
    // // type Vehicle = "car" | "truck" | "cycle" | "bike";
    // type Vehicle = keyof dAgent;
    // const v1: Vehicle = "car";
    const getValue = (obj, key) => {
        return obj[key];
    };
    const student = {
        name: "hero",
        roll: 18,
    };
    console.log(getValue(student, "name"));
}
