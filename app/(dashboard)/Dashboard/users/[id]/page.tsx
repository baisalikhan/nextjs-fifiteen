import Link from "next/link";

const Page = ({ params } : { params: { id: string }}) => {
    const { id } = params;

    return (
        <>
            <h1 className={'text-3xl'}>Users Profile: { id }</h1>
        </>
    )
}

export default Page;