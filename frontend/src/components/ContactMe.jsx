import { useState } from 'react';
import '../styles/contact.css'

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });
    
    const [status, setStatus] = useState(null);

      const handleChange=(event)=>{
       const {name,value} = event.target

      setUser((prev)=>({
        ...prev,[name]:value
      }))
      }
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
      };
    
      // Helper function to validate phone number (basic validation)
      const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; 
        return phoneRegex.test(phone);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Form validation
        if (!user.name || !user.email || !user.message || !user.phone) {
          setStatus({ type: 'error', message: 'All fields are required!' });
          return;
        }
    
        if (!validateEmail(user.email)) {
          setStatus({ type: 'error', message: 'Please enter a valid email address.' });
          return;
        }
    
        if (!validatePhone(user.phone)) {
          setStatus({ type: 'error', message: 'Please enter a valid phone number.' });
          return;
        }
    
        const newMessage = {
          ...user,
          date: new Date()
        };
    
        try {
          const response = await fetch('https://anju-malik-api-git-main-anjus-projects-cd603313.vercel.app/api/auth/sendmessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage)  // Send a single message, not an array
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setStatus({ type: 'success', message: 'Your message has been sent!' });
            setUser({ name: '', email: '', message: '', phone: '' });
          } else {
            setStatus({ type: 'error', message: data.message || 'There was an error sending your message. Please try again.' });
          }
        } catch (error) {
          setStatus({ type: 'error', message: 'There was an error with the network. Please try again later.' });
        }
      };

    return (
        <>
            <div className="conatainerContact">
                <div className='contactCard'>
                    <h2 className='contactCardHead'>Get In Touch</h2>
                    <form className='contactForm' onSubmit={handleSubmit}>
                        <input className='inputField' type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
                        <input className='inputField' type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
                        <input className='inputField' type="tel" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required />
                        <textarea className='inputField' name="message" placeholder="Message" value={user.message} onChange={handleChange} rows="4" required></textarea>
                        <button className='btnContact' type="submit">Submit</button>
                    </form>
                    {status && (
          <div className={`statusMessage ${status.type}`}>
            {status.message}
          </div>
        )}
                </div>
            </div>
        </>
    );
};

export default Contact;
