interface IProps {
    value: string
}

export default function Form(props: IProps): JSX.Element {
    return (
        <span>
            <input type="button"
                className="bg-blue-500 hover:bg-blue-500 px-2 py-1 rounded-md text-white font-bold m-1 cursor-pointer text-center"
                value={props.value} />
        </span>
    )
}

