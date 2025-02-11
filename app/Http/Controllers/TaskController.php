<?php

namespace App\Http\Controllers;

use App\Enums\TaskStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = DB::table('tasks')
            ->where('user_id', $request->user()->id)
            ->get();
        return Inertia::render('Dashboard', [
            "tasks" => $tasks
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['string', 'nullable'],
        ]);

        DB::table('tasks')->insert([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => $request->user()->id,
        ]);

        return to_route('dashboard');
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['string', 'nullable'],
        ]);

        DB::table('tasks')
            ->where('id', $id)
            ->update([
                'title' => $request->title,
                'description' => $request->description,
        ]);

        return to_route('dashboard');
    }

    public function updateStatus(Request $request, string $id)
    {
        $request->validate([
            "status" => [Rule::enum(TaskStatus::class)],
        ]);

        DB::table('tasks')
            ->where('id', $id)
            ->update([
                'status' => $request->status
        ]);

        return to_route('dashboard');
    }

    public function delete(string $id)
    {
        DB::table('tasks')->where('id', $id)->delete();
        return to_route('dashboard');
    }
}
