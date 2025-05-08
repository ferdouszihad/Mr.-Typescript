{
  type Meterials = {
    jharu: string;
    hari: string;
    patil: string;
    chula: string;
  };

  type isAdorshoBou<T> = T extends keyof Meterials ? true : false;

  type ModernBou = {
    name: string;
    isAdorshoBou: isAdorshoBou<"jharu">;
  };
}
