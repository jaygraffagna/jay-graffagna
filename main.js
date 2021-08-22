import html from "./html";
import "./style.css";

document.querySelector("#app").innerHTML = html`
  <img src="./Images/profile.jpg" alt="Jay Graffagna Profile" />
  <h1>Jay Graffagna</h1>
  <p>
    I'm a software developer who is passionate about sustainability. I currently
    work at MidAmerican Energy in Des Moines, IA. I mostly build apps in C# (and
    some in JS). Outside of work, I use javascript for my projects. I post some
    code
    <a href="https://github.com/jaygraffagna">here</a>. Feel free to contact me
    <a href="mailto:jaygraffagna10@gmail.com">here</a>.
  </p>
`;
