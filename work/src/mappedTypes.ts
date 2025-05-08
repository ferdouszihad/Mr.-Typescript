{
  type Area = {
    width: number;
    height: number;
  };

  type AreaStr<T> = {
    [key in keyof T]: T[key];
  };

  const box: AreaStr<{ width: string; height: number }> = {
    width: "100",
    height: 100,
  };
}
