"use strict";
{
    const guests = [
        "Arafat",
        "Sumaiya",
        "Rahim",
        "Tasnim",
        "Faisal",
        "Jannat",
        "Kamal",
        "Nusrat",
        "Shafiq",
        "Sabrina",
        "Imran",
        "Farhana",
        "Abdullah",
        "Tania",
        "Shakil",
        "Mousumi",
        "Rafiq",
        "Sharmin",
        "Sajid",
        "Nazma",
        "Arif",
        "Shirin",
        "Bappi",
        "Rehana",
        "Salam",
        "Ferdousi",
        "Jamal",
        "Mita",
        "Siddiq",
        "Runa",
        "Nurul",
        "Shabnam",
        "Mizan",
        "Laila",
        "Habib",
        "Rashida",
        "Shahid",
        "Monika",
        "Alamgir",
        "Shahnaz",
        "Rana",
        "Farzana",
        "Khalil",
        "Mala",
        "Siraj",
        "Shamima",
        "Azad",
        "Rokeya",
        "Aslam",
        "Shilpi",
    ];
    //nullable
    //   function search(val: string | undefined | null = ""): string[] {
    //     return guests.filter((g) => g.toLowerCase().includes(val as string));
    //   }
    //   console.log(search(undefined));
    /// Unknown
    const error = () => {
        throw new Error("amake dao name, I need fame");
    };
    function search(val = "") {
        if (typeof val == "string") {
            return guests.filter((g) => g.toLowerCase().includes(val));
        }
        else {
            error();
        }
    }
    console.log(search(12));
}
