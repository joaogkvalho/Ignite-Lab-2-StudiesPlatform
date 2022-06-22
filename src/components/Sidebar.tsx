import { Lesson } from "./Lesson";

export function Sidebar(){
    return(
        <aside className="w-[332px] p-5 bg-gray-700 border-l border-gray-600">
            <span className="font-bold text-xl pb-5 mb-5 border-b border-gray-600 block"> 
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                <Lesson /> 
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </aside>
    )
}