interface Props {
    errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: Props) => {
    return (
        <div className='error-message'>{errorMessage}</div>
    )
}