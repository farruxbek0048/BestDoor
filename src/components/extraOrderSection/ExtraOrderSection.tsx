import './ExtraOrderSection.css'
function ExtraOrderSection() {
    return (
        <div className="container mx-auto min-h-[300px] border-b-red-400 my-[90px] extra-order-section">
            <div className="flex flex-col gap-[40px] py-[45px] pl-[20px] sm:pl-[100px] md:pl-[170px] ">
                <div className="text-white flex-column gap-[10px]">
                    <h1 className="font-medium text-3xl">Uyingizga mos bo'lgan uslubni <br /> biz bilan yarating</h1>
                    <p>Uslubni yaratishda bizning maxsus xodimlarimiz sizga yordam berishadi</p>
                </div>
                <button className="bg-white text-black w-max px-4 py-2 rounded-md">Buyurtma qilish</button>
            </div>
        </div>
    )
}

export default ExtraOrderSection
