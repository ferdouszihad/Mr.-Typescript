{
  interface Agent {
    name: string;
    _id: string;
    vehicle: string;
    earning: number;
    assign: (parcelId: string) => string;
    deliver: (parcelId: string) => boolean;
    withdraw: (amount: number) => void;
  }
}
