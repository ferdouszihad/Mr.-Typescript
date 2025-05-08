//play ground
{
  //   type Guest = {
  //     name: string;
  //     member: number;
  //     type: "Borpokho" | "konePokkho" | "political";
  //   };

  interface Guest {
    name: string;
    member: number;
    type: "Borpokho" | "konePokkho" | "political";
  }

  //   type GiftData = Guest & { giftName: string };
  interface GiftData extends Guest {
    giftName: string;
  }

  //   type Friends = string[];
  interface Friends {
    [index: number]: string;
  }

  const specialGuests: Friends = ["Anas", "Manna"];

  //   type Greetings = (name: string) => string;
  interface Greetings {
    (name: string): string;
  }

  const greet: Greetings = (name) => `Welcome ${name} sir`;

  // can define type of premitive data using interface
}
