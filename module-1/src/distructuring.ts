{
  let zihadFrnd: string[] = [
    "Anas",
    "Emon",
    "Manna",
    "sabikun Nahar",
    "noushin",
  ];

  const [, , must, ...maybe] = zihadFrnd;

  let event: {
    name: string;
    parents: {
      mother: string;
      father: string;
      grand: {
        father: string;
        mother: string;
      };
    };
    guests: string[];
  } = {
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

  const {
    name,
    parents: {
      grand: { father: grandpa },
    },
    guests: [, , special, ...waiting],
  } = event;
}
