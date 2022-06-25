import { useCreateSubscriberMutation } from '../graphql/generated'
import { Logo } from './Logo'

export function Header(){
    return(
        <header className="w-full py-5 px-8 flex items-center justify-between bg-gray-700 border-b border-gray-600">
            <Logo />

            <div>
               
            </div>
        </header>
    )
}