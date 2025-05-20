import { NavLink } from 'react-router-dom'
import './Home.css'
export const HomePage = () => {
    return (
        <div className="bg-gray-200 home-page">
            <div className="isolate pt-14 px-8">
                <div className="mx-auto max-w-2xl py-56">
                    <div className="text-center">
                        <h1 className="text-6xl lg:text-8xl xl:text-8xl font-semibold tracking-tight text-balance text-gray-900">TO-DO APP</h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-900 sm:text-xl/8">Agrega, edita y gestiona tus tareas de una manera más sencilla. Todo en una interfaz amigable e intuitiva.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <NavLink to="/todo" className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-gray-900 transition-colors duration-500">Ir al demo</NavLink>
                            <NavLink to="/" className="text-sm/6 font-semibold text-gray-900 p-2  border-2 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-500">Más detalles<span aria-hidden="true">→</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
