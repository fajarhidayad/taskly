import {Link, router, usePage} from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function () {
    const {auth} = usePage().props

    return <nav className='container mx-auto py-6 flex items-center justify-between'>
        <Link href='/' className='font-semibold text-2xl'>task.ly</Link>
        <div className={'flex items-center space-x-8'}>
            <p className={'text-gray-500 text-lg hover:text-gray-600'}>Features</p>
            <p className={'text-gray-500 text-lg hover:text-gray-600'}>Pricing</p>
            <p className={'text-gray-500 text-lg hover:text-gray-600'}>FAQ</p>
        </div>
        <div className={'flex items-center space-x-4'}>
            {auth.user ?
                <PrimaryButton onClick={() => router.visit('/dashboard')}>Dashboard</PrimaryButton> :
                <>
                    <PrimaryButton onClick={() => router.visit('/login')}>Login</PrimaryButton>
                    <SecondaryButton onClick={() => router.visit('/register')}>Register</SecondaryButton>
                </>
            }
        </div>
    </nav>
}
