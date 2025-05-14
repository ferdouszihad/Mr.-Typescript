{
  //   Task 4: Union and Intersection Types
  // Objective: Create union and intersection types using interfaces.
  // Instructions:
  // Define interfaces Book and Magazine.
  // Create:
  // A type that is a union of Book and Magazine.
  // A type that is an intersection of Book and Magazine.

  interface Book {
    title: string;
    pages: number;
    price: number;
    author: string;
  }
  interface Megazine {
    title: string;
    pages: number;
    price: number;
    authors: string[];
    publish_Type: "monthly" | "yearly" | "weekly" | "quaterly";
  }

  type Publishing_Stuff = Book | Megazine;
  type LibraryItem = Book & Megazine & { author: string | string[] };

  const newPs: Publishing_Stuff = {
    title: "piya amar piya",
    author: "sakib khan",
    pages: 78,
    price: 220,
  };
  const newPs2: Publishing_Stuff = {
    title: "programming weeky",
    authors: ["jhankar", "zihad", "swarna"],
    pages: 78,
    price: 220,
    publish_Type: "monthly",
    author: "saikka",
  };

  const item1: LibraryItem = {
    title: "premi o premi",
    pages: 56,
    price: 220,
    author: "saikka",
    publish_Type: "weekly",
    authors: [],
  };
}
