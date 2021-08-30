import html from "../html";

const projects = () => {
  return html`
    <section>
      <h2>Projects</h2>
      <article>
        <h3>
          <a
            href="https://github.com/jaygraffagna/miso-energy"
            target="_blank"
            rel="noopener noreferrer"
            >miso-energy</a
          >
          (In-Progress)
        </h3>
        <label>Node, Browser, Typescript</label>
        <p>
          Package created for npm wrapping the MISO Energy API into simple
          function calls. Built as an alternative to rewriting http calls to API
          endpoints.
        </p>
      </article>
      <article>
        <h3>
          <a
            href="https://abbeygraffagna.com"
            target="_blank"
            rel="noopener noreferrer"
            >abbeygraffagna.com</a
          >
          (Complete)
        </h3>
        <label>React, Vite, React Router</label>
        <p>
          Portfolio site built for journaling and showcasing art. The site is
          styled with vanilla CSS and uses semantic HTML5 elements in React. The
          routing is done with react router and lazy loading pseudo page
          components. The build system is Vite and is blazing fast.
        </p>
      </article>
      <article>
        <h3>
          <a
            href="https://handmade-holiday.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            >Handmade Holiday</a
          >
          (Complete)
        </h3>
        <label>Svelte, Sapper, MDsveX, sapper-blog-template</label>
        <p>
          A coded holiday gift for family members built on Svelte/Sapper. Each
          person got a coded canvas drawing on the site with their own pages.
          The canvas had a background of the code that created it using MDsvex.
          A template was used to start the project with some base styling and
          routing.
        </p>
      </article>
      <article>
        <h3>
          <a
            href="https://github.com/jaygraffagna/bnrc-site"
            target="_blank"
            rel="noopener noreferrer"
            >Bettendorf Natural Resource Committee</a
          >
          (Decommissioned)
        </h3>
        <label>React, Gatsby, Template</label>
        <p>
          Bettendorf Natural Resources Committee website holding content about
          the group and what it does. It used a Gatsby template to quickly
          deploy a solution. Decommissioned for a new site maintained by the
          group.
        </p>
      </article>
    </section>
  `;
};

export default projects;
