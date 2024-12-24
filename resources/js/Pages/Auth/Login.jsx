import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Login({  }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex flex-col lg:flex-row h-screen bg-[#c5f3de]">
                {/* Left Section */}
                <div className="flex flex-1 justify-center items-center p-6 lg:p-0">
                    <img
                        src="/images/login.png"
                        alt="Illustration"
                        className="w-full h-auto"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-[40%] bg-white flex flex-col justify-center px-8 lg:px-16 py-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6 lg:mb-8 font-['Plus Jakarta Sans']">
                        Welcome Back
                    </h1>
                    <form onSubmit={submit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="block text-lg lg:text-xl font-semibold text-black"/>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                placeholder="Enter your email"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Password Input */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" className="block text-lg lg:text-xl font-semibold text-black"/>

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Submit Button */}
                        <PrimaryButton disabled={processing}>
                            Sign In
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
