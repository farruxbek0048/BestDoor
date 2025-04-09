import { CiSearch } from 'react-icons/ci'
import { SlBasket } from 'react-icons/sl'
import { HiOutlineHeart } from 'react-icons/hi'
import '../../App.css'
function Header() {
    return (
        <>
            <div>
                <div className="container flex-between border-b-[1px] py-[20px] px-[11px]">
                    <div className="title font-semibold text-xl uppercase">Eshik deraza</div>
                    <div className='search flex-between w-[500px] h-[40px] gap-[10px] border py-[8px] px-[16px] rounded-lg'>
                        <input type="text" placeholder="Nomi va turi bo'yicha qidiruv" />
                        <CiSearch />
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <div className='flex items-center gap-1'>
                            <SlBasket />
                            <div className='notification text-white text-xs py-0 px-2 rounded-[30px] bg-[#44E054]'>2</div>
                        </div>
                        <HiOutlineHeart />
                        <div className='user w-[30px] h-[30px] border border-red-500 rounded-full'>
                            <img src="#" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
