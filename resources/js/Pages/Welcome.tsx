import {PageProps} from '@/types';
import {Head} from '@inertiajs/react';
import NavBar from "@/Components/NavBar";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

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
        </>
    );
}
