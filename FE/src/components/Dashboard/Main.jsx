import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Image", "Title", "Description"];



export default function Main() {
  const [blogs, setBlogs] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    // Define the backend endpoint for fetching blogs
    const apiUrl = "http://localhost:7979/blog/all-blog"; // Adjust the URL as needed

    // Make a GET request to fetch all blogs
    axios
      .get(apiUrl)
      .then((response) => {
        setBlogs(response.data); // Assuming the response data is an array of blogs
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  // console.log(blogs);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:7979/blog/${id}`);
      if (response.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Blog Deleted Successfully",
          text: response.data.message,
        });
        fetchBlogs();
      } else {
        Swal.fire({
          icon: "error",
          title: "Blog Deletion Failed",
          // text: response.data.message,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:7979/blog/${id}`);
      console.log(response.data);
      // fetchBlogs();
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Card className="h-full w-full overflow-hidden m-4 p-3">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-primary  p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-primary_variant leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {blog.image}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {blog.title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {blog.description}
                </Typography>
              </td>

              <td className="p-4">
                <div className="flex items-center space-x-4">
                  <Typography
                    as="a"
                    href="#"
                    onClick={() => navigate(`/admin/editblog/${blog.id}`)}     
                    variant="small"
                    color="blue-gray"
                    className="font-medium m-2"
                  >
                    <PencilSquareIcon className="h-5 w-5" />
                  </Typography>

                  <Typography
                    as="a"
                    href="#"
                    onClick={handleDelete}
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </Typography>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
