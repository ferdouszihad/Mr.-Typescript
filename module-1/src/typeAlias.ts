{
  //type Alias

  type Dev = {
    name: string;
    exp_year: number;
    current_company?: string;
    skills: string[];
  };

  const seniorEngineer: Dev = {
    name: "anas",
    exp_year: 3,
    current_company: "PolygonTech",
    skills: ["Laravel", "js", "react"],
  };

  const noobDev: Dev = {
    name: "Emon",
    exp_year: 0,
    skills: ["react,UI/Ux"],
  };

  type isAdmin = boolean;

  const isUserAdmin: isAdmin = true;
  type squareOf = (n1: number) => number;

  const sq: squareOf = function (n1) {
    return n1 * n1;
  };
  const sq2: squareOf = (n1) => {
    return n1 * n1;
  };
}
