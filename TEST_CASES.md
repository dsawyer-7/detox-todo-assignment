# Manual Test Cases - Detox Todo App

## Overview
These test cases cover core functionality of the Todo application. They were designed to validate critical user flows and edge cases.

## Test Cases

| Test ID | Description | Preconditions | Test Steps | Test Data | Expected Result | Priority |
|---------|-------------|---------------|------------|-----------|-----------------|----------|
| TC001 | App launches successfully | None | 1. Launch the app | - | App opens and shows welcome screen | High |
| TC002 | User can add a new task | App is launched | 1. Type a task name<br>2. Tap "Add Task" button | Task: "Buy groceries" | New task appears in the list | High |
| TC003 | User can mark a task as completed | At least one task exists | 1. Tap on a task in the list | Existing task | Task is marked as completed (visual change) | High |
| TC004 | User can delete a task | At least one task exists | 1. Tap delete button on a task | Existing task | Task is removed from the list | High |
| TC005 | Cannot add empty task | App is launched | 1. Leave input field empty<br>2. Tap "Add Task" button | Empty string | Error message shown / task not added | Medium |
| TC006 | Multiple tasks can be added | App is launched | 1. Add 3 different tasks | "Task 1", "Task 2", "Task 3" | All tasks appear in the list | Medium |

## Notes
- These test cases focus on happy path and basic error handling.
- In a real project, I would expand this with more edge cases, performance tests, and accessibility checks.
