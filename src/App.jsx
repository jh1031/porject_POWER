import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import {
  MainPage,
  LoginPage,
  SignupPage,
  MovieListPage,
  MovieDetailPage,
  ReviewWritePage,
  EventDetailPage,
  EventListPage,
  ActorListPage,
  ActorDetailPage,
  AdminPage,
  InquiryWritePage,
} from './components/pages';

import './App.css';

const Layout = () => {
  return (
    <div id="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<MainPage />} index />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignupPage />} path="/signup" />
            <Route element={<MovieListPage />} path="/movielist" />
            <Route element={<MovieDetailPage />} path="/moviedetail/:id" />
            <Route element={<ReviewWritePage />} path="/reviewwrite" />
            <Route element={<EventListPage />} path="/eventlist" />
            <Route element={<EventDetailPage />} path="/eventdetail/:id" />
            <Route element={<ActorListPage />} path="/actorlist" />
            <Route element={<ActorDetailPage />} path="/actordetail/:id" />
            <Route element={<AdminPage />} path="/admin" />
            <Route element={<InquiryWritePage />} path="/inguirywrite" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
