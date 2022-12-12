import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layouts";
import {CharacterPage, CharactersPage, EpisodesPage, LocationPage} from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route path={'/characters'} element={<CharactersPage/>}></Route>
                <Route path={'/location'} element={<LocationPage/>}></Route>
                <Route path={'/episodes'} element={<EpisodesPage/>}></Route>
                <Route path={'/character/id=:id'} element={<CharacterPage/>}></Route>
            </Route>
        </Routes>
    )
}