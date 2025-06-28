import React, { useEffect } from 'react'

const Experiences = () => {

  useEffect(() => {
    document.title = "Experiences Page";
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-4 py-10 md:px-8 lg:px-16 ">
        <div className="w-full max-w-7xl flex flex-col gap-6">

          {/* Experience 1 */}
          <div className="w-full rounded-xl shadow-md p-6 lg:p-10  border border-slate-300">
            <h1 className="text-2xl font-bold text-orange-600 mb-3">
              Senior Software Developer — Notional Systems Pvt Ltd (Aug 2022 - Present)
            </h1>
            <p className="leading-relaxed">
              <span className="font-bold">Role:</span> Working as a Senior Software Developer focusing on full-stack development using ReactJS, NodeJS, ExpressJS, MongoDB, and advanced third-party integrations. Leading project architecture, mentoring junior devs, and managing deployment pipelines.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="w-full rounded-xl shadow-md p-6 lg:p-10 border border-slate-300">
            <h1 className="text-2xl font-bold text-orange-600 mb-3">
              SAP Operator — M/s Behera Brothers, Kolkata (Mar 2019 - 2022)
            </h1>
            <p className="leading-relaxed">
              <span className="font-bold">Role:</span> Worked as a SAP Operator in a tea company involved in import/export, packaging, blending, and warehousing. Handled SAP system operations and coordinated logistics tracking processes.
            </p>
          </div>


          {/* Experience 3 */}
          <div className="w-full rounded-xl shadow-md p-6 lg:p-10 border border-slate-300">
            <h1 className="text-2xl font-bold text-orange-600 mb-3">
              MERN Stack Developer — Freelancing (2021 - Present)
            </h1>
            <p className="leading-relaxed">
              <span className="font-bold">Role:</span> Worked as a freelance MERN Stack Developer specializing in ReactJS, Redux, NextJS, NodeJS, ExpressJS, MongoDB, Firebase, and Socket.IO. Delivered full-stack solutions and integrated multiple third-party APIs for diverse client projects.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Experiences
