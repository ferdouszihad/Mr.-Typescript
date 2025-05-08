{
  // type Dev<T>={

  // }

  interface Dev<T1, T2 = null> {
    name: string;
    type: T1;
    company?: T2;
  }

  interface FrontEnd extends Dev<"Front-End Developer", string> {
    user_info: { isExperienced: boolean };
  }
  interface FrontEndFresher extends Dev<"Front-End Developer"> {
    user_info: { isExperienced: boolean };
  }

  const dev1: FrontEnd = {
    name: "abdul",
    company: "Polygon Tech.",
    type: "Front-End Developer",
    user_info: { isExperienced: true },
  };
  const dev2: FrontEndFresher = {
    name: "abdul",
    company: null,
    type: "Front-End Developer",
    user_info: { isExperienced: true },
  };
}
