import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.css';

interface RegisterData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    authUser: string;
}
const RegisterForm = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<Partial<RegisterData>>({});

    const validateForm = (): boolean => {
        const validationErrors: Partial<RegisterData> = {};

        // Validate name
        if (!firstname) {
            validationErrors.firstname = 'Your first name is required';
        }

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

        if (password) {
            if (password.length < 8 || password.length > 32) {
                validationErrors.password = 'Password must be at least 8 characters and no more than 32 characters';
            }
            if (!/\d/.test(password)) {
                validationErrors.password = 'Password must contain at least one number';
            }
            if (!/[!@#$%^&*]/.test(password)) {
                validationErrors.password = 'Password must contain at least one special character';
            }
        }

        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0; // Returns true if there are no errors
    };

    const createUser = () => {
        const url = `${apiUrl}?rest_route=/auth-madelab/v1/users&email=${email}&password=${password}&firstname=${firstname}&lastname=${lastname}`;

        fetch(url, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/login';
                } else if (data.errorCode === 38) {
                    setErrors({ email: 'Email already exists' })
                } else {
                    setErrors({ authUser: data.message })
                }
            });
    };

    const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!validateForm()) {
            return; // If form validation fails, don't submit the form
        }

        createUser();
    };

    return (
        <>
            <form onSubmit={handleSubmitRegister} className="max-w-3xl mx-auto">
                {errors.authUser && <p className="text-sm text-red-500">{errors.authUser}</p>}
                <div className={`${styles.row}`}>
                    <div className={`${styles.colmd6} ${styles.col}`}>
                        <label className="block w-full mb-2">First name</label>
                        <input className="block w-full outline-none focus:border-black"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstname && <p className="text-sm text-red-500">{errors.firstname}</p>}
                    </div>
                    <div className={`${styles.colmd6} ${styles.col} ${styles.mtmd0} mt-5`}>
                        <label className="block w-full mb-2">Last name</label>
                        <input className="block w-full outline-none focus:border-black"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastname && <p className="text-sm text-red-500">{errors.lastname}</p>}
                    </div>
                    <div className={`${styles.col} mt-5`}>
                        <label className="block w-full mb-2">Email</label>
                        <input className="block w-full outline-none focus:border-black"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className={`${styles.colmd6} ${styles.col} mt-5`}>
                        <label className="block w-full mb-2">Password</label>
                        <input className="block w-full outline-none focus:border-black"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>
                    <div className={`${styles.colmd6} ${styles.col} mt-5`}>
                        <label className="block w-full mb-2">Re-type Password</label>
                        <input className="block w-full outline-none focus:border-black"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>
                    <div className={`${styles.col} mt-5`}>
                        <button className="block w-full px-8 py-4 text-white bg-black uppercase" type="submit">Register</button>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <span className="font-light">Already have an account?</span> <Link href="/login">Login</Link>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;