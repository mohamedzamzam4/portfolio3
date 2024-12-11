import Image from 'next/image'
export default function Hero() {
  return (
    <section className="pt-20 pb-32 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Mohamed Zamzem</h1>
          <p className="text-xl md:text-2xl mb-8">
            A passionate front-end developer creating innovative web solutions.
          </p>
          <a href="#projects" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            View My Work
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/IMG_2747.jpg"
            alt="Mohamed Zamzem"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
