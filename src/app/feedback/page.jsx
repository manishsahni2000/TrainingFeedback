"use client"
import { useState } from "react";
import emailjs from 'emailjs-com';


export default function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [jobTitle,setJobTitle] = useState("")


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, rating, feedback });
    // Validate email
   if (!email || !/\S+@\S+\.\S+/.test(email)) {
    setEmailError(true)
    return
   }
  
      // Send email
      sendEmail(rating, email)
  
      // Reset form
      setRating(5)
      setEmail('')
      setEmailError(false)
  }

  function sendEmail(rating, email) {
    const SERVICE_ID = 'service_8s0bldj'; // replace with your own service ID
    const TEMPLATE_ID = 'template_zq01sha'; // replace with your own template ID
    const USER_ID = 'GNQlvblxroMdo8Lyg'; // replace with your own user ID
  
    const templateParams = {
      rating: rating,
      email: email,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_name: 'Training Team',
        from_name: 'Manish',
        subject: 'Developer Foundation DF01 Day 1 Feedback',
        message: 'Email message content',
        reply_to: 'manishsahni2000@gmail.com, manish.sahni@mongodb.com'
    }, USER_ID).then((result) => {
        console.log('Email sent successfully:', result.text);
    }).catch((error) => {
        console.error('Email sending failed:', error);
    });
  }
  return (

    <div className="max-w-md mx-auto" style={{margin: '0 auto'}}>
      <h1 className="text-xl font-semibold mb-4">Course Feedback</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${emailError ? 'border-red-500' : ''}`}

            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job title" className="block font-medium mb-2">
            Your Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={name}
            onChange={(event) => set(event.target.value)}
            className={`w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${emailError ? 'border-red-500' : ''}`}

            required
          />
        </div>
        <div className="my-4">
        <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          className={`w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${emailError ? 'border-red-500' : ''}`}
        />
        {emailError && <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>}
      </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium mb-2">
            Rating ({rating})
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            className={`w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${emailError ? 'border-red-500' : ''}`}
            id="rating"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-medium mb-2">
            Feedback and Suggestion
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            className={`w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${emailError ? 'border-red-500' : ''}`}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

