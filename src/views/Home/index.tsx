import { useSelector } from 'react-redux'

import HomeDefault from "../../components/HeaderDefault"

export default function Home(): JSX.Element {
    const userName = useSelector((state: any) => state.user.name)
    const userEmail = useSelector((state: any) => state.user.email)

    return (
        <div>
            <HomeDefault />
            <main className="p-4">
                <div className='text-[20px]'><strong>Name: </strong>{userName}</div>
                <div className='text-[20px]'><strong>E-mail: </strong>{userEmail}</div>
            </main>
        </div>
    )
}

