function Header(params) {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="ml-3 text-xl">E-Commerce Website</span>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <a className="mr-5 hover:text-gray-900">Privacy Policy</a>
                    <a className="mr-5 hover:text-gray-900">Contact Us</a>
                </nav>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Cart Items
                </button>
            </div>
        </header>

    )
}

export default Header