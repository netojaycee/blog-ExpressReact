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
    axios.get(`http://localhost:7979/blog/${id}`).then((response) => {
      const blogData = response.data;
      setFormData({
        title: blogData.title,
        description: blogData.description,
        tag: blogData.tag,
        time: blogData.time,
        image: null, // You may need to handle images separately, as they can't be pre-filled in a file input

      });
      
    });
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your validation code goes here

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("title", formData.title);
      formDataWithImage.append("description", formData.description);
      formDataWithImage.append("tag", formData.tag);
      formDataWithImage.append("time", formData.time);
      formDataWithImage.append("image", formData.image);

      const response = await axios.patch(
        `http://localhost:7979/blog/${id}`,
        formDataWithImage
      );

      if (response.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Blog Updated Successfully",
          text: response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Blog Update Failed",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };    

  return (
    <Card color="transparent" shadow={false} className="w-2/3 mt-[100px] mx-auto p-5 items-center shadow-2xl">
      <Typography variant="h4" color="blue-gray">
        Edit Blog
      </Typography>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mt-8 mb-2 w-full p-6"
      >
        <div className="mb-4 w-full flex flex-col gap-6">
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
        <Button type="submit" className="mt-6 bg-primary" fullWidth>
          Save Changes
        </Button>
      </form>
    </Card>
  );
}
