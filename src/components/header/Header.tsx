import LocationIcon from '../../assets/images/icon/Location.svg'
import PhoneIcon from '../../assets/images/icon/Phone.svg'
import '../../styles/tailwind.css'
function Header() {
  return (
    <div className='bg-primary'>
      <div className="container flex-between mx-auto">
        <div className='flex-between gap-1'>
            <img src= {LocationIcon} alt="location svg icon" />
            <p>Ferghana</p>
        </div>
        <div className='flex-between gap-[15px] sm:gap-[40px]'>
            <select className='hidden sm:flex bg-transparent outline-none'>
                <option>Uzb</option>
                <option>Rus</option>
                <option>Eng</option>
            </select>
            <div className='flex-between gap-1'>
                <img src= {PhoneIcon} alt="Phone svg icon" />
                <p>+998944900048</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
