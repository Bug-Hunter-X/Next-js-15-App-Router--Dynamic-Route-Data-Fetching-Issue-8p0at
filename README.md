# Next.js 15 App Router Dynamic Route Bug

This repository demonstrates a bug encountered in Next.js 15's App Router when fetching data for dynamic routes.  The issue occurs when navigating to a dynamic route from another page within the application.  Direct navigation to the dynamic route works correctly, but navigating from another route results in unexpected behavior or data not being fetched.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Navigate to `/posts/1` directly.  The page should load correctly, showing data.
5. Navigate to another page (e.g., `/about`), then navigate back to `/posts/1`. The page may not load correctly.  You might encounter missing data or errors.

## Expected Behavior

Data should load correctly regardless of how the dynamic route is accessed.