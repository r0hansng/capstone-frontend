import { useState } from 'react'
import Button from '../../components/ui/Button/Button'
import Input from '../../components/ui/Input/Input'

const Login = () => {
    const [email, setEmail] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleContinue = (e) => {
        e.preventDefault()
        // Handle email login logic here
        console.log('Continue with email:', email)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Logo */}
                <div className="text-center">
                    <h1 className="text-4xl font-black font-brand text-text-primary">
                        NXTUP
                    </h1>
                </div>

                {/* Login Form */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="text-center">
                            <h2 className="text-2xl font-cheltenham font-bold text-text-primary">
                                Log in or create an account
                            </h2>
                        </div>

                        {/* Email Form */}
                        <form onSubmit={handleContinue} className="space-y-4">
                            <div>
                                <Input
                                    title="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full"
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="filled"
                                size="xl"
                                className="w-full bg-black text-white hover:bg-gray-800 font-franklin"
                            >
                                Continue
                            </Button>
                        </form>

                        {/* Divider */}
                        {/* <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-text-secondary font-roboto-slab">
                                    or
                                </span>
                            </div>
                        </div> */}

                        {/* Social Login Buttons */}
                        {/* <div className="space-y-3">
                            <Button
                                variant="outline"
                                className="w-full flex items-center justify-center gap-3 bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
                            >
                                <img src="/assets/icons/google.svg" alt="Google" className="w-5 h-5" />
                                Continue with Google
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-800"
                            >
                                <img src="/assets/icons/apple.svg" alt="Apple" className="w-5 h-5" />
                                Continue with Apple
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
