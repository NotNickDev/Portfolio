import { Search, Mail } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import {
  FaGithub,
  FaLinux,
  FaLinkedin,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiFigma,
  SiVercel,
  SiGit,
} from "react-icons/si";
import "./App.css";
import { useState } from "react";
function App() {
  const logo = "</>";
  const [isOpen, setIsOpen] = useState(false);
  const tools = [
    {
      name: "VS Code",
      icon: <VscVscode size={40} className="text-blue-500" />,
    },
    { name: "Git", icon: <SiGit size={40} className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-white" /> },
    { name: "Figma", icon: <SiFigma size={40} className="text-[#FAFAFA]" /> },
    {
      name: "Linux",
      icon: <FaLinux size={40} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={40} className="text-green-500" />,
    },
    { name: "React", icon: <FaReact size={40} className="text-cyan-500" /> },
    { name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
  ];
  return (
    <div className="mx-2 min-h-screen bg-black flex flex-col">
      <header className="w-full">
        <nav className="w-full mt-3 px-5 py-3 rounded-lg flex flex-col md:flex-row items-center gap-4 bg-[#181026]">
          <div className="text-[#8B5CF6] font-medium text-xl ">
            {logo} NICKDEV
          </div>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FAFAFA] px-3 py-2 hover:bg-[#8B5CF6] rounded-lg  "
            >
              Projetos{" "}
              <span
                className={`inline-block transition-transform duration-300 
                    ${isOpen ? "rotate-0" : "rotate-180"}`}
              >
                ^
              </span>
            </button>
            {isOpen && (
              <div className="absolute left-0 top-full mt-2 flex flex-col bg-zinc-900 w-40">
                <a href="#" className="text-[#FAFAFA] wrap">
                  E-commerce
                </a>
                <a href="#" className="text-[#FAFAFA]">
                  API Rest
                </a>
                <a href="#" className="text-[#FAFAFA]">
                  To-do List
                </a>
              </div>
            )}
          </div>
          <a
            href="https://wa.me/5585992482290?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto."
            target="_blank"
            rel="noreferrer"
            className="text-[#FAFAFA] hover:bg-[#8B5CF6] px-3 py-2 rounded-lg "
          >
            Orçamento
          </a>
          <div className="relative flex w-full md:flex-1 ">
            <input
              type="search"
              name="search-bar"
              id="search"
              placeholder="Buscar Projeto...   "
              className="w-full lg:max-w-200 lg:mx-auto rounded-lg p-2 pl-11 border border-purple-500 text-[#FAFAFA] bg-transparent"
            />

            <div className="absolute left-1 top-2 lg:hidden ">
              <Search size={25} className="text-[#FAFAFA]" />
            </div>
          </div>
          <div className="flex gap-x-4 ml-auto mr-2">
            <a
              target="_blank"
              href="https://github.com/NotNickDev"
              className="hidden md:flex text-[#FAFAFA] hover:bg-[#8B5CF6]  border border-purple-500 rounded-xl p-2"
            >
              <FaGithub size={25} />
            </a>
            <a
              target="_blank"
              href="https://profile.indeed.com/?hl=pt_BR&co=BR&from=gnav-homepage--homepage-frontend"
              className="hidden md:flex  text-[#FAFAFA] hover:bg-[#8B5CF6]  border border-purple-500 rounded-xl p-2"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=lqrsljbfNhhHGqNzMmPlTlqJpNgPvzwqDnklsnlMHVHRRNNFQNSdMFZllgjfVkvFrCVnJwslrLcFrshrT"
              className="hidden md:flex text-[#FAFAFA] hover:bg-[#8B5CF6]  border border-purple-500 rounded-xl p-2"
            >
              <Mail size={25} />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5585992482290"
              className="hidden md:flex  px-5 py-2 hover:bg-[#8B5CF6] border border-purple-500 rounded-xl text-[#FAFAFA] "
            >
              Contato
            </a>
          </div>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="mt-2 bg-[#181026] text-[#FAFAFA] p-6 rounded-lg pt-10">
          <h1 className="text-3xl">PERFIL DEV</h1>
          <h2 className="text-purple-500 text-2xl">Gabriel "NickDev"</h2>
          <h3 className="text-lg">Desenvolvedor Web | Fullstack em formação</h3>
          <div className="flex flex-row items-start gap-8">
            <img
              src="../assets/NickIcon.jpg"
              alt="icon"
              className="w-40 xl:w-50 h-40 xl:h-50 shrink-0 rounded-full border-2 border-purple-500"
            />
            <ul className="w-32 xl:w-40 shrink-0">
              <li>
                <FaHtml5 className="inline text-orange-500" /> HTML
              </li>
              <li>
                <FaCss3Alt className="inline text-cyan-500" /> CSS
              </li>
              <li>
                <FaJs className="inline text-yellow-500" /> JS
              </li>
              <li>
                <SiTypescript className="inline text-blue-500" /> TS
              </li>
              <li>
                <SiNodedotjs className="inline text-green-500" /> Node
              </li>
              <li>
                <SiPostgresql className="inline text-violet-500" /> SQL
              </li>
              <li>
                <FaReact className="inline text-cyan-500" /> React
              </li>
            </ul>
            <div className="flex-1 min-w-0">
              <p className="border-b border-zinc-800 pb-5 mb-6 ">
                Desenvolvedor apaixonado por tecnologia, construindo projetos
                para transformar ideias em aplicações reais.
              </p>

              <div className="mt-5 flex flex-col flex-wrap">
                Nível do Desenvolvedor : Junior Dev.
                <div className="h-3 w-50 rounded-full bg-zinc-800 ">
                  <div className="h-full w-[85%] rounded-full bg-[#8B5CF6] "></div>
                </div>
                XP: 850/1000
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#181026] mt-2  rounded-lg text-[#FAFAFA] pr-5 pt-10 ">
          <h1 className="text-center p-1 text-2xl">
            PROJETOS CONCLUÍDOS POR MÊS
          </h1>
          <div className="flex mt-6">
            <div className="h-64 flex flex-col justify-between text-sm text-zinc-400 px-3 ">
              <span className="-ml-1">10</span>
              <span>8</span>
              <span>6</span>
              <span>4</span>
              <span>2</span>
              <span>0</span>
            </div>
            <div className="flex-1">
              <div className="relative h-64 border-1 border-b border-zinc-700">
                <div className="absolute top-0 left-0 w-full border-t border-zinc-800" />

                <div className="absolute top-[20%] left-0 w-full border-t border-zinc-800" />

                <div className="absolute top-[40%] left-0 w-full border-t border-zinc-800" />

                <div className="absolute top-[60%] left-0 w-full border-t border-zinc-800" />

                <div className="absolute top-[80%] left-0 w-full border-t border-zinc-800" />

                <div className="absolute inset-0 grid grid-cols-6 items-end px-2 md:px-4">
                  {/* MAR */}
                  <div className="flex flex-col items-center h-full justify-end ">
                    <div className="w-8 md:w-12 h-[20%] bg-linear-to-b from-purple-400 via-purple-500 to-purple-900 rounded-t-md"></div>
                  </div>
                  {/* ABR */}

                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-8 md:w-12 h-[40%] bg-linear-to-b from-purple-400 via-purple-500 to-purple-900 rounded-t-md" />
                  </div>

                  {/* MAI */}
                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-8 md:w-12 h-[60%] bg-linear-to-b from-purple-400 via-purple-500 to-purple-900 rounded-t-md" />
                  </div>

                  {/* JUN */}
                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-8 md:w-12 h-[40%] bg-linear-to-b from-purple-400 via-purple-500 to-purple-900 rounded-t-md" />
                  </div>

                  {/* JUL */}
                  <div className="flex flex-col items-center h-full justify-end">
                    <div className=" w-8 md:w-12 h-[60%] bg-linear-to-b from-purple-400 via-purple-500 to-purple-900 rounded-t-md " />
                  </div>

                  {/* AGO */}
                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-8 md:w-12 h-[90%] bg-linear-to-b from-purple-400 via-purple-500 to-purple-900 rounded-t-md" />
                  </div>
                </div>
              </div>
              {/* MESES */}
              <div className="grid grid-cols-6 px-4 text-center text-sm text-zinc-400 mt-2">
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Ago</span>
              </div>
            </div>
          </div>
        </div>
        <div
          name="3obloco"
          className="relative bg-[#181026] h-auto mb-2  rounded-lg flex flex-col items-center "
        >
          <div className="pt-10">
            <h1 className="text-3xl pl-4 text-[#FAFAFA]">
              Nível de Habilidades :
            </h1>
            <ul className="text-center pl-4 py-6 text-[#FAFAFA] ">
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <FaHtml5 className="inline text-orange-500" /> HTML
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[95%] rounded-xl bg-[#8B5CF6]"></div>
                </div>
                95%
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <FaCss3Alt className="inline text-cyan-500" /> CSS
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[90%] rounded-xl bg-[#8B5CF6]"></div>
                </div>
                90%
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <FaJs className="inline text-yellow-500" /> JavaScript
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[90%] rounded-xl bg-[#8B5CF6]"></div>
                </div>
                90%
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <SiTypescript className="inline text-blue-500" /> TypeScript
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[65%] rounded-xl bg-[#8B5CF6]"></div>
                </div>{" "}
                65%
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <SiNodedotjs className="inline text-green-500" /> Node.JS
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[75%] rounded-xl bg-[#8B5CF6]"></div>
                </div>
                75%
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <SiPostgresql className="inline text-violet-500" /> PostgreSQL
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[75%] rounded-xl bg-[#8B5CF6]"></div>
                </div>
                75%
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-28">
                  <FaReact className="inline text-cyan-500" /> React
                </div>
                <div className="h-3 w-32 md:w-50 rounded-xl bg-[#101826]">
                  <div className="h-full w-[75%] rounded-xl bg-[#8B5CF6]"></div>
                </div>{" "}
                75%
              </li>
            </ul>
          </div>
        </div>
        <div
          name="4o bloco"
          className="bg-[#181026] mb-2  h-auto rounded-lg pt-10  "
        >
          <div className="flex justify-center">
            <h1 className="text-3xl pl-4 text-[#FAFAFA] ">
              Ferramentas Que Uso :{" "}
            </h1>
          </div>
          <div className="grid grid-cols-4 mt-5 px-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="h-24 text-[#FAFAFA] flex flex-col items-center justify-center border-r border-b border-purple-900 last:border-r-0 nth-[4n]:border-r-0"
              >
                {tool.icon}
                <span className="mt-2 text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
