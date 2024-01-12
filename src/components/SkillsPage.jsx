import Layout from "./Layout";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const cssVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "-17rem",
      y: "-5rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const htmlVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "5rem",
      y: "7rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const jsVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "20rem",
      y: "-15rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const reactVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "-20rem",
      y: "15rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const tailwindVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "-18rem",
      y: "-20rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const githubVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "18rem",
      y: "20rem",
      transition: {
        duration: 1.5,
      },
    },
  };
  return <Layout>Skills</Layout>;
}
