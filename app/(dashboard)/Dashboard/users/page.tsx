import Link from "next/link";

const Users = () => {
    return (
        <>
            <h1>Users</h1>

            <ul className={'[&>li]:bg-lime-300 [&>li]:p-2 [&>li]:m-2 [&>li]:w-fit [&>li]:rounded-xl'}>
                <li><Link href={"/dashboard/users/1"}>User 1</Link></li>
                <li><Link href={"/dashboard/users/2"}>User 2</Link></li>
                <li><Link href={"/dashboard/users/3"}>User 3</Link></li>
            </ul>
        </>
    )
}

export default Users;