import LocationIcon from '../../assets/images/icon/Location.svg'
import EmailIcon from '../../assets/images/icon/Email.svg'
import TelegramIcon from '../../assets/images/icon/Telegram.svg'
import FacebookIcon from '../../assets/images/icon/Facebook.svg'
import InstagramIcon from '../../assets/images/icon/Instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row justify-between gap-10 pb-[40px]  border-t pt-[54px]'>
        
        <div className='flex flex-col gap-6'>
          <h3 className='font-semibold text-xl'>Eshik deraza</h3>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>Qo'llab quvvatlash</p>
            <span className='text-base font-medium'>+998 94 490 00 48</span>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <img src={LocationIcon} alt="Location svg icon" className='w-5 h-5' />
              <p>Besharik, Fergana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={EmailIcon} alt="Email svg icon" className='w-5 h-5' />
              <p>Xudoyberdiyev0048@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 md:gap-[80px] lg:gap-[180px]'>
          <div className='flex flex-col gap-[20px]'>
            <h4 className='font-semibold text-base'>Ma'lumotlar</h4>
            <ul className='flex flex-col gap-[10px] font-normal	 text-base'>
              <li><Link to="">Biz haqimizda</Link></li>
              <li><Link to="">To'lov va yetkazib berish</Link></li>
              <li><Link to="">Blog</Link></li>
              <li><Link to="">To'lovni qaytarish va tovarlarni <br /> almashtirish</Link></li>
            </ul>
          </div>
          <div className='flex flex-col pr-[50px] lg:pr-[120px] mt-2 sm:mt-10'>
            <ul className='flex flex-col gap-[10px]  font-normal	 text-base'>
              <li><Link to="">Eco-friendly</Link></li>
              <li><Link to="">Bonus va aksiyalar</Link></li>
              <li><Link to="">Servis markazlari</Link></li>
              <li><Link to="">Ommaviy oferta</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 py-6 border-t mt-6 text-sm text-[#808080]'>
        <p>© 2024. ООО "Eshikrom store"</p>
        <p>Ommaviy oferta</p>
        <p>Maxfiylik siyosati</p>
        <div className='flex gap-4'>
          <img src={TelegramIcon} alt="Telegram svg icon" className='w-5 h-5' />
          <img src={FacebookIcon} alt="Facebook svg icon" className='w-5 h-5' />
          <img src={InstagramIcon} alt="Instagram svg icon" className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default Footer
