import axios from "../lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useAuth = ({middleware} = {}) => {

    const  router = useRouter();

    // Loading
    const [isLoading, setIsLoading] = useState(true);

    // User
    const  {data: user, error , mutate } = useSWR("/api/user", 
        () => axios
                .get("/api/user")
                .then(response => response.data.data)
                .catch(error => {
                    if(error.response.status != 409) throw error
                }),
    )

    // CSRF
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    // Login
    const login = async ({ setError, ...props }) => {
        setError([]);
    
        await csrf();
    
        axios
            .post("/api/login", props)
            .then(response => {
                const { user, token } = response.data;

                // Store the token in localStorage
                localStorage.setItem("token", token);

                localStorage.setItem("auth", true);

                // Set the Authorization header for Axios
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                mutate();
                router.push("/property");
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    setError(Object.values({ error: 'Invalid credentials' }).flat());
                } else if (error.response && error.response.status === 422) {
                    setError(Object.values(error.response.data.errors).flat());
                }
            });
    };

    const register = async ({setError, ...props}) => {
        setError([]);

        await csrf();

        axios
            .post("/api/register", props)
            .then(() => mutate() && router.push("/"))
            .catch(error => {
                if(error.response.status != 422) throw error

                setError(Object.values(error.response.data.errors).flat())
            })
    }

    useEffect(() => {
        if(user || error){ 
            setIsLoading(false);
        }

        if(middleware == "guest" && user) router.push("/");

        if(middleware == "auth" && error) router.push("/login");
    })

    return { 
        user,
        csrf,
        isLoading,
        login,
        register,
    }
}