import { Link } from 'react-router-dom'
import LiMenu from '../LiMenu'

export default function HomeDefault(): JSX.Element {
    return (
        <nav >
            <ul className='flex w-full justify-center bg-stone-200'>
                <Link to='/form'>
                    <LiMenu value='Form' />
                </Link>

                <Link to='/home'>
                    <LiMenu value='Home' />
                </Link>
            </ul>
        </nav>
    )
}

