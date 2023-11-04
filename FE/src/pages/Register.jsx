
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;

    // Validate username
    if (!formData.username) {
      setErrors((prev) => ({ ...prev, username: "username is required" }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, username: "" }));
    }

    // Validate password
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    if (formIsValid) {
      try {
        const response = await axios.post("/api/auth/register", formData);

        console.log(response.data);

        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
        });

        // Redirect to a different page on successful registration
        // router.push("/some/other/page");
      } catch (error) {
        console.error("An unexpected error occurred:", error);

        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "An error occurred while registering.",
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

  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Typography variant="h4" color="blue-gray">
       Admin Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Register
      </Typography>
      <form onSubmit={handleSubmit} method="post" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="username" type="username" name="username"  onChange={handleChange}  value={formData.username} />
          <Input type="password" size="lg" label="Password" name="password" onChange={handleChange}   value={formData.password}  />
        </div>
        
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        
      </form>
    </Card>
  );
}

 