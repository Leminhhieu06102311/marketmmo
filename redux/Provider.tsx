"use client"
import { useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux"
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import { fetchUser } from "./userSlice";
export default function ProviderRedux({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    useEffect(() => {
        // Kiểm tra nếu cookie tồn tại
        const loggedInUser = Cookies.get('token');
        // check user logged
        if (loggedInUser) {
          const expirationDate = new Date(Cookies.get('token_expiration'));
          if (Date.now() > expirationDate.getTime()) {
            Cookies.remove('token');
            Cookies.remove('token_expiration');
            router.push('/')
          }
        }
      }, []);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}