<?php

namespace App\Enums;

enum TaskStatus: string {
    case ToDo = 'todo';
    case InProgress = 'progress';
    case Done = 'done';
}
