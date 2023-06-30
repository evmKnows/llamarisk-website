import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        LlamaRisk
      </h1>
      
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            <a
              href="https://cryptorisks.substack.com/archive"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Our reviews
            </a>
            <a
              href="https://twitter.com/LlamaRisk"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Twitter
            </a>
      </h4>
      
    </section>
  )
}

export default Intro
