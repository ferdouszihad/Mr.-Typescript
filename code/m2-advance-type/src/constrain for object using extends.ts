{
  type IdealStudent = {
    name: string;
    email: string;
    roll: number;
  };
  const createNewStudent = <T extends IdealStudent>(student: T): T => {
    return {
      ...student,
      course: "L1 WEB",
    };
  };

  type GoribStudent = {
    email: string;
    name: string;
    balance: 0;
    Vata_Card_no: number;
    roll: number;
  };
  //   type richStudent = {
  //     email: string;
  //     twitter: string;
  //     name: string;
  //     balance: number;
  //   };

  console.log(
    createNewStudent({
      name: "me",
      email: "sss",
      roll: 12,
      m: "sss",
      gf: "halima",
    })
  );
}
