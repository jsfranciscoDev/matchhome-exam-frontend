import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../hooks/auth';
import Button from '@/component/Button';
import Input from '@/component/Input';
import Label from '@/component/Label';
import Error from '@/component/Errors';

const Register = () =>{ 

    const router = useRouter();

    const handleBack = () => {
        router.push('/');
    };

    const { register , isLoading, user } = useAuth({middleware: "guest"});

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [errors, setError] = useState([]);

    const submitForm = async e => {
        e.preventDefault();
      
        register({email, password , password_confirmation, first_name, last_name , setError})
    }

    return (
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-6 lg:px-8">
        <Error errors={errors}/>
        <div className="back-icon" onClick={handleBack}>
            <FaArrowLeft />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
           Register
          </h2>
        </div>

       
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-8" onSubmit={submitForm}>
           
          <div>
            <Label htmlFor="email">Email/Username </Label>
            <Input type="email" id="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} required autoComplete="off"/>
          </div>


          <div>
            <Label htmlFor="first_name">First Name </Label>
            <Input type="text" id="first_name" value={first_name} placeholder="First Name" onChange={e => setFirstName(e.target.value)} required autoComplete="off"/>
          </div>

          <div>
            <Label htmlFor="last_name">Last Name </Label>
            <Input type="text" id="last_name" value={last_name} placeholder="Last name" onChange={e => setLastName(e.target.value)} required autoComplete="off"/>
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" id="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required autoComplete="off"/>
            </div>


            <div>
            <Label>Confirm Password</Label>
            <Input type="password" id="confirm_password" value={password_confirmation} placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} required autoComplete="off"/>
            </div>

            
            <div>
                <Button>Sign In</Button>
            </div>
          </form>

        </div>
      </div>
    );
  }
  
  export default Register;