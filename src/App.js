import React, { useState, createContext, useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import SvgBackground from "./SvgBackground";
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";

// Create a theme context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const props = useSpring({
    transform: isDark ? "translateX(20px)" : "translateX(0px)",
    config: config.wobbly,
  });

  return (
    <div
      className="fixed top-4 right-4 w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer flex items-center p-1"
      onClick={toggleTheme}
    >
      <animated.div
        style={props}
        className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
      >
        {isDark ? <Moon size={12} /> : <Sun size={12} />}
      </animated.div>
    </div>
  );
};

const SkillBadge = ({ skill, index }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.8) translateY(50px)" },
    to: { opacity: 1, transform: "scale(1) translateY(0)" },
    delay: 100 * index,
    config: config.wobbly,
  });

  return (
    <animated.span
      style={props}
      className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
    >
      {skill}
    </animated.span>
  );
};

const ExperienceItem = ({ title, company, period, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentProps = useSpring({
    height: isExpanded ? "auto" : 0,
    opacity: isExpanded ? 1 : 0,
    transform: isExpanded ? "translateY(0)" : "translateY(-20px)",
    config: config.stiff,
  });

  const iconProps = useSpring({
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  });

  const { isDark } = useTheme();

  return (
    <div
      className={`mb-6 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ${
        isDark ? "bg-gray-700" : "bg-gray-50"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3
          className={`text-xl font-semibold ${
            isDark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {title} at {company}
        </h3>
        <animated.div style={iconProps}>
          <ChevronDown
            size={20}
            className={isDark ? "text-gray-300" : "text-gray-600"}
          />
        </animated.div>
      </div>
      <p className={`mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        {period}
      </p>
      <animated.div style={contentProps} className="overflow-hidden">
        <ul className="list-disc list-inside mt-2">
          {details.map((detail, index) => (
            <li
              key={index}
              className={`my-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {detail}
            </li>
          ))}
        </ul>
      </animated.div>
    </div>
  );
};

const Section = ({ title, children, icon }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  const { isDark } = useTheme();

  return (
    <animated.div ref={ref} style={props} className="mb-12">
      <h2
        className={`text-3xl font-bold mb-6 flex items-center ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {React.cloneElement(icon, {
          className: isDark ? "text-blue-300" : "text-blue-500",
        })}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </animated.div>
  );
};

const Portfolio = () => {
  const { isDark } = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.molasses,
  });

  const photoProps = useSpring({
    from: { transform: "scale(0) rotate(-180deg)" },
    to: { transform: "scale(1) rotate(0deg)" },
    config: config.wobbly,
    delay: 300,
  });

  const skills = {
    DevOps: ["Docker", "Kubernetes", "Jenkins", "ArgoCD", "Azure"],
    Frameworks: ["Hono", "ExpressJs", "NestJS", "Laravel", "React"],
    Languages: ["Javascript", "Typescript", "PHP", "C", "Java", "Python"],
    OS: ["Linux", "Windows"],
  };

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Digiturism Lab",
      period: "Sep 2023 – Present",
      details: [
        "Conceived and implemented deployment infrastructure for project UTELLS",
        "Designed scalable architecture and implemented containerization best practices",
        "Set up Kubernetes cluster and implemented CI/CD automation",
        "Reduced deployment time by 75% and manual intervention by 90%",
        "Achieved 99.9% successful deployment rate and increased deployment frequency",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "DUSTcoding",
      period: "Jan 2023 – Sep 2023",
      details: [
        "Developed a social networking web application for a Tunisian association",
        "Implemented user-friendly interfaces and responsive layout",
        "Created commenting system and content recommendation algorithm",
        "Ensured data privacy and security",
        "Optimized performance and scalability",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "DevAppLand",
      period: "Feb 2021 – Jun 2021",
      details: [
        "Developed a mobile application for digitizing event ticketing in Tunisia",
        "Implemented secure payment gateway and QR code ticket validation",
        "Created event organizer dashboard and personalized recommendation system",
        "Ensured app security and optimized performance",
      ],
    },
  ];

  return (
    <animated.div
      style={fadeIn}
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ThemeToggle />
      <div
        className={`max-w-4xl mx-auto ${
          isDark ? "bg-gray-800" : "bg-white"
        } shadow-2xl rounded-lg overflow-hidden`}
      >
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          <animated.img
            style={photoProps}
            src="/images/profile.png" // Replace with your profile photo URL
            alt="Profile"
            className="w-64 h-64 rounded-full mb-4 shadow-lg"
          />
          <h1
            className={`text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Baha Kaabaoui
          </h1>
          <p
            className={`mt-2 text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Software Engineer & DevOps Enthusiast
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          {/* Email */}
          <a
            href="mailto:kaabaoui.baha@gmail.com"
            className={`text-xl ${
              isDark ? "text-blue-300" : "text-blue-500"
            } hover:underline`}
          >
            <Mail size={36} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kbbahaPro"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl ${
              isDark ? "text-blue-300" : "text-blue-500"
            } hover:underline`}
          >
            <Github size={36} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kbbaha"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl ${
              isDark ? "text-blue-300" : "text-blue-500"
            } hover:underline`}
          >
            <Linkedin size={36} />
          </a>
        </div>

        <div className="p-6 sm:p-8">
          <Section title="About Me" icon={<User size={36} />}>
            <p
              className={`text-lg leading-7 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate software engineer with a strong interest in
              DevOps and cloud technologies. With a robust background in
              full-stack development and cloud architecture, I love building
              scalable solutions and optimizing workflows for better efficiency.
            </p>
          </Section>

          <Section title="Skills" icon={<Code size={36} />}>
            {Object.keys(skills).map((category, i) => (
              <div key={i} className="mb-4">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap">
                  {skills[category].map((skill, index) => (
                    <SkillBadge key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section title="Experience" icon={<Briefcase size={36} />}>
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </Section>
        </div>
      </div>
    </animated.div>
  );
};

const App = () => (
  <ThemeProvider>
    <Portfolio />
  </ThemeProvider>
);

export default App;
