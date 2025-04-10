
import LocationIcon from '../../assets/images/icon/Location.svg'
import EmailIcon from '../../assets/images/icon/Email.svg'
import TelegramIcon from '../../assets/images/icon/Telegram.svg'
import FacebookIcon from '../../assets/images/icon/Facebook.svg'
import InstagramIcon from '../../assets/images/icon/Instagram.svg'
function Footer() {
  return (
    <div className='container mx-auto border'>
      <div className='flex-between'>
        <div className='flex-column gap-[20px]'>
          <h3 className='font-semibold text-xl pt-[10px]'>Eshik deraza</h3>
          <div className='flex flex-col gap-[2px]'>
            <p>Qo'llab quvvatlash</p>
            <span>+998944900048</span>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <img src={LocationIcon} alt="Location svg icon" />
              <p>Besharik, Ferghana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={EmailIcon} alt="Email svg icon" />
              <p>Xudoyberdiyev0048@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='flex-column gap-5'>
          <h4 className='font-semibold text-base'>Ma'lumotlar</h4>
          <ul className='flex-column gap-[10px]'>
            <li>Biz haqimizda</li>
            <li>To'lov va yetkazib berish</li>
            <li>Blog</li>
            <li>To'lovni qaytarish va tovarlarni <br /> almashtirish</li>
          </ul>
        </div>
        <div>
          <ul className='flex-column gap-[10px] pt-5'> 
            <li>Eco-friendly</li>
            <li>Bonus va aksiyalar</li>
            <li>Servis markazlari</li>
            <li>Ommaviy oferta</li>
          </ul>
        </div>
      </div>
      <div>
        <p>© 2024. ООО "Eshikrom store"</p>
        <p>Ommaviy oferta</p>
        <p>Maxfiylik siyosati</p>
        <div className='flex gap-[20px]'>
          <img src={TelegramIcon} alt="Telegram svg icon" />
          <img src={FacebookIcon} alt="Facebook svg icon" />
          <img src={InstagramIcon} alt="Instagram svg icon" />
        </div>
      </div>
    </div>
  )
}

export default Footer


