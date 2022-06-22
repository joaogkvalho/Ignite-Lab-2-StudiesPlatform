import { CheckCircle } from 'phosphor-react'

export function Lesson(){
    return(
        <a href="#">
            <span className="text-gray-300">
                Terça • 22 de junho • 19h00
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-1">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white font-bold border border-green-300 ">
                        AO VIVO
                    </span>
                </header>   

                <strong className="text-gray-200 mt-4 block">
                    Abertura do evento Ignite Lab
                </strong>
            </div>
        </a>
    )
}