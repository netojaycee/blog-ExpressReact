import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from 'react'
import axios from 'axios';
 



const TABLE_HEAD = ["Image", "Title", "Description"];
 
const TABLE_ROWS = [
  {
    Image: "John Michael",
    Title: "Manager",
    Description: "23/04/18",
    
  },
  {
    Image: "Alexa Liras",
    Title: "Developer",
    Description: "23/04/18",
    

  },
  {
    Image: "Laurent Perrier",
    Title: "Executive",
    Description: "19/09/17",
    

  },
  {
    Image: "Michael Levi",
    Title: "Developer",
    Description: "24/12/08",
    

  },
  {
    Image: "Richard Gran",
    Title: "Manager",
    Description: "04/10/21",
    

  },
];

//  fetch all blogs from endpoint

const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Make a GET request to your API endpoint
    axios.get('your-api-endpoint')
      .then(response => {
        setBlogs(response.data); // Assuming the response contains an array of blogs
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []); 


 
export default function Main() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Image, Title, Description}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={Title}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Image}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Description}
                  </Typography>
                </td>
               
                <td className={classes}>
                  <div className="flex items-center space-x-2">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium m-2"
                  >
                    Edit
                  </Typography>

                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Delete
                  </Typography>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}