import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/auth';
import { useRouter } from 'next/router';
import Button from '@/component/Button';
import Input from '@/component/Input';
import Label from '@/component/Label';
import Error from '@/component/Errors';

const Home = () =>{ 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState([]);

  const { login, isLoading, user } = useAuth({middleware: "guest"});

  const submitForm = async e => {
      e.preventDefault();
    
      login({email, password , setError})
  }


  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <Error errors={errors}/>

          <form className="space-y-6" onSubmit={submitForm} autoComplete="off">
          
            <div>
              <Label htmlFor="email">email </Label>
              <Input type="email" id="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} required autoComplete="off"/>
            </div>


            <div>
            <Label>Password</Label>
            <Input type="password" id="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required autoComplete="off"/>
            </div>

            <div>
              <Button>Login</Button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Don't have an account? Sign up
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;