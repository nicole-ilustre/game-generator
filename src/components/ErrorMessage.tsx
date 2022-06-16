interface Props {
    errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: Props) => {
    return (
        <div>{errorMessage}</div>
    )
}