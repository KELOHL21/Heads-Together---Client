
import Team from "./Team"

const About = () => {


  return (
    <div className="text-black text-center flex flex-col tracking-wide m-[2rem] lg:m-[2rem] ">
         <h1 className="text-2xl  pt-[5rem]  m-auto font-semibold tracking-widest lg:text-5xl lg:w-[70%] w-[98%] text-red-700">Discover what good hair is with us.</h1>

         <span className="text-lg py-[2rem] w-[98%] lg:w-[70%] lg:m-auto lg:leading-loose ">The barber is a very useful and important member of society. Like the washerman he makes us look clean and decent in appearance. It is good that he is not regarded as mean and untouchable.</span>

         <p className="text-base py-[1rem] w-[98%] leading-relaxed  lg:w-[70%] lg:m-auto lg:leading-loose">

            His method of working is very strange. With a piece of cloth, he covers the body of his customer. Then he cuts hair with his machine, comb, and scissors, He applies the soap to his face and produces foam with the brush. He does so to wet them thoroughly and to make them soft. Then he takes his razor. First, he sharpens it at a Blackstone piece and then on a leather strap. He begins to shave. While shaving, he collects hair mixed foam upon his wrist. In the end, he clears the face with clean water and applies the scented powder and cream.</p>

            <Team />
    </div>
  )
}

export default About