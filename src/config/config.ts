const config = {
  information: {
    name: "Kartik Taneja",
    helloText: "Hello",
    welcomeText: "✨ Welcome to my universe",
    title: "JavaScript lover 🚀 | DevOps Engineer 🔧 | Crafting frameworks",
    title3: "and coding the future 💻 ✨",
  },
  flipWords: ["Linux & GitHub for DevOps", "Cloud Computing", "Site Reliability Engineer", "Frontend Web Developer", "Software Engineer"],
  codeContent: {
    code: `const devprofile = {
  name: 'Kartik Taneja',
  title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver',
   skills: {
     '🐹 Go', '☕ Java', '✨ TypeScript', '🐍 Python',
     '☁️ AWS', '🚢 Kubernetes', '🐳 Docker', '🔧 Terraform',
     '🗃️ MySQL', '🍃 MongoDB', '🔍 Elasticsearch', '🔴 Redis',
     '⚛️ React', '🚀 Node.js', '🔐 JWT Auth', '🌐 RESTful APIs',
     '📊 Prometheus', '🔍 OpenTelemetry', '📈 Grafana'
 },
  superPowers: {
   hardWorker: true,
   quickLearner: true,
   problemSolver: true,
   codingStyle: '🧠 Innovative & Efficient'
 },
  yearsOfExperience: 3,
   hireMeter: function() {
   return (
     this.superPowers.hardWorker &&
     this.superPowers.problemSolver &&
     Object.values(this.skills).flat().length > 10
   ) ? '🟢 HIRE ME NOW!' : '🔴 ALMOST THERE!';
 },
 coolQuote: '🤖 Turning caffeine into code, one commit at a time!'
};

console.log(devProfile.hireMeter()); // Probably: 🟢 HIRE ME NOW!;`,
  },
};

export default config;
