const page = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await posts.json();
  // console.log(postData)
  return (
    <div>
      Blog page
      <h1>Data Length: {postData.length}</h1>
    </div>
  );
};

export default page;
