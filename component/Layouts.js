import Nav from "./Nav";

const Layouts = ({children}) => {
    return (
        <div className="">
            <div className="max-w-xl px-8 mx-auto">
                {/* <Nav /> */}
            </div>

            <div className="">
                {children}
            </div>
        </div>
    )
}

export default Layouts;