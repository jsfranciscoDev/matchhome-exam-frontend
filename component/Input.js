export default function Input({disabled=false, type, placeholder ,className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3",...props}){
    return ( 
        <input
            disabled={disabled}
            className={className}
            {...props}
            type={type}
            placeholder={placeholder}
        />
    )
}