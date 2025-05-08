let EmusFrnd: string[] = ["moushumi", "spondon", "achol", "eti"];
let zihadFrnd: string[] = ["Anas", "Emon", "Manna", "sabikun Nahar"];

const [specialGuest, ...normalGuests] = zihadFrnd;

const invitedPersons: string[] = [...EmusFrnd, ...zihadFrnd];

const greet = (...guests: string[]) => {
  guests.forEach((guest) => console.log(`Konnichiwa ${guest}`));
};

greet(...invitedPersons);
