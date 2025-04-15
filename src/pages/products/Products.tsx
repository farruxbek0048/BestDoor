import { NavLink } from 'react-router-dom'
import Product from './Product'
import FilterIcon from '../../assets/images/icon/Filter.svg'
import { RxHamburgerMenu } from 'react-icons/rx'

function Products() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-[#141311] font-medium' : 'text-[#BBBBBB]'

  return (
    <div className="container mx-auto px-4">
      <div>
        <h1 className='border-b pb-4 text-[#141311] text-[22px] sm:text-[28px] md:text-[35px] font-medium mt-[30px] mb-6'>
          Mahsulotlar
        </h1>

        <div className='flex justify-between items-center px-2 sm:px-4 border-b pb-5 gap-4'>
          <div className='hidden md:flex gap-[50px]'>
            <NavLink to='/' className={linkClass}>Eshiklar</NavLink>
            <NavLink to='/windows' className={linkClass}>Derazalar</NavLink>
            <NavLink to='/moreBuy' className={linkClass}>Ko'p sotilgan</NavLink>
            <NavLink to='/discount' className={linkClass}>Chegirma</NavLink>
            <NavLink to='/brands' className={linkClass}>Brendlar</NavLink>
          </div>

          <div className="md:hidden">
            <button className="text-[#141311] text-2xl">
              <RxHamburgerMenu />
            </button>
          </div>

          <button className='flex items-center gap-2 border rounded px-4 py-2 text-sm whitespace-nowrap'>
            <img src={FilterIcon} alt="Filter svg icon" className='w-4 h-4' />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className='flex justify-center mt-12 font-medium text-[16px] text-[#141311]'>
        <NavLink className='border-b' to='/moreSee'>Ko'proq ko'rish</NavLink>
      </div>
    </div>
  )
}

export default Products
