// import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className="banner relative flex justify-center">
      <div className="text-white h-screen items-center justify-center flex flex-col tracking-wide">
      <h1 className="name tracking-wider leading-tight text-6xl md:text-8xl lg:text-9xl flex font-medium flex-row -mb-4 md:-mb-2 "> HeadsTogether</h1>
      <p className="hero_text text-2xl py-5 md:text-4xl md:font-medium tracking-wider">Always a Cut above the Rest.</p>
      {/* CTA Button */}
      <button className="md:text-3xl md:w-[15rem] mt-[2rem]">
       Contact Us
      </button>
      </div>
    </div>
  )
}

export default Hero