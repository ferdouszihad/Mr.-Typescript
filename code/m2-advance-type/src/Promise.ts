{
  type Student = {
    name: string;
    roll: number;
  };
  const randomStudent = <T>(): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      const names: string[] = ["hashi ", "khushi", "anondo", "sukhi", "xoss"];

      const randomRoll: number = Math.ceil(Math.random() * 10);

      if (randomRoll < 5) {
        resolve({ name: names[randomRoll], roll: randomRoll } as T);
      } else {
        reject("Try again");
      }
    });
  };

  const getAStudent = async (): Promise<Student> => {
    const student: Student = await randomStudent<Student>();
    // console.log(student);
    return student;
  };

  getAStudent().then((data) => console.log(data));
}
