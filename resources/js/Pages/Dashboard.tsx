import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
import {BookmarkIcon, CheckCircle2Icon, CheckIcon, SquarePenIcon, Trash2Icon} from "lucide-react";
import {useState} from "react";
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

type TaskStatus = "todo" | "progress" | "done"

function filterTasks(tasks: Task[], status: string) {
    return tasks.filter(item => item.status === status)
}

export default function Dashboard({tasks}: { tasks: Task[] }) {
    const todo = filterTasks(tasks, "todo")
    const inProgress = filterTasks(tasks, "progress")
    const taskDone = filterTasks(tasks, "done")

    const {submit, errors, reset, clearErrors, data, setData} = useForm({
        title: "",
        description: "",
    })
    const [isOpen, setIsOpen] = useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        submit('post', '/tasks', {
            onSuccess: () => {
                handleCancel()
            }
        })
    }

    function handleCancel() {
        setIsOpen(false)
        reset()
        clearErrors()
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >

            <main className={'container mx-auto py-7 px-5'}>
                <Head title={'Dashboard'}/>
                <PrimaryButton onClick={() => setIsOpen(true)}>Add task</PrimaryButton>
                <Dialog open={isOpen} onClose={handleCancel} className="relative z-50">
                    <div
                        className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/20 backdrop-blur">
                        <DialogPanel className="max-w-lg border bg-white p-5 rounded-xl w-full">
                            <DialogTitle className="font-bold">Add new task</DialogTitle>
                            <form onSubmit={handleSubmit} className={'space-y-4'}>
                                <div className={'space-y-2'}>
                                    <label>Title</label>
                                    <input id={'title'} value={data.title}
                                           onChange={(e) => setData({...data, title: e.target.value})}
                                           className={'border border-gray-500 rounded px-3 py-2 w-full'}/>
                                    {errors.title && <p className={'text-red-500'}>{errors.title}</p>}
                                </div>
                                <div className={'space-y-2'}>
                                    <label>Description</label>
                                    <textarea id={"description"} value={data.description}
                                              onChange={(e) => setData({...data, description: e.target.value})}
                                              className={'border border-gray-500 rounded px-3 py-2 w-full'}/>
                                    {errors.description && <p className={'text-red-500'}>{errors.description}</p>}
                                </div>
                                <div className="flex gap-4 justify-end">
                                    <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
                                    <PrimaryButton type='submit'>Add</PrimaryButton>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>
                <section className={'py-10 grid grid-cols-3 gap-10'}>
                    <div className={'bg-gray-200/70 rounded-lg py-2 px-3 self-start'}>
                        <div className={'flex items-center mb-4 space-x-2'}>
                            <div className="size-2 bg-yellow-500 rounded-full"/>
                            <h2 className={'text-lg'}>to do</h2>
                        </div>
                        <ul className={'space-y-3'}>
                            {todo.map(task => <TaskItem key={task.id} task={task}/>)}
                        </ul>
                    </div>
                    <div className={'bg-gray-200/70 rounded-lg py-2 px-3 self-start'}>
                        <div className={'flex items-center mb-4 space-x-2'}>
                            <div className="size-2 bg-blue-500 rounded-full"/>
                            <h2 className={'text-lg'}>in progress</h2>
                        </div>
                        <ul className={'space-y-3'}>
                            {inProgress.map(task => <TaskItem key={task.id} task={task}/>)}
                        </ul>
                    </div>
                    <div className={'bg-gray-200/70 rounded-lg py-2 px-3 self-start'}>
                        <div className={'flex items-center mb-4 space-x-2'}>
                            <div className="size-2 bg-green-500 rounded-full"/>
                            <h2 className={'text-lg'}>done</h2>
                        </div>
                        <ul className={'space-y-3'}>
                            {taskDone.map(task => <TaskItem key={task.id} task={task}/>)}
                        </ul>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}

function TaskItem(props: { task: Task }) {
    function updateStatus(status: TaskStatus) {
        router.patch(`/tasks/${props.task.id}/status`, {
            status
        })
    }

    return <li className={'bg-white rounded-lg border border-gray-300 p-3'}>
        <div className={'flex items-center justify-between mb-2'}>
            <h3 className={'font-medium text-lg'}>{props.task.title}</h3>
            <button className={'text-red-500'} onClick={() => router.delete(`/tasks/${props.task.id}`, {})}><Trash2Icon
                size={15}/></button>
        </div>
        <p className={'text-gray-600'}>
            {props.task.description}
        </p>
        <div className={'flex items-center space-x-2 mt-2'}>
            {props.task.status === 'todo' ?
                <button onClick={() => updateStatus('progress')}
                        className={'p-2 rounded bg-blue-500 text-white text-xs'}>
                    <SquarePenIcon size={10}/>
                </button> :
                <button onClick={() => updateStatus('progress')}
                        className={'p-2 rounded bg-yellow-500 text-white text-xs'}>
                    <BookmarkIcon size={10}/>
                </button>
            }
            {props.task.status !== 'done' &&
                <button onClick={() => updateStatus('done')} className={'p-2 rounded bg-green-500 text-white text-xs'}>
                    <CheckIcon size={10}/>
                </button>}
        </div>
    </li>
}
