{
  type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
  const loadComments = async (): Promise<Comment> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    return data;
  };

  loadComments().then((data) => console.log(data));
}
