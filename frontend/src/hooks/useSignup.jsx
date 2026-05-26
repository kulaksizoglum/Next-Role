import { useState } from "react";
import { useAuthContext } from "./useAuthContext.jsx"
import api from "../lib/axios.js";
import toast from "react-hot-toast"
import { useNavigate } from "react-router"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const signup = async (email, password) => {
        setisLoading(true)
        setError(null)

        try {
            const response = await api.post("/user/signup", {
                email, password
            })
            localStorage.setItem("user", JSON.stringify(response.data))
            dispatch({ type: "LOGIN", payload: response.data })
            setisLoading(false)
            toast.success("User logged in successfully")
            navigate("/")


        } catch (error) {
            setisLoading(false)

            const errorMessage =
                error.response?.data?.error || "Signup failed"

            setError(errorMessage)
            toast.error("Error signing in!!")

        }

    }
    return { signup, isLoading, error }
}