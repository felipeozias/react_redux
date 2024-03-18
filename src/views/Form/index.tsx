import { useNavigate } from 'react-router-dom'
import HomeDefault from '../../components/HeaderDefault'
import ButtonDefault from '../../components/ButtonDefault'

export default function Form(): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className='text-center'>
            <HomeDefault />

            <main className='flex w-full h-full justify-center'>

                <form className='justify-center flex bg-gray-200 w-[300px] h-[200px] flex-wrap p-5 mt-8 items-center rounded-lg'>

                    <h1 className='font-bold'>Form</h1>

                    <label>Name:
                        <input className='ml-2' type="text" id="name" />
                    </label>

                    <label>E-mail:
                        <input className='ml-2' type="email" id="name" />
                    </label>

                    <ButtonDefault value='Insert values' />
                </form>
            </main>
        </div>
    )
}

