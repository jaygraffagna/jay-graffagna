import html from "../html";

const principles = () => {
  return html`
    <section>
      <h2>Principles</h2>
      <p>As a developer, I follow some basic principles.</p>
      <ul>
        <li>Simple solutions</li>
        <li>Testable code</li>
        <li>Well documented</li>
      </ul>
      <p>
        I am a big fan of CI/CD and the developer experience. If set up early, I
        believe it enables a healthy development lifecycle. It removes the
        burden from a developer from manual releases and the potential mistakes
        of manual human intervention.
      </p>
      <p>
        I also do a lot of work to "reduce the barrier to entry" for my
        coworkers. I want it to be easy to get up and running in a new project
        with templates preconfigured to the ecosystem. For existing projects, I
        want someone to be able to git code with a clone and small set of
        commands.
      </p>
      <p>
        Most recently, I have been working to understand and start applying
        sustainable software principles in my work. The steps I am taking are
        education and real world application. A lot of what I have read are
        broad principles and not a "one size fits all" process. I see them as a
        guiding beacon to be conscious of while coding. It will be a challenge
        to have the mentality of surviving the test of time in tech with
        everything changing so quickly and constantly. All I know is I am going
        to keep learning and trying to do better.
      </p>
    </section>
  `;
};

export default principles;
