{
  //   Task 3: Object Types, Type Alias, & Literal Types
  // Objective: Define a structured Person object using Type Aliases.
  // Instructions:
  // Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

  type Person = {
    name: string;
    address: {
      city: string;
      district: string;
      location: string;
      country: string;
      zip: number;
      map: {
        latitude: number;
        longitude: number;
      };
    };
    color: {
      hair: string;
      eye: string;
      skin: string;
    };
    family: {
      id: string;
      name: string;
      relation: string;
    };
    job: {
      companyName: string;
      designation: string;
      experience: number;
    };
    skills: string[];
    isMarried: boolean;
    hobbies: string[];
    friends: string[];
    financial_ability: {
      income: number;
      expense: number;
      savings: number;
    };
  };
  const newPerson: Person = {
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
