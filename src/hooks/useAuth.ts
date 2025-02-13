import { useContext } from "react";
import { AuthContextType } from '@/types/User';
import { AuthContext } from '@/context/UserContext';

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a UserProvider");
    }

    return context;
};
