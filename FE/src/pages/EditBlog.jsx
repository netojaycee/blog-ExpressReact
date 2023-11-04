import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams(); // Assuming you're using React Router for navigation
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
    time: "",
    image: null,
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    tag: "",
    time: "",
    image: "",
  });

  useEffect(() => {
    // Fetch blog data by ID and populate the form
    axios.get(`/api/blogs/${id}`).then((response) => {
      const blogData = response.data;
      setFormData({
        title: blogData.title,
        description: blogData.description,
        tag: blogData.tag,
        time: blogData.time,
        image: null, // You may want to fetch the image URL as well
      });
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;

    // Validate title (similar to what you did in AddBlog)
    // ...

    if (formIsValid) {
      try {
        const formDataWithImage = new FormData();
        formDataWithImage.append("title", formData.title);
        formDataWithImage.append("description", formData.description);
        formDataWithImage.append("tag", formData.tag);
        formDataWithImage.append("time", formData.time);
        formDataWithImage.append("image", formData.image);

        const response = await axios.put(`/api/blogs/${id}`, formDataWithImage);

        console.log(response.data);

        Swal.fire({
          icon: "success",
          title: "Blog Edited Successfully",
          text: "You have successfully edited the blog!",
        });
      } catch (error) {
        console.error("An unexpected error occurred:", error);

        Swal.fire({
          icon: "error",
          title: "Blog Editing Failed",
          text: "An error occurred while editing the blog.",
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Typography variant="h4" color="blue-gray">
        Edit Blog
      </Typography>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Title"
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
          {errors.title && <span className="text-red-500">{errors.title}</span>}
          <Input
            type="text"
            size="lg"
            label="Description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description}</span>
          )}
          <Input
            size="lg"
            label="Tag"
            type="text"
            name="tag"
            onChange={handleChange}
            value={formData.tag}
          />
          {errors.tag && <span className="text-red-500">{errors.tag}</span>}
          <Input
            size="lg"
            label="Time of Read (minutes)"
            type="number"
            name="time"
            onChange={handleChange}
            value={formData.time}
          />
          {errors.time && <span className="text-red-500">{errors.time}</span>}
          <Input
            size="lg"
            label="Image"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
          />
          {errors.image && <span className="text-red-500">{errors.image}</span>}
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Save Changes
        </Button>
      </form>
    </Card>
  );
}