
const Header = () => {
    return (
        <div className="max-w-[1280px] m-auto my-5" >
        <div className="flex justify-between items-center p-2">
            <div><h1 className="text-3xl font-bold">Recipe Calories</h1></div>  
            <div>
                    <ul className="flex gap-5 font-semibold text-lg">
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipe</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
            </div>
            <div className="flex gap-4">
                <input type="text" placeholder="Search" className="outline-none bg-gray-100 px-4 rounded-3xl" />
                <img src="../../../public/img/Frame 5.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Header;