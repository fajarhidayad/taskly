import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >

            <main className={'container mx-auto py-7'}>
                <PrimaryButton>Add new</PrimaryButton>
                <section className={'py-10 grid grid-cols-3 gap-10'}>
                    <div className={'bg-gray-200/70 rounded-lg py-2 px-3'}>
                        <h2 className={'font-semibold text-lg mb-4'}>Todo</h2>
                        <ul>
                            <li className={'bg-white rounded-lg border border-gray-300 p-3'}>
                                <h3 className={'font-medium text-lg mb-2'}>Title</h3>
                                <p className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Numquam, rem?</p>
                            </li>
                        </ul>
                    </div>
                    <div className={'bg-gray-200/70 rounded-lg py-2 px-3'}>
                        <h2 className={'font-semibold text-lg mb-4'}>In-Progress</h2>
                        <ul>
                            <li className={'bg-white rounded-lg border border-gray-300 p-3'}>
                                <h3 className={'font-medium text-lg mb-2'}>Title</h3>
                                <p className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Numquam, rem?</p>
                            </li>
                        </ul>
                    </div>
                    <div className={'bg-gray-200/70 rounded-lg py-2 px-3'}>
                        <h2 className={'font-semibold text-lg mb-4'}>Done</h2>
                        <ul>
                            <li className={'bg-white rounded-lg border border-gray-300 p-3'}>
                                <h3 className={'font-medium text-lg mb-2'}>Title</h3>
                                <p className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Numquam, rem?</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
