import React from 'react';

async function Page() {
    try {
        const response = await fetch('http://localhost:3001/api/books');
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const books = await response.json();
        return (
            <main>
                <code>{JSON.stringify(books, null, 2)}</code>
            </main>
        );
    } catch (error: any) {
        return (
            <main>
                <p>Error: {error.message}</p>
            </main>
        );
    }
}

export default Page;
