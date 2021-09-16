import html from "../html";

const principles = () => {
  return html`
    <section>
      <h2>Principles</h2>
      <p>As a developer, I use a few guiding principles.</p>
      <ul>
        <li>Simple</li>
        <li>Testable</li>
        <li>Documented</li>
      </ul>
      <p>
        The specifics behind these principles are constantly changing as I
        continue to learn and grow as a developer.
      </p>
      <p>
        Automation is an additional principle I bring to projects. I like
        applying CI/CD early in a project to increase efficiency and reduce
        mistakes from manual builds and deployments. I work to template, script,
        or build tools for processes that are cumbersome to a developer.
      </p>
      <p>
        Most recently, I have been working to understand and start applying
        sustainable software principles in my work. A lot of what I have read
        are broad principles and not a "one size fits all" process. I see them
        as a guiding beacon while coding or designing a solution. I know it will
        be a challenge to have the mentality of “surviving the test of time” in
        tech with everything changing so quickly and constantly. All I know is I
        am going to keep learning and trying to do better.
      </p>
    </section>
  `;
};

export default principles;
