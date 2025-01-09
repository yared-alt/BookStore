import { useState} from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux';
import { totalNumberOfItemselector } from '../store/slices/cartSlice';

function Navbar() {
    const totalnumberOfItems=useSelector(totalNumberOfItemselector);
    const [useraccountToggeled, setUseraccoundToggled] = useState(false);
    const dropdownBtns = [
        { name: "Dashboard", href: "/dashborad" },
        { name: "Cart", href: "/Cart" },
        { name: "Login", href: "/login" },
        { name: "Logout", href: "/logout" },
    ]


    const IsuserLoged = true;

    const makedrop=(IsuserLoged)=>{
        if(IsuserLoged){
         dropdownBtns.splice(2, 1);
         return dropdownBtns;
        }else{
            return dropdownBtns;
        }
    }
    const drops=makedrop(IsuserLoged);
    const showcart=useSelector(state=>state.showCart);
    // console.log(showcart);
// const dispatch=useDispatch();
//     const toggleCart=()=>{
//         dispatch(showCart());
//     }



return (
    <header onClick={()=>useraccountToggeled ? setUseraccoundToggled(!useraccountToggeled):""}  className="md:max-w-full md:px-5 md:py-6 px-3 py-6 mx-auto bg-slate-300">
        <nav className="flex justify-between items-center">
            <div className=" flex flex-col md:mt-0 mt-7  md:flex-row md:gap-7 gap-2">
                <Link to="./home" className="mx-5 w-fit  font-mono text-2xl">LOGO</Link>
                <div className="relative ">
                    <input type="text" className="bg-gray-600   text-zinc-100 focus:bg-slate-500 text-sm md:px-7 md:py-2 md:w-full w-44 rounded-md py-2 px-9 min-h-fit" placeholder="Search ..." />
                    <h1 className="absolute inline-block md:left-3 z-10 md:top-1 left-3 top-2 cursor-pointer hover:text-gray-50">Q</h1>
                </div>
            </div>
            <div className="flex md:space-x-4  gap-1">
                {IsuserLoged ? (
                    <div>
                        <img
                            onClick={() =>useraccountToggeled ? setUseraccoundToggled(!useraccountToggeled) :setUseraccoundToggled(true)}
                            className="ring-red-600 ring hidden md:block  w-9 h-9 mx-auto my-auto mr-4  cursor-pointer rounded-full"
                            src="/open-book-with-white-background.jpg"
                        />
                    </div>
                ) : (
                    <div className="relative">
                        <Link onClick={() => setUseraccoundToggled(!useraccountToggeled)} className="mx-2 text-1xl py-2 px-1 rounded-full bg-slate-50">
                            ACC
                        </Link>
                    </div>
                )}

                {/* Remove the toggled bar when the user clicks outside the bar */}
                {useraccountToggeled && (
                    <ul className="w-36 flex flex-col rounded-md z-10 bg-slate-400 absolute  md:right-24 top-32 md:top-24 right-4">
                        {drops.map((element) => (
                            <Link key={element.name} className="px-3 z-20 hover:bg-red-700 cursor-pointer md:px-4" to={element.href}>
                                {element.name}
                            </Link>
                        ))}
                    </ul>
                )}
                <Link to="/favorite" className="font-mono mx-auto text-2xl relative top-2 right-2 md:block hidden">
                    M
                </Link>
                <div className="relative my-auto">
                    <Link to="cart" className="cursor-pointer right-6 md:py-3 md:px-8 py-1 px-6 bg-yellow-400 hover:bg-yellow-600 rounded-md">Cart</Link>
                    <h1 className="absolute right-4 -top-1 text-pink-700">{totalnumberOfItems}</h1>
                </div>
            </div>
        </nav>
    </header>
)
}
export default Navbar;

