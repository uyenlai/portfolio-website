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
            title="Food Order App"
            src={orderFood}
            para="A dynamic food order application using React, seamlessly integrating data fetched from an API to populate the menu. Leveraging the power of React's state management, I employed a combination of useContext, useReducer, useState, and useEffect hooks to efficiently handle various aspects of the app's state. "
            href="https://github.com/uyenlai/food-order-app"
          />
        </div>
        <div>
          <Project
            title="Ripple Effect Button"
            src={buttonRipple}
            para="A captivating Ripple Effect Button using Vanilla JavaScript, where a delightful visual experience is created upon hovering. The button is crafted to dynamically fill with color, originating from the specific point where the cursor first hovers."
            href="https://github.com/uyenlai/button-ripple-effect"
          />
        </div>
        <div>
          <Project
            title="Tabs Navigation"
            src={tabsNavigate}
            para="A Tabs Navigation system using pure JavaScript. Clicking on a tab dynamically updates the active class, and the content section responds dynamically, rendering the relevant content for the selected tab."
            href="https://github.com/uyenlai/tabs-navigation"
          />
        </div>
        <div>
          <Project
            title="Events Page"
            src={eventsPage}
            para="Experience seamless event management on my simple Events Page since I focused on the authentication feature the most. Users can effortlessly create a new account or log in, unlocking exclusive privileges. Authenticated users gain the ability to modify or delete events, ensuring a personalized experience. Backend data was retrieved from a Udemy React course I had studied."
            href="https://github.com/uyenlai/events-page"
          />
        </div>
        <div>
          <Project
            title="Guess The Number"
            src={guessNumber}
            para="Guess the Number game, crafted entirely with Vanilla JavaScript. Dive into the excitement as players enter a number within the 1 to 20 range, receiving real-time feedback on their guesses. The game cleverly notifies users if their guess is too high or too low, guiding them towards the correct answer. Upon a successful guess, players triumph and can seamlessly restart the game for another round of exhilarating challenges."
            href="https://github.com/uyenlai/guess-the-number"
          />
        </div>
        <div>
          <Project
            title="To-do List"
            src={toDo}
            para="A React-powered To-Do List app. Users can effortlessly manage their tasks by creating new to-dos with customizable statuses—whether 'not started,' 'in progress,' or 'done.' The intuitive design allows for seamless deletion of added to-dos, providing a user-friendly interface for efficient task management."
            href="https://github.com/uyenlai/todo-list"
          />
        </div>
      </div>
    </Layout>
  );
}
