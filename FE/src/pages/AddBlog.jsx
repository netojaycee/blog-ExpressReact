import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useProtectedRoute from "../utils/guard";

export default function AddBlog() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
    time: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    tag: "",
    time: "",
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;

    // Validate title
    if (!formData.title) {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, title: "" }));
    }

    // Validate description
    if (!formData.description) {
      setErrors((prev) => ({
        ...prev,
        description: "Description is required",
      }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, description: "" }));
    }

    // Validate tag
    if (!formData.tag) {
      setErrors((prev) => ({ ...prev, tag: "Tag is required" }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, tag: "" }));
    }

    // Validate time
    if (!formData.time) {
      setErrors((prev) => ({ ...prev, time: "Time of Read is required" }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, time: "" }));
    }

    // Validate time
    if (!formData.image) {
      setErrors((prev) => ({ ...prev, image: "Time of Read is required" }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, image: "" }));
    }

    if (formIsValid) {
      try {
        const response = await axios.post(
          "http://localhost:7979/blog/create",
          formData
        );

        // console.log(response.data);

        Swal.fire({
          icon: "success",
          title: "Blog added Successfully",
          text: response.data.message,
        });

        // Redirect to a different page on successful registration
        navigate('/admin/dashboard');
      } catch (error) {
        console.error("An unexpected error occurred:", error);

        Swal.fire({
          icon: "error",
          title: "blog creation Failed",
          text: response.data.message,
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
  useProtectedRoute();
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-1/3 mt-[100px] mx-auto p-5 items-center shadow-2xl"
    >
      <Typography variant="h4" color="blue-gray">
        Add Blog
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
          {/* <Input size="lg" label="Image" type="file" accept="image/*" name="image" onChange={handleImageChange} /> */}
          <Input
            size="lg"
            label="Image"
            type="text"
            name="image"
            onChange={handleChange}
          />

          {errors.image && <span className="text-red-500">{errors.image}</span>}
        </div>
        <Button type="submit" className="bg-primary mt-6" fullWidth>
          Add Blog
        </Button>
      </form>
    </Card>
  );
}
