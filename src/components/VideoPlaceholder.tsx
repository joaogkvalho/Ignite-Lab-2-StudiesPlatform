import { CaretRight, FileArrowDown, ImageSquare, Question, UsersFour, UsersThree } from "phosphor-react";

export function VideoPlaceholder(){
    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[70vh] flex items-center justify-center aspect-video">
                    <h1 className="text-2xl">
                        Clique em uma das aulas ao lado para começar o Ignite Lab
                    </h1>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] flex flex-col mx-auto">
                <h1 className="text-xl mb-8">
                    Professores Ministrantes:
                </h1>

                <div className="flex items-center justify-center mb-2 gap-8">
                    <div className="flex items-center gap-4">
                        <img 
                            className="h-24 w-24 rounded-full border-2 border-blue-500"
                            src="https://github.com/diego3g.png"
                            alt="Diego Fernandes"
                        />
                        <div className="leading-relaxed">
                            <strong className="font-bold text-xl block">
                                Diego Fernandes
                            </strong>
                            <span className="text-gray-200 text-sm block">
                                CTO na Rocketseat
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img 
                            className="h-24 w-24 rounded-full border-2 border-blue-500"
                            src="https://github.com/joaogkvalho.png"
                            alt="João Gabriel"
                        />
                        <div className="leading-relaxed">
                            <strong className="font-bold text-xl block">
                                João Gabriel
                            </strong>
                            <span className="text-gray-200 text-sm block">
                                Desenvolvedor Front-end | ReactJS
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img 
                            className="h-24 w-24 rounded-full border-2 border-blue-500"
                            src="https://github.com/joaocarvalhoprofile.png"
                            alt="João Gabriel"
                        />
                        <div className="leading-relaxed">
                            <strong className="font-bold text-xl block">
                                João Carvalho
                            </strong>
                            <span className="text-gray-200 text-sm block">
                                Desenvolvedor Sênior | NodeJS
                            </span>
                        </div>
                    </div>
                </div>

                <div className="gap-8 mt-16 grid grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size="40" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-xl">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size="24" />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <ImageSquare size="40" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size="24" />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Question size="40" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-xl">
                                Dúvidas
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse a comunidade exclusiva no Discord e evolua com outros devs
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size="24" />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <UsersFour size="40" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-xl">
                                Conheça a nossa equipe
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Conheça nossa equipe de profissionais por trás dos nossos eventos
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size="24" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}