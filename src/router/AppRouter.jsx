import { Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
             {/* Rutas Publicas */}
            {/* <Route path="login" element={<LoginPage />}/> */}
            <Route path="/login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } 
            />

            {/* Rutas Privadas */}
            {/* <Route path="/*" element={<HeroesRoutes />}/> */}
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />
        </Routes>
    </>
  )
}
