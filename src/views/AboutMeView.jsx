import React, { useMemo } from "react";
import WindowCard from "@/components/elements/WindowCard.jsx";
import {
    FaBuilding,
    FaCloud, FaComments,
    FaDatabase,
    FaGitAlt,
    FaGlobe,
    FaLaptopCode,
    FaLock, FaNetworkWired,
    FaPaintBrush, FaRobot,
    FaServer, FaVial
} from "react-icons/fa";
import { PiGraph } from "react-icons/pi";

import AnimatedText from "@/components/elements/AnimatedText.jsx";

export default function AboutMeView() {
  const skills = useMemo(
      () => [
        {
          icon: FaLaptopCode,
          title: "Programming Languages",
          content: "Java, Python, JavaScript, Functional programming, Scala",
        },
        {
          icon: FaGlobe,
          title: "Frontend",
          content: "React, Next, Vue, Tailwind, CSS, Bootstrap, Vite",
        },
        {
          icon: FaRobot,
          title: "AI & Data Engineering",
          content:
              "Machine Learning fundamentals, Natural Language Processing (NLP), Large Language Models (LLM fundamentals), Data Engineering concepts",
        },
        {
          icon: PiGraph,
          title: "Data Analysis",
          content: "Pandas, NumPy, Matplotlib, Bokeh, Hvplot, Scikit-learn, Visual Analytics",
        },
        {
          icon: FaServer,
          title: "Backend & Frameworks",
          content:
              "Spring Boot, REST APIs, Microservices, Design Patterns, SOLID, SOA",
        },
        {
          icon: FaDatabase,
          title: "Databases",
          content: "Relational (SQL), NoSQL (MongoDB, Cassandra), Graph (Neo4J), Search engines (ElasticSearch), Redis",
        },
        {
          icon: FaGitAlt,
          title: "Version Control",
          content: "Git, GitHub",
        },
        {
          icon: FaCloud,
          title: "Cloud & DevOps",
          content: "AWS, Docker",
        },
        {
          icon: FaLock,
          title: "Security",
          content: "Fundamentals of cybersecurity and cryptography",
        },
        {
          icon: FaVial,
          title: "Testing",
          content: "Unit & Integration Testing, JUnit, Mockito, Postman",
        },
        {
          icon: FaComments,
          title: "Message Brokers",
          content: "RabbitMQ",
        },
        {
          icon: FaNetworkWired,
          title: "Networking & Protocols",
          content:
              "Advanced Networking Analysis, Core Networking, Socket Programming, HTTP/HTTPS",
        },

        {
          icon: FaBuilding,
          title: "Business Analysis",
          content:
              "BPMN, UML, Use Case Diagrams, Process Mapping, Requirements Analysis",
        },
      ],
      []
  );

  return (
      <div className="container mx-auto max-w-4xl px-4 py-12 text-gray-800">
        {/* Description */}
        <section className="mb-20">
            <div className="text-center">
                <AnimatedText
                    text="About Me"
                    className="text-4xl mb-10 font-bold"
                    delay={60}
                    duration={0.4}
                    splitType="chars"
                />
            </div>

          <div className="space-y-4 text-lg font-light leading-relaxed">
            <p>
                I am a <strong>Full Stack Software Engineer</strong> from Italy with a passion for{" "}
                <strong>business solutions</strong>, <strong>AI</strong>,
                and <strong>cybersecurity</strong>. I specialize in developing efficient solutions for <strong>web and cloud-based applications</strong>.
            </p>
            <p>
              Combining a strategic mindset with hands-on technical expertise, I specialize in developing{" "}
              <strong>scalable software architectures</strong>, optimizing <strong>cloud infrastructures</strong>,
              and build <strong>secure, reliable</strong> systems.
            </p>
            <p>
              I am fascinated by the transformative potential of AI and the critical role cybersecurity plays in today's landscape.
            </p>
            <p>
              My goal is to create <strong>innovative solutions</strong> that solve real-world business challenges.
            </p>
          </div>
        </section>

        {/* Skills List */}
        <section className="mb-16">
            <div className="text-center">
                <AnimatedText
                    text="Skills"
                    className="text-4xl mb-8 font-bold"
                    delay={60}
                    duration={0.4}
                    splitType="chars"
                />
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                  <WindowCard key={index} delay={index} className="h-full">
                    <Icon className="text-4xl text-blue-600 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-center mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                      {skill.content}
                    </p>
                  </WindowCard>
              );
            })}
          </div>
        </section>

        {/* Carousel */}
        {/*
        <section className="mt-12">
          <SkillsSection />
        </section>
        */}
      </div>
  );
}