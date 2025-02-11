import {PageProps} from '@/types';
import {Head} from '@inertiajs/react';
import NavBar from "@/Components/NavBar";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import {CheckIcon} from "lucide-react";
import {ReactNode} from "react";

export default function Welcome({
                                    auth,
                                    laravelVersion,
                                    phpVersion,
                                }: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    return (
        <>
            <Head title="task.ly"/>
            <NavBar/>

            <section className={'flex items-center justify-center container mx-auto py-20'}>
                <div className={'text-center max-w-3xl'}>
                    <h1 className={'font-semibold text-6xl leading-[1.3] mb-5'}>Simplify Your Tasks, Supercharge Your
                        <span
                            className={'bg-gradient-to-r from-violet-600 via-purple-400 to-indigo-400 text-transparent bg-clip-text'}> Productivity</span>
                    </h1>
                    <p className={'leading-[160%] text-gray-600 mb-8'}>task.ly is a simple yet powerful task management
                        app
                        designed to help you stay organized and boost productivity. With an intuitive interface and
                        smart features, you can easily create, track, and complete your tasks effortlessly.</p>
                    <div className={'flex items-center justify-center space-x-4'}>
                        <PrimaryButton>Get started</PrimaryButton>
                        <SecondaryButton>Try demo</SecondaryButton>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className={'grid grid-cols-3 gap-5 container mx-auto py-5'}>
                <div className={'bg-white/20 ring-1 ring-black/5 p-5 rounded-lg isolate backdrop-blur shadow-lg'}>
                    <h2 className={'font-semibold text-lg mb-3'}>Smart Task Management</h2>
                    <p className={'leading-5'}>Easily create, edit, and organize tasks with deadlines, priorities, and
                        categories.
                    </p>
                </div>
                <div className={'bg-white/20 ring-1 ring-black/5 p-5 rounded-lg isolate backdrop-blur shadow-lg'}>
                    <h2 className={'font-semibold text-lg mb-3'}>Reminders & Notifications</h2>
                    <p className={'leading-5'}>Stay on track with timely reminders and notifications for upcoming
                        deadlines.
                    </p>
                </div>
                <div className={'bg-white/20 ring-1 ring-black/5 p-5 rounded-lg isolate backdrop-blur shadow-lg'}>
                    <h2 className={'font-semibold text-lg mb-3'}>Collaborative Task Sharing</h2>
                    <p className={'leading-5'}>Share tasks with teammates or family members to improve teamwork and
                        efficiency.
                    </p>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className={'container mx-auto py-10 flex flex-col items-center justify-center'}>
                <h2 className={'text-4xl font-semibold mb-7'}>Pricing</h2>
                <div className={'flex justify-center space-x-4'}>
                    <div className={'flex flex-col rounded-lg py-7 px-8 border border-gray-300'}>
                        <h3 className={'font-semibold text-lg mb-6'}>Free Plan (Forever Free)</h3>
                        <h3 className={'font-semibold text-3xl mb-6'}>Rp0<span
                            className={'text-base font-normal text-gray-500'}>/month</span></h3>
                        <ul className={'space-y-2'}>
                            <PricingFeaturesItem>Create and manage unlimited tasks</PricingFeaturesItem>
                            <PricingFeaturesItem>Basic reminders & notifications</PricingFeaturesItem>
                            <PricingFeaturesItem>Simple task categories</PricingFeaturesItem>
                        </ul>
                        <PrimaryButton className={'w-full mt-auto'}>Try now</PrimaryButton>
                    </div>
                    <div className={'rounded-lg py-7 px-8 border border-gray-300 space-y-6'}>
                        <h3 className={'font-semibold text-lg'}>Pro Plan</h3>
                        <h3 className={'font-semibold text-3xl'}>Rp59,000<span
                            className={'text-base font-normal text-gray-500'}>/month</span></h3>
                        <ul className={'space-y-2'}>
                            <PricingFeaturesItem>Everything in Free Plan</PricingFeaturesItem>
                            <PricingFeaturesItem>Advanced reminders & recurring tasks</PricingFeaturesItem>
                            <PricingFeaturesItem>Priority task management</PricingFeaturesItem>
                            <PricingFeaturesItem>Dark mode & custom themes</PricingFeaturesItem>
                        </ul>
                        <PrimaryButton className={'w-full'}>Try now</PrimaryButton>
                    </div>
                </div>
            </section>

            <section className={'py-10 flex flex-col items-center justify-center bg-violet-500'}>
                <div className={'container mx-auto text-center max-w-2xl'}>
                    <h2 className={'text-white text-5xl font-semibold mb-3'}>Get Started Today</h2>
                    <p className={'text-xl text-violet-200 mb-5'}>Stay organized and boost your productivity with TaskFlow.
                        Sign up now and take control of your tasks effortlessly!</p>
                    <SecondaryButton className={'border-white text-white'}>Get started</SecondaryButton>
                </div>
            </section>
        </>
    );
}

function PricingFeaturesItem(props: { children: ReactNode }) {
    return <li className={'flex items-center space-x-1'}>
        <CheckIcon className={'text-green-500'} size={20}/>
        <p>{props.children}</p>
    </li>
}
