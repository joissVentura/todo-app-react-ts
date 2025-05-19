import { HomePage } from './presentation/react/pages/Home/HomePage'
import { TodoPage } from './presentation/react/pages/Todo/TodoPage'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { MainLayout } from './presentation/react/Layouts/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/todo' element={<TodoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
