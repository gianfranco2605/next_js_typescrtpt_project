import Image from "next/image"

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="Flexible"
          />

          <p className="text-start text-sm font-normal mt-5 ma-w-xs">Flexibble è la community leader mondiale per i creativi da condividere, crescere e farsi assumere</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer