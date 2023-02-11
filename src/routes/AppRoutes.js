import { BrowserRouter, Route, Routes } from "react-router-dom";
import Despesas from "../pages/Despesas";
import DespesasForm from "../pages/Despesas/form";
import Home from "../pages/Home";
import Receitas from "../pages/Receitas";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {

    const listRoutes = [
        {
            path: '/',
            element: <Home />,
            isPrivate: true,
        },
        {
            path: '/receitas',
            element: <Receitas />,
            isPrivate: true,
        },
        {
            path: '/despesas',
            element: <Despesas />,
            isPrivate: true,
        },
        {
            path: '/despesas/novo',
            element: <DespesasForm />,
            isPrivate: true,
        },
        {
            path: '/despesas/edit/:id',
            element: <DespesasForm />,
            isPrivate: true,
        },
        {
            path: '/login',
            element: <Login />,
            isPrivate: false,
        }
    ];

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {listRoutes.map((item, indice) => (
                        <Route key={indice} path={item.path} element={
                            <PrivateRoute isPrivate={item.isPrivate} component={item.element} />
                        } />
                    ))}

                    {/* <Route path='/' element={<Home />} />
                    <Route path='/receitas' element={
                        <PrivateRoute>
                            <Receitas />
                        </PrivateRoute>
                    } />
                    <Route path='/despesas' element={
                        <PrivateRoute>
                            <Despesas />
                        </PrivateRoute>
                    } />
                    <Route path='/despesas/novo' element={<DespesasForm />} />
                    <Route path='/despesas/edit/:id' element={<DespesasForm />} />

                    <Route path='/login' element={<Login />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;