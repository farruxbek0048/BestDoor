import Door_1Img from '../../assets/images/png-image/door-1.png'
import Door_2Img from '../../assets/images/png-image/door-2.png'
import LikeIcon from '../../assets/images/icon/Like.svg'
import BasketIcon from '../../assets/images/icon/Basket.svg'
import StarIcon from '../../assets/images/icon/Star.svg'

function Product() {
  return (
    <div className="w-full h-auto shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,_rgba(60,64,67,0.15)_0px_1px_3px_1px] rounded-[10px] overflow-hidden">
      <div className="w-full h-[350px] bg-[#EDEEF2] relative">
        <div className=''>
          <img className="absolute bottom-[22px] left-[41px] object-contain" src={Door_1Img} alt="Door 1" />
          <img className="absolute bottom-0 right-[19px] object-contain" src={Door_2Img} alt="Door 2" />
        </div>
          <img className="absolute top-4 right-4 w-6 h-6" src={LikeIcon} alt="Like icon" />
      </div>
      <div className="bg-white p-[20px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[2px]">
            <div className="text-[16px] sm:text-[18px] font-medium">MDF Eshiklar</div>
            <div className="text-[12px] sm:text-[14px] text-[#9E9E9E] flex items-center gap-2">
              <p>120x200 sm</p>
              <span className="bg-[#9E9E9E] w-1 h-1 rounded-full"></span>
              <p>1 qanotli</p>
            </div>
            <div className="text-[#44E054] text-[10px]">AKFA</div>
          </div>
          <div className="flex flex-col items-end gap-[2px]">
            <img src={StarIcon} alt="Star icon" />
            <p className="text-[12px] text-[#9E9E9E]">40 komment</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-[18px] sm:text-[20px] md:text-[25px] font-bold text-[#141311]">1 200 000 so'm</div>
          <div className="w-[40px] h-[40px] bg-[#141311] flex items-center justify-center rounded-sm">
            <img src={BasketIcon} alt="Basket icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
