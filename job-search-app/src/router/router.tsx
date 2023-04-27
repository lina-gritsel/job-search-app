import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'
import Layout from '../layout/Layout'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
