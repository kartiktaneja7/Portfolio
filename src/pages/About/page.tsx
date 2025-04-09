import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark"
            ? "bg-[#090f1c] text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
              
              {/* Social Media Buttons */}
              <div className="flex justify-center gap-3 mt-4">
                <a 
                  href="https://github.com/kartiktaneja7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === "dark" 
                      ? "bg-gray-800 text-gray-200 hover:bg-gray-700" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/kartik-taneja7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === "dark" 
                      ? "bg-blue-900 text-blue-200 hover:bg-blue-800" 
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                
                <a 
                  href="https://leetcode.com/kartiktaneja7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === "dark" 
                      ? "bg-yellow-900 text-yellow-200 hover:bg-yellow-800" 
                      : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  }`}
                >
                  <SiLeetcode className="w-5 h-5" />
                  <span className="sr-only">LeetCode</span>
                </a>
                
                <a 
                  href="https://instagram.com/kartiktaneja7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === "dark" 
                      ? "bg-pink-900 text-pink-200 hover:bg-pink-800" 
                      : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                  }`}
                >
                  <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div className="relative space-y-4">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hello! I am a Certified RHCE/RHCSA DevOps Engineer with 2.8 years of experience in deploying and managing cloud infrastructure, CI/CD pipelines, automation, and monitoring. I've worked in the Financial and Telecommunication industries, optimizing backend services and enhancing observability using tools like Prometheus, Open Telemetry, and Elasticsearch. Gained technical skills in AWS, Terraform, Docker, Kubernetes, Python, Java, Ansible and Shell scripting. I am also skilled in building event-driven architectures with Kafka and implementing scalable, high-performance systems.{" "}
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                   Consistently demonstrating the ability to master skills and technologies rapidly and adapt to evolving environments. Ability to develop creative solutions to address challenges. Currently, I am expanding my expertise through a Master's in Information Systems, 
                </span>
                 aiming to leverage my skills in upcoming Co-op/Internship opportunities.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Student At,
                    </cite>
                    <div className="flex items-center gap-2">
                      <span>Northeastern University, Boston</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}