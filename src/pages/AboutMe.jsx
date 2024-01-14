import Layout from "../components/Layout";
import profilePic from "/developer-pic-2.jpg";

export default function AboutMe() {
  return (
    <Layout id="#about" title="About me">
      <div className="flex flex-col items-center justify-center">
        <div className="lg:flex lg:gap-16 flex-col lg:flex-row justify-center items-center w-full dark:text-white">
          <div className="flex flex-col items-start justify-start basis-1/2">
            <h3 className="mb-4 text-lg font-bold uppercase">Biography</h3>
            <p className="lg:font-medium font-light">
              Hi! My name is <strong>Uyen Lai</strong>. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Aliquid repellendus doloremque
              illo nam magni totam deserunt, eum, quia unde doloribus quas
              commodi praesentium fugiat. Ipsum officia dolore inventore libero
              exercitationem!
            </p>
            <p className="lg:my-4 my-2 lg:font-medium font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              repellendus doloremque illo nam magni totam deserunt, eum, quia
              unde doloribus quas commodi praesentium fugiat. Ipsum officia
              dolore inventore libero exercitationem!
            </p>
            <p className="lg:font-medium font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              repellendus doloremque illo nam magni totam deserunt, eum, quia
              unde doloribus quas commodi praesentium fugiat. Ipsum officia
              dolore inventore libero exercitationem!
            </p>
          </div>
          <div className="bg-gray-500 w-1/2 mx-auto mt-6 lg:basis-1/2 flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-l-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
            <img
              src={profilePic}
              alt="profile picture"
              className="h-auto w-full rounded-[2rem] p-4"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
