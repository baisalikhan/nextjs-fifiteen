'use client'

function About() {
    const shouldThrowError = true;

    if (shouldThrowError) {
        throw new Error("Not Implemented");
    }

    return (
        <>
            <h1 className={'text-3xl'}>Hey, this is the About Page</h1>
        </>
    );
}

export default About;
