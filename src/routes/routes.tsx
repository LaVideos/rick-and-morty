import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layouts";
import {CharacterPage, CharactersPage, EpisodesPage, LocationPage, MainPage, NotFoundPage} from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                {/*<Route index element={<CharactersPage/>}></Route>*/}
                <Route path={'/'} element={<MainPage/>}></Route>
                <Route index path={'/characters'} element={<CharactersPage/>}></Route>
                <Route path={'/location'} element={<LocationPage/>}></Route>
                <Route path={'/episodes'} element={<EpisodesPage/>}></Route>
                <Route path={'/character/id=:id'} element={<CharacterPage/>}></Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}></Route>
        </Routes>
    )
}