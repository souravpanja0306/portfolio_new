import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-4 py-10 md:px-8 lg:px-16">
        <div className="w-full max-w-7xl flex flex-col gap-8">

          {/* About & Personal Details */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 p-6 lg:p-10   rounded-xl shadow-md border border-slate-300">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">About</h1>
              <p className=" leading-relaxed">
                <span className="font-bold text-2xl">H</span>i, This is Sourav Panja. I am a web developer specializing in MERN Stack development,
                experienced with all stages of the development cycle for dynamic web projects.
                Well-versed in numerous programming languages including HTML5, CSS, JavaScript, MySQL, and others.
              </p>
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10   rounded-xl shadow-md border border-slate-300">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">Personal Details</h1>
              <ul className="space-y-2 ">
                <li><span className="font-bold">Gender:</span> Male</li>
                <li><span className="font-bold">Date of Birth:</span> 3rd, December, 1995</li>
                <li><span className="font-bold">Nationality:</span> Indian</li>
                <li><span className="font-bold">Religion:</span> Hinduism</li>
              </ul>
            </div>
          </div>

          {/* Academic & Additional */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 p-6 lg:p-10   rounded-xl shadow-md border border-slate-300">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">Academic Details</h1>
              <ul className="space-y-2 ">
                <li>
                  <span className="font-bold">College:</span> Graduate (B.Com) from Shyama Prasad College, Calcutta University
                </li>
                <li>
                  <span className="font-bold">School:</span> 12th passout from Khidderpore Academy, WB Board
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10   rounded-xl shadow-md border border-slate-300">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">Additional Qualifications</h1>
              <ul className="space-y-2 ">
                <li>
                  <span className="font-bold">Institute:</span> Filed Technician in Computer Hardware, Brainware
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About