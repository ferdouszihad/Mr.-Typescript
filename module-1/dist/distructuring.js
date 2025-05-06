"use strict";
{
    let zihadFrnd = [
        "Anas",
        "Emon",
        "Manna",
        "sabikun Nahar",
        "noushin",
    ];
    const [, , must, ...maybe] = zihadFrnd;
    let event = {
        name: "birthday party",
        parents: {
            mother: "emu",
            father: "zihad",
            grand: {
                father: "lokman",
                mother: "pushpo",
            },
        },
        guests: ["Anas", "Emon", "Manna", "sabikun Nahar", "noushin"],
    };
    const { name, parents: { grand: { father: grandpa }, }, guests: [, , special, ...waiting], } = event;
}
