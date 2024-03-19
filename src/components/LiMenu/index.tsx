interface IProps {
    value: string
}

export default function LiMenu(props: IProps): JSX.Element {
    return (
        <li className="bg-blue-500 py-1 px-2 hover:bg-blue-600 text-white font-bold border-gray-100 border-solid border-r-[1px]">
            {props.value}
        </li>
    )
}

