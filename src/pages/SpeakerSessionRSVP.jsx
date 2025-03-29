import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import HeroSection from "../components/HeroSection";

export default function SpeakerSessionRSVP() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [checkedIn, setCheckedIn] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);

    axios.post("https://tnp-task2-backend.onrender.com/api/rsvp/register", data)
      .then(response => {
        setRegistrationSuccess(true);
        setTimeout(() => setRegistrationSuccess(false), 5000);
      })
      .catch(error => alert("Error Registering!"));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Registration Form Section */}
      <div className="flex flex-col items-center mt-10 p-6" id="register">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Register for the Session</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input 
              className="w-full p-3 border rounded-lg text-lg" 
              placeholder="Full Name" 
              {...register("name", { required: true })} 
            />
            {errors.name && <p className="text-red-500">Name is required</p>}

            <input 
              className="w-full p-3 border rounded-lg text-lg" 
              type="email" 
              placeholder="Email" 
              {...register("email", { required: true })} 
            />
            {errors.email && <p className="text-red-500">Valid email is required</p>}

            <input 
              className="w-full p-3 border rounded-lg text-lg" 
              type="tel" 
              placeholder="Phone Number" 
              {...register("phone", { required: true })} 
            />
            {errors.phone && <p className="text-red-500">Phone number is required</p>}

            <motion.button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
            >
              Submit RSVP
            </motion.button>
          </form>
        </motion.div>
        
        {registrationSuccess && (
          <motion.div 
            className="mt-6 p-4 bg-green-500 text-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Registration successful! Check your email for confirmation.
          </motion.div>
        )}
      </div>
      
      {/* Social Media Share Buttons */}
      <div className="mt-10 flex justify-center space-x-4">
        <motion.button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => window.open("https://twitter.com/intent/tweet?text=Join%20this%20amazing%20speaker%20session!%20Register%20now!", "_blank")}
          whileHover={{ scale: 1.1 }}
        >
          Share on Twitter
        </motion.button>

        <motion.button 
          className="px-4 py-2 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-900 transition"
          onClick={() => window.open("https://www.linkedin.com/sharing/share-offsite/?url=https://event-rsvp.com", "_blank")}
          whileHover={{ scale: 1.1 }}
        >
          Share on LinkedIn
        </motion.button>
      </div>
      
      {/* Check-in / Check-out Section */}
      <div className="mt-10 flex flex-col items-center">
        <motion.button 
          onClick={() => setCheckedIn(!checkedIn)} 
          className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          {checkedIn ? "Check-Out" : "Check-In"}
        </motion.button>
        {checkedIn && <p className="text-green-700 mt-2 font-semibold">Checked in successfully!</p>}
      </div>
    </div>
  );
}
