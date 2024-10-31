import { useState } from "react";


const About = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const[error, setError] = useState('')

    const handleNameChange=e=>{
        e.preventDefault()
        setName(e.target.value)
    }
    const handleEmailChange=e=>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePasswordChange=e=>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    const submitForm=e=>{
        e.preventDefault()
        if(password.length <6){
            setError('Password can not be less than 6 charecter')
            
        }else{
            setError('')
            alert(`Your name is: ${name} and Your Email is:  ${email} and Password: ${password}`)
        }
        
    }
    return (
        <div>
            <div className="flex justify-center items-center my-4 ">
                <form  onSubmit={submitForm} action="">
                    <input placeholder="Your Name"  onChange={handleNameChange} type="text" className="border-2 border-blue-500" name="name"/>
                     <br />
                    <input onChange={handleEmailChange} type="email" placeholder="Email" className="border-2 border-blue-500" email="email"/> <br />
                    <input onChange={handlePasswordChange} type="password" placeholder="Password" className="border-2 border-blue-500" pass="pass"/>
                    <br />
                    <button className="bg-green-700 p-4 rounded-md my-4">Submit</button>
                {
                    error && <p>{error}</p>
                }
                </form>
            </div>
        </div>
    );
};

export default About;