
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate  } from 'react-router-dom';


export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  let navigate = useNavigate();


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
        const response = await axios.post("http://localhost:7979/auth/create", formData);

        // console.log(response.data);

        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
        });

        // Redirect to a different page on successful registration
        navigate('/admin/login');
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
    <Card color="transparent" shadow={true} className="w-1/3 mt-[100px] mx-auto p-5 items-center">
      <Typography variant="h4" color="blue-gray">
       Admin Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Register
      </Typography>
      <form onSubmit={handleSubmit} method="post" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input className="border focus:border-primary" size="lg" label="username" type="username" name="username"  onChange={handleChange}  value={formData.username} />
          <Input className="border focus:border-primary" type="password" size="lg" label="Password" name="password" onChange={handleChange}   value={formData.password}  />
        </div>
        
        <Button type="submit" className="mt-6 bg-primary" fullWidth>
          Register
        </Button>
        
      </form>
    </Card>
  );
}

 