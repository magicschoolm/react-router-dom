import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className='container'>
            ErrorPage
            <h3>
                Opps! an error accured
            </h3>
            <p>
                {error.message}
            </p>
        </div>
    )
}

export default ErrorPage