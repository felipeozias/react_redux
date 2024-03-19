import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LiMenu from '../LiMenu'

export default function HomeDefault(): JSX.Element {

    const userName = useSelector((state: any) => state.user.name)

    return (
        <nav >
            <ul className='flex w-full justify-center bg-stone-200 relative'>
                <Link to='/form'>
                    <LiMenu value='Form' />
                </Link>

                <Link to='/home'>
                    <LiMenu value='Home' />
                </Link>

                <span className='text-[15px] italic self-center absolute right-3'>
                    ~ {userName}
                </span>
            </ul>
        </nav>
    )
}

