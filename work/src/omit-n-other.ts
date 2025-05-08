{
  //omit
  type Man<T extends boolean> = {
    name: string;
    money: number;
    isMarried: T;
    bouName?: T extends true ? string : undefined;
    childrens?: T extends true ? number : 0;
  };

  type unMarried = Omit<Man<false>, "bouName" | "childrens">;

  type Married = Required<Man<true>>;
  type ConfusedMan = Partial<Man<true>>;
  type NeverMarried = Readonly<Man<false>>;

  type EmptyMan = Record<string, unknown>;

  const hamid: EmptyMan = {};
}
