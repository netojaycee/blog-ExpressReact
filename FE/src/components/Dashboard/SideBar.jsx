import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();


  const handleAddBlogClick = () => {
    navigate('/admin/addblog');
  };
  const handleAllBlogClick = () => {
    navigate('/admin/dashboard');
  };


  const handleLogout = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:7979/auth/logout", null, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Logout Successful",
          text: response.data.message,
        });

        localStorage.removeItem("token");
        navigate("/admin/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl border-primary border h-100 shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          mhapy
        </Typography>
      </div>
      <List>
      <ListItem className="hover:bg-primary hover:text-primary_variant" onClick={handleAllBlogClick}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          All Blogs
        </ListItem>
        <ListItem className="hover:bg-primary hover:text-primary_variant" onClick={handleAddBlogClick}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Add Blog
        </ListItem>
        <ListItem className="hover:bg-primary hover:text-primary_variant" onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
}
