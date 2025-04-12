
import { Link } from "react-router-dom"
import SearchIcon from '../../assets/images/icon/Search.svg'
import MarketIcon from '../../assets/images/icon/Market.svg'
import LikeIcon from '../../assets/images/icon/Like.svg'
import UserImg from '../../assets/images/png-image/User.jpg'
function Navbar() {
    return (
        <>
            <div className="container mx-auto flex-between border-b">
                <Link to="/" className="font-semibold text-xl whitespace-nowrap pr-4 py-[20px]">Eshik deraza</Link>
                <div className="flex-between border w-[500px] py-2 px-4 gap-2 rounded-md">
                    <input type="text" className="w-[100%] outline-none" placeholder="Nomi va turi bo'yicha qidiruv"/>
                    <img src= {SearchIcon} alt="Search svg icon" />
                </div>
                <div className="hidden lg:flex  justify-between items-center gap-5">
                    <img src= {MarketIcon} alt="Market svg icon" />
                    <img src= {LikeIcon} alt="Like svg icon" />
                    <img  className="w-[40px] h-[40px] object-cover rounded-full" src= {UserImg} alt="User png image" />
                </div>
            </div>
        </>
    )
}

export default Navbar
