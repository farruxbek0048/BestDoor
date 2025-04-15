import RectangleImage from '../../assets/images/png-image/Rectangle 55.png'
import userIcon from '../../assets/images/icon/user.svg'
// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Testimonials() {
    return (
        <div className="container mx-auto">
            <h1 className='pb-4 text-[#141311] text-[22px] sm:text-[28px] md:text-[35px] font-medium mt-[30px] mb-6'>Mijozlar fikri</h1>
            <div className='my-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-4'>
                <div className="w-full lg:w-[470px]">
                    <Carousel
                        opts={{ align: "start" }}
                        orientation="vertical"
                        className="w-full"
                    >
                        <CarouselContent className="h-[180px] md:h-[600px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pt-4 md:basis-1/3 h-[220px] sm:h-[240px] md:h-[200px] lg:h-[180px]"
                                >
                                    <div className="p-4 sm:p-6 md:p-5 lg:p-6 border rounded-2xl bg-[#F3F3F3] hover:bg-[#141311] hover:text-white transition-colors duration-300">
                                        <p className="text-sm font-light mb-4">
                                            “Just wanted to drop a note to say how impressed I was with your customer service team. They solved my issue in no time and made sure I was happy every step!”
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img src={userIcon} alt="User icon" className="w-8 h-8" />
                                            <div>
                                                <div className="text-sm font-medium">Alisher Valiyev</div>
                                                <span className="text-xs text-[#777]">Usta</span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="hidden lg:block">
                    <img src={RectangleImage} alt="Svg image" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
