import Button from "../../ui/Button"

function ExtraPages() {
  return (
    <div className="container mx-auto w-full">
      
      <div className="extraOrder relative rounded-[20px] overflow-hidden w-full max-h-[275px] md:h-[250px] lg:h-[300px] bg-center bg-[url('/src/assets/images/png-image/hall-jpg.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start md:px-[170px] px-20">
          <div className="text-white space-y-5">
            <h1 className="text-[20px] md:text-4xl font-bold leading-snug">
              Uyingizga mos bo’lgan uslubni<br />
              biz bilan yarating
            </h1>
            <p className="text-sm">
              Uslubni yaratishda bizning maxsus xodimlarimiz sizga yordam berishadi
            </p>
            <Button text="Buyurtma qilish" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraPages
