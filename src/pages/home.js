import html from "../html";

const home = () => {
  return html`
    <section>
      <p>
        Hey, I'm Jay. You have found my website :). Thank you for stopping by. I'm
        a software developer from the Des Moines area. I'm passionate about
        sustainability. I aspire to be a
        <a
          href="https://principles.green/"
          target="_blank"
          rel="noopener noreferrer"
          >Sustainable Software Developer</a
        >. I'm still working on understanding what that means and working on how
        I can apply it, but it really excites me. You can find snippets of
        projects and my life here.
      </p>
    </section>
  `;
};

export default home;
