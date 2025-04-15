import Button from "@/ui/Button"
import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import bannerDoor1Img from '../../assets/images/png-image/bannerDoor1.png'
import bannerDoor2Img from '../../assets/images/png-image/bannerDoor2.png'

function Banner() {
    return (
        <div className="container mx-auto mt-4">
            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="border-none">
                                    <CardContent className="relative h-[350px] p-6 bg-[#EDEEF2] rounded-[20px] flex flex-col gap-[40px] items-start justify-center px-[30px] sm:px-[50px] lg:px-[100px] ">
                                        <div>
                                            <h1 className="uppercase font-bold text-[#141311] text-[25px] sm:text-[32px] md:text-[40px]">Katta chegirma</h1>
                                            <p className="text-[#454545] text-[12px] sm:text-[14px] md:text-[16px] font-light">MDF eshiklarini 40% chegirma narxda sotib <br /> olishga ulgurib qoling</p>
                                        </div>
                                        <Button text="Sotib olish" variant="secondary" />
                                        <div className="hidden xl_custom:block">
                                            <img className="absolute bottom-0 right-[306px]" src={bannerDoor1Img} alt="" />
                                            <img className="absolute top-0 right-[6px]" src={bannerDoor2Img} alt="" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Banner
