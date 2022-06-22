import { gql, useQuery } from "@apollo/client"
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
        query MyQuery {
            lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
                title
                slug
                id
                lessonType
                availableAt
            }
        }

    `

interface GetLessonsQueryReponse {
    lessons: {
        title: string
        slug: string
        availableAt: string
        id: string
        lessonType: 'class' | 'live'
    }[]
}

export function Sidebar(){
    const { data } = useQuery<GetLessonsQueryReponse>(GET_LESSONS_QUERY)
    console.log(data)

    return(        
        <aside className="w-[332px] p-5 bg-gray-700 border-l border-gray-600">
            <span className="font-bold text-xl pb-5 mb-5 border-b border-gray-600 block"> 
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        /> 
                    )
                })}
            </div>
        </aside>
    )
}