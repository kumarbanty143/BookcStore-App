import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Navbar from "../components/Navbar";
import Publish from "../components/Publish";
import Footer from "../components/Footer";

const PublishBook = () => {
  const [authUser, setAuthUser] = useAuth();
  const [bookData, setBookData] = useState({
    author: "",
    category: "",
    image: "",
    title: "",
    bookLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to submit the form data to the backend.
    console.log(bookData);
  };

  if (!authUser) {
    return <div>Please login to publish a book.</div>;
  }

  return (
    <>
      <Navbar />
      <Publish />
      <Footer/>
    </>
  );
};

export default PublishBook;
