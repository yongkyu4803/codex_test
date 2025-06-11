# Todo List Product Requirements

## Overview
- Allow users to create daily memos and tasks.
- Each task belongs to a category and includes a due date and progress percentage.
- Store data locally using `localStorage` for now, with a Supabase client configured for future use.

## Features
1. **Task Creation**
   - Title, category, due date, memo field.
2. **Progress Tracking**
   - Tasks display a progress bar and can be updated with a range input.
3. **Category Grouping**
   - Tasks are grouped by category for easy browsing.
4. **Daily Memo**
   - Optional notes attached to each task.

## Tech Stack
- Next.js
- Tailwind CSS
- Supabase (configuration only)

## Folder Structure
```
components/       React components
lib/              Supabase client setup
pages/            Next.js pages
styles/           Global styles including Tailwind
```
