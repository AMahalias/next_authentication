"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";

export default function LoginPage() {
    const { user, login, logout } = useAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const validateForm = (): boolean => {
        if (!email || !name) {
            setError("Please enter both email and name");
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        login({ id: Date.now(), name, email });
        router.push('/dashboard')
    };

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Login Page</h1>
            {!user ? (
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </form>
                    <Button type="submit" onClick={handleSubmit} variant="primary">
                        Log In
                    </Button>
                </div>
            ) : (
                <Button onClick={handleLogout} variant="secondary">
                    Log Out
                </Button>
            )}
        </div>
    );
}
