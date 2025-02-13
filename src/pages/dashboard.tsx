"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/useAuth';

export default function Dashboard() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    if (!user) return null;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {user && (
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        User Dashboard
                    </h1>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">User ID:</span>
                            <span className="text-lg text-gray-600">{user.id}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Name:</span>
                            <span className="text-lg text-gray-600">{user.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Email:</span>
                            <span className="text-lg text-gray-600">{user.email}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
