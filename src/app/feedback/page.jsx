"use client"
import { useState } from "react";
import * as Realm from "realm-web";




export default function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [jobTitle,setJobTitle] = useState("")

  

  var refresh_token = "";
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  async function handleSubmit (event) {
    event.preventDefault();
    console.log({ name, rating, feedback , jobTitle, email });
    // Validate email
   if (!email || !/\S+@\S+\.\S+/.test(email)) {
    setEmailError(true)
    return
   }
  
// Add your App ID
const app = new Realm.App({ id: "psportal-rldsu" });
// Create an anonymous credential
// Create an email/password credential
const credentials = Realm.Credentials.emailPassword(
  "manish.sahni@mongodb.com",
  "manish@123"
);
try {
  var user = await app.logIn(credentials);
  console.log("Successfully logged in!", user.id);
} catch (err) {
  console.error("Failed to log in", err.message);
}

const handleSubmit = await user.functions.submitFeedback(email,jobTitle,name,rating,feedback);
console.log(handleSubmit.insertedId);
if(handleSubmit.insertedId != 'undefined'){
  alert('Feeback submitted successfully!');
}
      // Reset form
      setRating(8)
      setEmail('')
      setFeedback('')
      setJobTitle('')
      setName('')
      setEmailError(false)
  }
  return (

    <div className="max-w-md mx-auto" style={{margin: '0 auto'}}>
      <h2 className="text-2xl font-semibold mb-5">
      Developer Foundation Training Feedback
      </h2>
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
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            className={`w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${emailError ? 'border-red-500' : ''}`}

            required
          />
        </div>
        <div className="my-4">
        <label htmlFor="email" className="block font-medium">Email</label>
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
            Feedback and Suggestion about the course content
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

