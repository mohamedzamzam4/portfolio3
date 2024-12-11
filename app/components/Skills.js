const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    {name:"next",level:40},
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 px-4 bg-[#ff927f]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-lg font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div 
                    className="bg-[#0066FF] h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  