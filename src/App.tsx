import cri from "./assets/OC/cri.png"
import hi from "./assets/OC/hiiiiiiiiii.png"
import sip from "./assets/OC/siptea.png"
import smirk from "./assets/OC/smirk.png"
import smort from "./assets/OC/smort.png"
import sparkle from "./assets/OC/sparkle.png"

const OC = {
  cri,
  hi,
  sip,
  smirk,
  smort,
  sparkle
}

const data = [
  {
    title: "Power Editor",
    description: "Layer based image editor for iPhones",
    link: "https://apps.apple.com/us/app/power-editor/id6739633465?platform=iphone",
    linkText: "App Store ↗",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0d/de/80/0dde8012-c303-8b1a-3767-86465d644f18/AppIcon-0-0-1x_U007epad-0-1-85-220.jpeg/460x0w.webp"
  },
  {
    title: "BetterIDEa",
    description: "IDE + Developer Tools for Arweave/AO ecosystem",
    link: "https://betteridea.dev",
    linkText: "Explore ↗",
    image: "https://betteridea.dev/logo.png"
  },
  {
    title: "Call Me Maybe",
    description: "Swipe less, vibe more, call me maybe? video dating app",
    link: "https://callmemaybe.xyz",
    linkText: "Open ↗",
    image: "https://www.callmemaybe.xyz/icon.webp"
  }
]


export default function App() {
  return <main className="min-h-screen w-screen font-ubuntu bg-green overflow-x-hidden">
    {/* Enhanced header with hover effect */}
    <a href="/" className="fixed top-8 left-8 text-white flex p-0 w-fit text-center tracking-widest font-light text-xl bg-bg hover:scale-105 transition-transform duration-200 rounded shadow-lg">
      <span className="pl-3 pr-2 block">WEEBLABS</span>
      <span className="text-bg block h-full bg-white pl-2 pr-1.5 rounded-r">:3</span>
    </a>

    {/* Hero section with animation */}
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-6xl  font-light leading-tight mb-6">
          building <span className="font-bold bg-bg text-white px-2 rounded">software</span>
          <br className="sm:hidden" /> that's actually
          <br className="sm:hidden" /> <span className="font-bold bg-bg text-white px-2 rounded">useful</span>
          <img className="h-22 inline relative bottom-4 ml-2" src={OC.hi} />
        </h1>
      </div>
    </div>

    {/* Projects section */}
    <div className="px-4 py-16 sm:py-20">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">our creations ✨</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {data.map((item) => (
          <div className="bg-white border border-bg/10 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-24 h-24 sm:w-32 sm:h-32 object-contain aspect-square rounded-2xl shadow-md mb-4" />
              <div className="flex flex-col gap-2 sm:gap-3 text-center w-full">
                <div className="text-2xl sm:text-3xl font-bold text-bg">{item.title}</div>
                <div className="text-base sm:text-lg text-gray-600">{item.description}</div>
                <a href={item.link} target="_blank" className="text-sm text-white bg-bg p-2 px-4 mx-auto w-fit rounded hover:bg-bg/80 transition-colors duration-200 shadow-md">{item.linkText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className=" py-8 sm:py-10 px-4 border-t border-bg/10 mt-64 bg-white/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center text-center">
        <span className="text-base sm:text-lg">follow weeblabs:</span>
        <div className="flex gap-2">
          <a href="https://x.com/weeblabs" target="_blank" className="text-sm text-bg hover:underline underline-offset-4 p-2">
            <span className="font-medium">X (Twitter)</span>
          </a>
          <a href="https://github.com/weeblabs69" target="_blank" className="text-sm text-bg hover:underline underline-offset-4 p-2">
            <span className="font-medium">GitHub</span>
          </a>
        </div>
        <span className="text-xl hidden sm:inline">👉👈</span>
      </div>
    </footer>
  </main>
}