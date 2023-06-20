import { useState } from 'react';
import { useRouter } from "next/router";
import { saveTokenToLocalStorage, saveTokenExpirationToLocalStorage, saveEmailToLocalStorage } from '@/utils/authUtils';
import Link from 'next/link';

interface LoginData {
    email: string;
    password: string;
    authUser: string;
}

const LoginForm = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Partial<LoginData>>({});

    const validateForm = (): boolean => {
        const validationErrors: Partial<LoginData> = {};

        // Validate email
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid email format';
        }

        // Validate password
        if (!password) {
            validationErrors.password = 'Password is required';
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0; // Returns true if there are no errors
    };

    const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!validateForm()) {
            return; // If form validation fails, don't submit the form
        }

        await fetch(`${apiUrl}?rest_route=/auth-madelab/v1/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((response) => {
                const { data } = response;
                if (response.success) {
                    const expiration = new Date().getTime() / 1000 + 30 * 24 * 60 * 60;
                    saveTokenToLocalStorage(data.jwt);
                    saveEmailToLocalStorage(email);
                    saveTokenExpirationToLocalStorage(expiration);
                    router.push('/my-account');
                } else if (data.errorCode === 48) {
                    setErrors({ email: 'Wrong account or password' })
                } else {
                    setErrors({ authUser: data.message })
                }
            });
    };

    return (
        <>
            <form onSubmit={handleSubmitLogin} className="mx-auto max-w-[400px]">
                {errors.authUser && <p className="text-sm text-red-500">{errors.authUser}</p>}
                <div>
                    <label className="block w-full mb-2">Email</label>
                    <input className="block w-full outline-none focus:border-black"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="mt-5">
                    <label className="block w-full mb-2">Password</label>
                    <input className="block w-full outline-none focus:border-black"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>
                <button className="block w-full px-8 py-4 mt-5 text-white bg-black uppercase" type="submit">Login</button>
                <div className="mt-3 text-center">
                    {/* <span className="font-light">Don't have an account?</span> <a target="_blank" href="https://api.madelaboratory.net/login.php?action=register">Click here</a> */}
                    <span className="font-light">Don't have an account?</span> <Link href="/register">Click here</Link>
                </div>
                <hr className="my-5" />
                <div className="mt-3 text-center">
                    <Link className="font-light" target="_blank" href="https://api.madelaboratory.net/login.php?action=lostpassword">Forgot your password?</Link>
                </div>
            </form>
        </>
    );
}

export default LoginForm;