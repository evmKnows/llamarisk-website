import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        LlamaRisk
      </h1>
      
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-5 md:mt-0">
            <a
              href="https://cryptorisks.substack.com/archive"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-4 md:px-6 md:py-3 w-32 md:w-auto max-w-full text-center duration-200 transition-colors mb-3 md:mb-0"
            >
              All reviews
            </a>
            <a
              href="https://twitter.com/LlamaRisk"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-4 md:px-6 md:py-3 w-32 md:w-auto max-w-full text-center duration-200 transition-colors mb-3 md:mb-0"
            >
              Twitter
            </a>
      </div>
      
    </section>
  )
}

export default Intro
