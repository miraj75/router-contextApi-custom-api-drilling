

const ReuseableInput = ({handleSubmit, formTitle, submitBtnText='submit'}) => {

    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email:e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
             <div className='flex justify-center items-center'>
            <form onSubmit={handleLocalSubmit} action="">
                <h1>{formTitle}</h1>
                <input  type="text" className="border-2 border-blue-500" placeholder='Name' name='name'/>
                <br />
                <input  type="email" className="border-2 border-blue-500 my-3" placeholder='Email' name='email' />
                <br />
                <input  type="password" className="border-2 border-blue-500 " placeholder='Password' name='password' />
                <br />
                <button value={submitBtnText} className="bg-green-700 p-4 rounded-md my-4">Submit</button>
            </form>
            </div> 
        </div>
    );
};

export default ReuseableInput;