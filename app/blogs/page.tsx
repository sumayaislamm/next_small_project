import { getBlogs } from "../service/getBlogs";

const page = async () => {


  const blogs = await getBlogs();

  console.log(blogs);
  return (
    <div className="m-8">
      Blog page
      {blogs.map((blog: any) => (
        <div key={blog.id} className="mx-15 my-10">
          <h1>Blogs Number {blog.id}</h1>
          <h2 className="text-red-600">Here is the Title{blog.title}</h2>
          <p className="text-blue-900">{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
