"use strict";
{
    const newPerson = {
        name: "Abdur Rahman",
        address: {
            city: "Mirpur",
            district: "Dhaka",
            location: "House 12, Road 8, Block C",
            country: "Bangladesh",
            zip: 1216,
            map: {
                latitude: 23.8103,
                longitude: 90.4125,
            },
        },
        color: {
            hair: "black",
            eye: "brown",
            skin: "wheatish",
        },
        family: {
            id: "FAM_BD_001",
            name: "Fatema Begum",
            relation: "wife",
        },
        job: {
            companyName: "bKash Ltd.",
            designation: "Senior Software Engineer",
            experience: 7,
        },
        skills: ["JavaScript", "Python", "Django", "React"],
        isMarried: true,
        hobbies: ["cricket", "traveling", "reading Islamic books"],
        friends: ["Rahim", "Karim", "Salam", "Barkat"],
        financial_ability: {
            income: 120000, // BDT per month
            expense: 80000,
            savings: 40000,
        },
    };
    console.log(newPerson);
}
