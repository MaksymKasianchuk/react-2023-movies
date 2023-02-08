import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const HomeView = lazy(() => import("pages/HomeView"));
const MoviesView = lazy(() => import("pages/MoviesView"));
const MovieDetailsView = lazy(() => import("pages/MovieDetailsView"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));

const App = () => {
    return(
        <Routes>
            <Route path='/' element={ <SharedLayout /> }>
                <Route index element={ <HomeView /> } />
                <Route path='movies' element={ <MoviesView /> } />
                <Route path='movies/:movieId' element={ <MovieDetailsView /> }>
                    <Route path='cast' element={ <Cast /> } />
                    <Route path='reviews' element={ <Reviews /> } />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;