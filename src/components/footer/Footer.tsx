
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
function Footer() {
    return (
        <div>
            <div className="container flex justify-between">
                <div className='flex-column gap-[20px]'>
                    <div className='font-semibold text-xl uppercase'>Eshik Deraza</div>
                    <div>
                        <p>Qo'llab quvvatlash</p>
                        <span>+998944900048</span>
                    </div>
                    <div className='flex-column gap-[8px]'>
                        <div className='flex-row gap-[8px] items-center'>
                            <FaLocationDot />
                            <span>Olmazor, Toshkent</span>
                        </div>
                        <div className='flex-row gap-[8px] items-center'>
                            <MdOutlineEmail />
                            <span>Eshikrom@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div>
                    <table className='flex-column gap-[20px]'>
                        <thead>
                            <tr>
                                <th>Ma'lumotlar</th>
                            </tr>
                        </thead>
                        <tbody className='flex-column gap-[10px]'>
                            <tr>
                                <td>BIz haqimizda</td>
                            </tr>
                            <tr>
                                <td>To'lov va yetkazib berish</td>
                            </tr>
                            <tr>
                                <td>Blog</td>
                            </tr>
                            <tr>
                                <td>To'lovni qaytarish va tovarlarni <br /> almashtirish</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className='flex-column gap-[40px]'>
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody className='flex-column gap-[10px]'>
                            <tr>
                                <td>Eco-friendly</td>
                            </tr>
                            <tr>
                                <td>Bonus va aksiyalar</td>
                            </tr>
                            <tr>
                                <td>Servis markazlari</td>
                            </tr>
                            <tr>
                                <td>Ommaviy oferta</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Footer
