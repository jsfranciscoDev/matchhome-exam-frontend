import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/auth';
import Nav from "../component/Nav";
import Banner from '../component/property/Banner'; 
import Cards from '../component/property/Cards';

const Property = () => {
  const { isLoading } = useAuth(); // Assuming this hook provides authentication status
  const router = useRouter();

  const properties = [
    {
        propertyType: 'Amaia Laguna',
        model: 'Amaia Lands',
        location: 'Laguna',
        area: '50 sqm',
        price: '2.2 M',
        availability: 'Ready For Occupancy',
    },
    {
      propertyType: 'Amaia Laguna',
      model: 'Amaia Lands',
      location: 'Laguna',
      area: '50 sqm',
      price: '2.2 M',
      availability: 'Ready For Occupancy',
  },
  {
    propertyType: 'Amaia Laguna',
    model: 'Amaia Lands',
    location: 'Laguna',
    area: '50 sqm',
    price: '2.2 M',
    availability: 'Ready For Occupancy',
},
{
  propertyType: 'Amaia Laguna',
  model: 'Amaia Lands',
  location: 'Laguna',
  area: '50 sqm',
  price: '2.2 M',
  availability: 'Ready For Occupancy',
},
    // Add more property objects as needed
];

  useEffect(() => {
    // Retrieve auth status from localStorage
    const authStatus = localStorage.getItem("auth");

    // Redirect to the login page if auth status is not true
    if (authStatus !== "true" && !isLoading) {
      router.push("/"); // Redirect to the login page
    }
  }, [isLoading, router]);
  

  // Render property page content
  return (
    <>
     <Banner imageUrl="/images/banner-img.jpeg" opacity={0.5} />
     <Cards properties={properties} />
    </>
  );
};

export default Property;
