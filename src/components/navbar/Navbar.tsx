import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import '../../styles/tailwind.css'
import '../../index.css'

function Navbar() {
    return (
        <>
            <div className="bg-primary text-primary px-[20px] py-[10px] 2xl:p-0 w-full">
                <div className="container flex-between">
                    <div className="location flex items-center gap-1">
                        <FaLocationDot />
                        <span className="font-normal ">Toshkent</span>
                    </div>
                    <div className="flex gap-[15px] xs:gap-[40px]">
                        <select className="language">
                            <option value="uz">Uzb</option>
                            <option value="ru">Rus</option>
                            <option value="en">Eng</option>
                        </select>
                        <div className="phone flex items-center gap-[8.5px]">
                            <FaPhoneAlt />
                            <span>+998999999999</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
