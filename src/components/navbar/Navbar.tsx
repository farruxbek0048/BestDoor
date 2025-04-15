import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '../../assets/images/icon/Search.svg';
import MarketIcon from '../../assets/images/icon/Market.svg';
import LikeIcon from '../../assets/images/icon/Like.svg';
import UserImg from '../../assets/images/png-image/User.jpg';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="container mx-auto flex justify-between items-center border-b py-4">
                <Link to="/" className="font-semibold text-xl whitespace-nowrap pr-4">Eshik deraza</Link>

                <div className="hidden md:flex items-center border w-[500px] py-2 px-4 gap-2 rounded-md">
                    <input type="text" className="w-full outline-none" placeholder="Nomi va turi bo'yicha qidiruv" />
                    <img src={SearchIcon} alt="Search svg icon" />
                </div>

                <button onClick={openModal} className="md:hidden">
                    <img src={SearchIcon} alt="Search icon" className="w-6 h-6" />
                </button>

                <div className="hidden lg:flex justify-between items-center gap-5">
                    <img src={MarketIcon} alt="Market svg icon" />
                    <img src={LikeIcon} alt="Like svg icon" />
                    <img className="w-[40px] h-[40px] object-cover rounded-full" src={UserImg} alt="User png image" />
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md w-[90%] max-w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Qidiruv</h2>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded-md mb-4" 
                            placeholder="Nomi yoki turi..." 
                        />
                        <div className="flex justify-between gap-4">
                            <button className="bg-gray-300 text-black px-4 py-2 rounded-md w-full" onClick={closeModal}>Yopish</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Qidirish</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
