"use strict";
let EmusFrnd = ["moushumi", "spondon", "achol", "eti"];
let zihadFrnd = ["Anas", "Emon", "Manna", "sabikun Nahar"];
const [specialGuest, ...normalGuests] = zihadFrnd;
const invitedPersons = [...EmusFrnd, ...zihadFrnd];
const greet = (...guests) => {
    guests.forEach((guest) => console.log(`Konnichiwa ${guest}`));
};
greet(...invitedPersons);
