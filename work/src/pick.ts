{
  type bou = {
    name: string;
    money: number;
    isMotaShota: boolean;
  };
  type olos = {
    isGhumay: boolean;
    iskhay: boolean;
    isMotaShota: boolean;
  };

  type ModernBou = Pick<bou, "money" | "name"> & Pick<olos, "isGhumay">;

  const bou1: ModernBou = {
    name: "emu",
    money: 1,
    isGhumay: true,
  };

  
}
