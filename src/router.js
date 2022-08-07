import async from './component/Async.js'
//const Homepage = async(import("./pages/homepage/index.js"));
import Homepage from './pages/homepage/index.js';
import About from './pages/about/index.js';
import Projects from './pages/project/index.js';
import Resume from './pages/resume/index.js';

const HomepageRoute = {
    id: "homepage",
    path: "/",
    component: Homepage,
};

const AboutRoute = {
    id: "about",
    path: "/about",
    component: About,
}

const ProjectRoute = {
    id: "project",
    path: "/project",
    component: Projects,
}

const ResumeRoute = {
    id: "resume",
    path: '/resume',
    component: Resume,
}


const PageRouter = [
    HomepageRoute,
    AboutRoute,
    ProjectRoute,
    ResumeRoute,
]

export default PageRouter;