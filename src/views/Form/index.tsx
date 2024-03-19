import { useDispatch, useSelector } from 'react-redux'

import HomeDefault from '../../components/HeaderDefault'
import ButtonDefault from '../../components/ButtonDefault'
import { update } from '../../redux/userSlice'
import { useEffect, useState } from 'react'

export default function Form(): JSX.Element {
    const userName = useSelector((state: any) => state.user.name)
    const userEmail = useSelector((state: any) => state.user.email)

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')

    const dispatch = useDispatch()
    const userValue = useSelector((state: any) => state.user.value)

    const updateState = () => {
        dispatch(update({ name: nameInput, email: emailInput }))
    }

    const handleInputChange = (event: any) => {
        switch (event.target.id) {
            case 'name':
                setNameInput(event.target.value)
                break

            case 'email':
                setEmailInput(event.target.value)
                break

            default:
                break
        }
    }

    useEffect(() => {
        setNameInput(userName)
        setEmailInput(userEmail)
    }, [])

    return (
        <div className='text-center'>
            <HomeDefault />

            <main className='flex w-full h-full justify-center'>

                <form className='justify-center flex bg-gray-200 w-[300px] h-[200px] flex-wrap p-5 mt-8 items-center rounded-lg'>

                    <h1 className='font-bold'>Form</h1>

                    <label>Name:
                        <input
                            className='ml-2' type="text" id="name"
                            placeholder='Name'
                            value={nameInput}
                            onChange={handleInputChange} />
                    </label>

                    <label>E-mail:
                        <input className='ml-2' type="email" id="email"
                            placeholder='E-mail'
                            value={emailInput}
                            onChange={handleInputChange} />
                    </label>

                    <span onClick={() => updateState()}>
                        <ButtonDefault value='Insert values' />
                    </span>

                    {userValue}
                </form>
            </main>
        </div>
    )
}

