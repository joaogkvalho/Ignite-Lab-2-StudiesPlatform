import { Calendar, GithubLogo, Laptop } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent){
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center justify-center">
            <div className="w-screen h-screen max-w-[1100px] bg-reactLogo bg-no-repeat bg-center flex items-center justify-between mx-auto">
                <div className="max-w-[624px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>
                        , do zero, com <strong className="text-blue-500">React</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias 
                        mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>

                    <div className="my-6 flex">
                        <div className="flex mr-6">
                            <Calendar size="48" />
                            <span className="ml-2">
                                Dos dias 20 <br/>
                                a 26 de Junho
                            </span>
                        </div>

                        <div className="flex">
                            <Laptop size="48" />
                            <span className="ml-2">
                                Totalmente online<br/>
                                e gratuito
                            </span>
                        </div>
                    </div>
                        
                    <div className=" mt-12">
                        <h1 className="text-xl text-bold">
                            Professor Ministrante:
                        </h1>
                        <div className="flex items-center gap-4 mt-2">
                            <img 
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
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
                    </div>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 w-[320px] h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />

                        <input 
                            className="bg-gray-900 rounded px-5 w-[320px] h-14"
                            type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>

                        <div className="text-center text-xs text-gray-300">
                            OU
                        </div>

                        <a href="#" 
                            className="bg-gray-100 hover:bg-gray-300 gap-2 uppercase py-4 flex items-center justify-center rounded font-bold text-sm text-gray-900 transition-colors disabled:opacity-50"
                        >   
                            <GithubLogo size="24" />
                            Fazer login com Github
                        </a>   
                    </form>
                </div>
            </div>
        </div>
    )
}
