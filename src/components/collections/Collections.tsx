import BedroomImg from '../../assets/images/png-image/Bedroom.png'
import smallHotelImg from '../../assets/images/png-image/smallHotel.png'
import bigHotelImg from '../../assets/images/png-image/bigHotel.png'

function Collections() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-[#141311] text-[22px] sm:text-[28px] md:text-[35px] font-medium mt-[30px] mb-6">
                Kolleksiyalar
            </h1>

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <img src={BedroomImg} alt="Bedroom" className="w-full h-auto object-cover rounded-md" />
                    <img src={BedroomImg} alt="Bedroom" className="w-full h-auto object-cover rounded-md" />
                    <img src={smallHotelImg} alt="Small Hotel" className="w-full h-auto object-cover rounded-md" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <img src={bigHotelImg} alt="Big Hotel" className="w-full h-auto object-cover rounded-md" />
                    <img src={bigHotelImg} alt="Big Hotel" className="w-full h-auto object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default Collections
