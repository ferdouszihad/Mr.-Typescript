{
  //   type GArray<T> = T[];
  type GArray<T> = Array<T>;
  type GTuple<T1, T2> = [T1, T2];

  const names: GArray<string> = ["abul", "kabul", "babul"];

  interface Guest {
    name: string;
    total_Persons: number;
    type: "BorPokkho" | "Konepokkho";
  }

  const guests: GArray<Guest> = [
    {
      name: "emu",
      total_Persons: 3,
      type: "Konepokkho",
    },
    {
      name: "Achol",
      total_Persons: 2,
      type: "BorPokkho",
    },
  ];

  const cuple1: GTuple<string, string> = ["emu", "zihad"];

  const guest: GTuple<Guest, { isInvited: boolean }> = [
    {
      name: "emu",
      total_Persons: 3,
      type: "Konepokkho",
    },
    {
      isInvited: true,
    },
  ];
}
