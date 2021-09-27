import "./style.css";
import header from "./components/header";
import footer from "./components/footer";
import home from './pages/home';
import projects from './pages/projects';
import principles from './pages/principles';
import about from './pages/about';

document.querySelector("#app").innerHTML = `
${header()}
<main>
${home()}
${projects()}
${about()}
</main>
${footer()}
`;
