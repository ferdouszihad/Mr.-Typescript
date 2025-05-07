{
  //   const add = <T1, T2>(n1: T1, n2: T2): string => `[${n1} + ${n2}]`;

  const createArray = <T>(v: T): T[] => [v];

  console.log(createArray<string>("hello"));

  const createTuple = <T1, T2>(v1: T1, v2: T2): [T1, T2] => [v1, v2];

  console.log(createTuple<string, string>("emu", "zihad"));

  const createNewStudent = <T>(v: T): T => {
    return {
      ...v,
      course: "L1 WEB",
    };
  };

  type GoribStudent = {
    name: string;
    balance: 0;
  };
  type richStudent = {
    name: string;
    balance: number;
  };

  console.log(createNewStudent<GoribStudent>({ name: "kaishya", balance: 0 }));
  console.log(createNewStudent<richStudent>({ name: "kaishya", balance: 100 }));
}
