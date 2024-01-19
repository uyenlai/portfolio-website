import Layout from "../components/Layout";
import Project from "../components/Project";
import buttonRipple from "/button-ripple-effect.mov";
import eventsPage from "/events-page.mov";
import orderFood from "/food-order-app.mov";
import guessNumber from "/guess-the-number.mov";
import tabsNavigate from "/tabs-navigation.mov";
import toDo from "/todo-list.mov";

export default function ProjectsPage() {
  return (
    <Layout id="#projects" title="Projects">
      <div className="flex flex-col gap-y-20">
        <div>
          <Project
            title="Project 1"
            src={orderFood}
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />
        </div>
        <div className="flex gap-6 justify-between items-center">
          <Project
            title="Poject 2"
            src={buttonRipple}
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />
          <Project
            title="Poject 3"
            src={tabsNavigate}
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />
        </div>
        <div>
          <Project
            title="Project 1"
            src={eventsPage}
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />
        </div>
        <div>
          <Project
            title="Project 1"
            src={guessNumber}
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />
        </div>
        <div>
          <Project
            title="Project 1"
            src={toDo}
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />
        </div>
      </div>
    </Layout>
  );
}
