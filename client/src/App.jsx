import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import ViewBlog, { getBlog } from './components/Blogs/ViewBlog';
import About,
{
  getGitHubProfile
} from './components/About/About';
import Dashboard, { fetchUser } from './components/Admin/Dashboard';
import Blog from './components/Admin/components/Blog';
import Messages, { fetchMessage } from './components/Admin/components/Messages';
import Projects, { fetchProjects } from './components/Projects/Projects';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} loader={fetchProjects}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:_id" element={<ViewBlog />} loader={({params})=>getBlog(params._id)}/>
        <Route path="about" element={<About />} loader={getGitHubProfile} />
        {<Route path='/admin' element={<Dashboard />} loader={fetchUser} >
          <Route path='' element={<Blog/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='messages' element={<Messages/>} />
        </Route>}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};


export default App;
