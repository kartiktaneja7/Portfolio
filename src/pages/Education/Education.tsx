import { useState } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/provider/page";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const educationData = [
    {
      degree: "Masters in Information Systems",
      school: "Northeastern University",
      mascot: "📘",
      year: "2024-2025",
      achievements: ["GPA: 3.4/4.0", "Subject: Computer Science"],
      skills: ["Application Engineering Dev","Web Design and User Interface", "Program Structures and Algorithmns", "Network Structures and Cloud Computing", "User Experience Design/Testing","Advance Big Data Application/Indexing","Data Management and Database Design"],
      description:
        "Tech-driven innovator blending advanced computational skills with practical engineering expertise, specializing in cloud computing, application development, and data-driven solutions. Transforming complex technical challenges into elegant, scalable innovations.",
    },
    {
      degree: "Bachlors in Computer Engineering",
      school: "Dr. DY Patil University, Pune",
      mascot: "📗",
      year: "2017-2020",
      achievements: ["GPA: 7.3/10", "Subject: Computer Science"],
      skills: ["Data Structures", "Computer Graphics", "Software Engineering", "Operating Systems", "Computer Networks", "Machne Learning(LLP)","Mathematics", "Java Programming", "Python", "Artificial Intelligence(AI)"],
      description:
        "Passionate technologist with robust foundation in software engineering, data structures, and artificial intelligence. Combines theoretical knowledge with hands-on problem-solving skills to drive technological innovation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={`min-h-screen relative overflow-hidden py-40 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 ${
                isDarkMode ? "bg-gray-900/50" : "bg-white/50"
              } backdrop-blur-lg ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.05] shadow-lg"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3
                      className={`text-2xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                  </div>
                  <p
                    className={`text-lg flex items-center gap-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p
                    className={`flex items-center gap-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p
                  className={`text-sm italic border-l-2 border-teal-500 pl-3 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4
                    className={`text-sm font-semibold flex items-center gap-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
