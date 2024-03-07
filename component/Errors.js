const Errors = ({errors = [], ...props}) => {
    return (
        <>
        {errors.length > 0 && (
            <div {...props} className="absolute right-0 p-10 mt-4 mr-5 rounded-lg shadow-lg top-10 pos">
                <div className="font-bold text-red-700">
                        Error!
                </div>

                <ul className="mt-2 text-sm text-red-700">
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        )}

        </>
    )
}

export default Errors;