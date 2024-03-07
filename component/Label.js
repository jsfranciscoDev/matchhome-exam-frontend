export default function Lable({children, className="block text-sm font-medium leading-6 text-gray-900 mb-2",...props}){
    return (
        <label className={className} {...props}>
            {children}
        </label>
    )
}