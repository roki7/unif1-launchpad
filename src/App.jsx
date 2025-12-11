import React, { useState } from "react";
import {
  ArrowRight,
  Rocket,
  Code,
  Globe,
  Sparkles,
  Flame,
  Github,
  Terminal,
  Send,
  CheckCircle,
  Zap,
  Layout,
  Smartphone,
  User,
  MapPin,
  Heart,
  Calendar,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

// --- アニメーション設定 ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const typingEffect = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 * i },
  }),
};

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 1.5,
    textShadow: "0 0 0px rgba(0,0,0,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    textShadow: ["0 0 10px #3b82f6", "0 0 20px #a855f7", "0 0 10px #3b82f6"],
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// --- コンポーネント群 ---

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-4 px-6 md:px-8 flex justify-between items-center fixed top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-blue-900/30"
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/images/unif1-logo-horizontal.png"
          alt="Unif1 Logo"
          className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
        />
      </div>
      <div className="hidden md:flex space-x-8 text-gray-400 font-medium tracking-wider">
        {/* Roadmapを削除し、メニューを整理 */}
        {["Concept", "Services", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="hover:text-blue-400 transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </button>
        ))}
      </div>
      <div>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(79,70,229,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-blue-900/30"
        >
          Join Us
        </motion.button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const titleText = "The Global Launchpad for Creators.";
  const words = titleText.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(42,42,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,42,42,0.5)_1px,transparent_1px)] bg-[size:3rem_3rem] animate-cyber-grid -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group cursor-pointer"
        >
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50"
          ></motion.div>

          <motion.img
            src="/images/unif1-logo-square.png"
            alt="Unif1 Launchpad Engine"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-[0_0_40px_rgba(99,102,241,0.8)]"
          />
        </motion.div>

        <motion.h1
          variants={typingEffect}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-extrabold tracking-tighter flex flex-wrap justify-center gap-x-4 gap-y-2"
        >
          {words.map((word, i) => (
            <motion.span key={i} className="inline-block overflow-hidden pb-2">
              {word.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${
                    i < 2
                      ? "from-blue-400 to-blue-500 text-neon-blue"
                      : "from-purple-400 to-purple-500 text-neon-purple"
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light tracking-wide"
        >
          一般人やクリエイターの「あったらいいな」を
          <br className="hidden md:block" />
          <span className="text-blue-400 font-medium">
            AIネイティブ・ファクトリー
          </span>
          で爆速実装。
          <br className="hidden md:block" />
          あなたのアイデアを、世界へ打ち上げる発射台。
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient-xy text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:shadow-[0_0_50px_rgba(79,70,229,0.9)] transition-all duration-300"
          >
            プロジェクトを始める
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-6 w-6 group-hover:text-blue-200" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    {
      name: "Gemini",
      icon: Sparkles,
      color: "text-blue-300",
      border: "border-blue-400/30",
    },
    {
      name: "React",
      icon: Code,
      color: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      name: "Cursor",
      icon: Terminal,
      color: "text-white",
      border: "border-white/30",
    },
    {
      name: "Firebase",
      icon: Flame,
      color: "text-orange-500",
      border: "border-orange-500/30",
    },
    {
      name: "GitHub",
      icon: Github,
      color: "text-white",
      border: "border-white/30",
    },
    {
      name: "Framer Motion",
      icon: Rocket,
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      name: "Tailwind",
      icon: Globe,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      name: "Vite",
      icon: Rocket,
      color: "text-yellow-400",
      border: "border-yellow-500/30",
    },
  ];

  const duplicatedTechs = [...techs, ...techs];

  return (
    <section className="py-10 bg-black/50 overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      <div className="flex">
        <motion.div
          className="flex space-x-8 px-4"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border ${tech.border} bg-white/5 backdrop-blur-sm whitespace-nowrap`}
            >
              <tech.icon className={`w-5 h-5 ${tech.color}`} />
              <span className="text-gray-300 font-mono font-bold tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -10, borderColor: "rgba(59,130,246,0.5)" }}
    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
  >
    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-white h-6 w-6" />
    </div>
    <h3 className="text-2xl font-bold text-gray-100 mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="concept" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Unif1 Concept
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Rocket}
            title="AI Native Factory"
            description="基本思想は『人間はゼロからコードを書かない』。GeminiとCursorを駆使し、爆速でプロトタイプを構築します。"
          />
          <FeatureCard
            icon={User}
            title="For Everyone"
            description="投資家のためではありません。プログラミング素人の「一般人」や「クリエイター」のアイデアを形にします。"
          />
          <FeatureCard
            icon={MapPin}
            title="Dual Base Strategy"
            description="茨城（開発本拠地）と東京（情報拠点）の二城体制。コストを極限まで抑え、開発へのDeep Workを実現します。"
          />
        </div>
      </div>
    </section>
  );
};

// --- Services (Bento Grid) ---
const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative z-10 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Services & Products
          </span>
          <br />
          <span className="text-lg text-gray-400 font-normal mt-4 block">
            日常を便利にするアプリと、アイデアの共同開発。
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* My Portal One (Flagship) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-2 row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone className="w-48 h-48 text-blue-400" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  My Portal One
                </h3>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-blue-300 bg-blue-500/20 rounded-full border border-blue-500/30">
                  Now Available
                </span>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  シフト管理、リンク集、買い物リスト、家計簿。
                  <br />
                  あなたの生活に必要な機能をこの1つにまとめた、オールインワン・ライフユーティリティ。
                </p>
                <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2 bg-black/20 p-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-400" /> シフト管理
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 p-2 rounded-lg">
                    <ShoppingCart className="w-4 h-4 text-blue-400" />{" "}
                    買い物リスト
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 p-2 rounded-lg">
                    <Globe className="w-4 h-4 text-blue-400" /> リンク集
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 p-2 rounded-lg">
                    <Zap className="w-4 h-4 text-blue-400" /> 家計簿
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700 flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    ¥150
                    <span className="text-sm text-gray-500 font-normal">
                      {" "}
                      / month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Co-Creation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute -bottom-4 -right-4 bg-purple-500/20 w-32 h-32 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors"></div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Co-Creation
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              CPOとAIがペアになり、あなたのアイデアを爆速で実装。素人でも、作りたいアプリを形にできます。
            </p>
          </motion.div>

          {/* Future Project (Ota-katsu) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute -bottom-4 -right-4 bg-pink-500/20 w-32 h-32 rounded-full blur-2xl group-hover:bg-pink-500/30 transition-colors"></div>
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ota-katsu Support
            </h3>
            <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-mono text-pink-300 bg-pink-500/20 rounded border border-pink-500/30">
              Coming Soon
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              グッズ交換マッチングなど、推し活（オタ活）をより快適にするための新サービスを企画中。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Join the Launchpad
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-700 font-mono text-sm md:text-base"
        >
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 text-gray-400 text-xs flex items-center gap-2">
              <Terminal className="w-3 h-3" />
              creator@unif1-base:~
            </div>
          </div>

          <div className="p-6 md:p-8 text-gray-300 space-y-6">
            <div className="text-blue-400">
              <span className="text-green-400">➜</span>{" "}
              <span className="text-cyan-400">~</span> ./submit_idea.sh
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 space-y-2"
              >
                <p>[SUCCESS] Connection established.</p>
                <p>[INFO] Idea transmitted to Unif1 HQ.</p>
                <p>[INFO] We will contact you shortly.</p>
                <div className="flex items-center gap-2 mt-4 text-white">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Transmission Complete</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-gray-500 text-xs uppercase tracking-wider">
                    Name / Creator Name
                  </label>
                  <div className="flex items-center gap-2 bg-black/30 p-2 rounded border border-gray-700 focus-within:border-blue-500 transition-colors">
                    <span className="text-green-500">❯</span>
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-500 text-xs uppercase tracking-wider">
                    Email
                  </label>
                  <div className="flex items-center gap-2 bg-black/30 p-2 rounded border border-gray-700 focus-within:border-blue-500 transition-colors">
                    <span className="text-green-500">❯</span>
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-500 text-xs uppercase tracking-wider">
                    Your Idea / Message
                  </label>
                  <div className="flex items-start gap-2 bg-black/30 p-2 rounded border border-gray-700 focus-within:border-blue-500 transition-colors">
                    <span className="text-green-500 mt-1">❯</span>
                    <textarea
                      rows="4"
                      placeholder="I want to make an app that..."
                      className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600 resize-none"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-6 w-full py-3 bg-blue-600/20 border border-blue-500/50 text-blue-400 font-bold rounded hover:bg-blue-600/30 hover:border-blue-400 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  [ LAUNCH_IDEA ]
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800 text-center md:text-left z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <img
            src="/images/unif1-logo-horizontal.png"
            alt="Unif1 Logo"
            className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <p className="text-gray-500 mt-2 text-sm">
            © 2025 Unif1 Inc. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 text-gray-400">
          <a href="#" className="hover:text-blue-400">
            X (Twitter)
          </a>
          <a href="#" className="hover:text-purple-400">
            GitHub
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-blue-500/40 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
