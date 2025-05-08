//play ground
{
  //type Assertion ( variable as typeName)

  let name: any;
  name = "zihad Ferdous";
  console.log((name as string).length);
  type Name = {
    firstName: string;
    lastName: string;
  };
  name = {
    firstName: "ferdous",
    lastName: "zihad",
  };
  console.log((name as Name).firstName);

  const greeting = (name: string | Name | undefined): string | number => {
    if (typeof name == "string") return `Hello ${name} sir`;
    else if (typeof name == "object") {
      return `Hello ${name.firstName} sir`;
    } else return -1;
  };

  console.log((greeting("zihad") as string).toLocaleUpperCase());
  console.log(
    (
      greeting({
        firstName: "ferdous",
        lastName: "zihad",
      }) as string
    ).toLocaleUpperCase()
  );
  console.log((greeting(undefined) as number).toString());
}
