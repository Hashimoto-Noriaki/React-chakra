import { memo,VFC } from "react"
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/login/Login";
import { Home } from "../components/pages/home/Home"; 
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
    return(
        <Routes>
            {/* ルート "/" は Login コンポーネントを表示 */}
             <Route path="/" element={<Login />} />
            {/* ルート "/home" は Home コンポーネントとネストされたルートを表示 */}       
             <Route path="/home" element={<Home />}/>
            {/* ネストされたルート */}
            {homeRoutes.map((route) => (
                <Route
                key={route.path}
                path={route.path}
                element={route.children}
                />
            ))}
            {/* すべての未定義のルートには 404 ページを表示 */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
})