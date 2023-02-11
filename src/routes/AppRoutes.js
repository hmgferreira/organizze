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
            isLayout: true
        },
        {
            path: '/receitas',
            element: <Receitas />,
            isPrivate: true,
            isLayout: true
        },
        // INICIO DA ROTA CRUD
        {
            path: '/despesas',
            element: <Despesas />,
            isPrivate: true,
            isLayout: true
        },
        {
            path: '/despesas/novo',
            element: <DespesasForm />,
            isPrivate: true,
            isLayout: true
        },
        {
            path: '/despesas/edit/:id',
            element: <DespesasForm />,
            isPrivate: true,
            isLayout: true
        },
        // FIM DA ROTA CRUD
        {
            path: '/login',
            element: <Login />,
            isPrivate: false,
            isLayout: false
        }
    ];

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {listRoutes.map((item, indice) => (
                        <Route key={indice} path={item.path} element={
                            <PrivateRoute 
                                isPrivate={item.isPrivate} 
                                component={item.element} 
                                isLayout={item.isLayout}
                            />
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