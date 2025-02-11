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
  }
]


export default function App() {
  return <main className="bg-green h-screen w-screen font-ubuntu object-center bg-cover bg-center font-light overflow-scroll p-10">
    <a href="/" className="text-white flex p-0 w-fit text-center mx-auto sm:mx-0 tracking-widest font-light text-xl bg-bg"><span className="pl-2 pr-1.5 block">WEEBLABS</span> <span className="text-bg block h-full bg-white pl-1.5 pr-1">:3</span></a>

    <div className="flex flex-col items-center justify-center w-full h-[85%]">
      <div className="mx-auto w-fit text-6xl px-2">
        building <span className="font-bold">software</span> that's actually <span className="font-bold">useful</span>
        <img className="w-16 h-16 inline relative bottom-4 ml-2" src={OC.hi} />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center w-full h-[18%]">
      <div className="flex flex-col items-center gap-2">
        our creations 👇
      </div>
    </div>

    <div className="flex flex-col gap-5 items-center justify-center">
      {data.map((item) => <div className="flex flex-row gap-4 bg-white border border-bg/30 p-6 w-full sm:max-w-[70%]">
        <img src={item.image} alt={item.title} className="w-24 h-24 object-contain aspect-square rounded-2xl" />
        <div className="flex flex-col gap-2 w-full">
          <div className="text-2xl font-bold">{item.title}</div>
          <div className="text-sm">{item.description}</div>
          <a href={item.link} target="_blank" className="text-sm text-white bg-bg p-0.5 px-2 ml-auto w-fit">{item.linkText}</a>
        </div>
      </div>)}
    </div>

    {/* team */}
    <div className="flex flex-col gap-5 items-center justify-center w-full h-[18%] mt-40">
      <div className="flex flex-col items-center gap-2">
        an initiative by
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <img src="https://github.com/ankushKun.png" alt="Weeblabs" className="w-24 h-24 object-contain aspect-square rounded-2xl" />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold">weebletKun</div>
          <div className="flex flex-col gap-0.5">
            <a href="https://x.com/ankushKun_" target="_blank" className="text-sm text-white bg-bg p-0.5 px-2 w-fit">Follow on X</a>
          </div>
        </div>
      </div>
    </div>

    {/* footer */}
    <div className="flex flex-col items-center justify-center w-full h-[20%] mt-40">
      <div className="flex flex-row gap-2">
        follow weeblabs:
        <a href="https://x.com/weeblabs" target="_blank" className="text-sm text-white bg-bg p-0.5 px-2 ml-auto w-fit">X (Twitter)</a>
        <a href="https://github.com/weeblabs69" target="_blank" className="text-sm text-white bg-bg p-0.5 px-2 ml-auto w-fit">GitHub</a>
        {"👉👈"}
      </div>
    </div>
  </main>
}