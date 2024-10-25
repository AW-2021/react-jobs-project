import React from 'react';

const App = () => {
  return (
    <>
     <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* LOGO */}
            <a href='/index.html' className='flex flex-shrink-0 items-center mr-4'>
              <img 
                src="images/logo.png" 
                alt="logo"
                className='h-10 w-auto'
              />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>React Jobs</span>
            </a>
            <div className='md:ml-auto'>
              <div className='flex space-x-2 text-white'>
                <a href="/index.html"
                  className='bg-black hover:bg-gray-900 rounded-md px-3 py-2'>
                  Home
                </a>
                <a href="/jobs.html"
                  className='hover:bg-gray-900 rounded-md px-3 py-2'>
                  Jobs
                </a>
                <a href="/add-job.html"
                  className='hover:bg-gray-900 rounded-md px-3 py-2'>
                  Add Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </nav>

     {/* HERO SECTION */}
     <section className='bg-indigo-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>Become a React Dev</h1>
          <p className='my-4 text-xl text-white'>Find the React job that fits your skills and needs</p>
      </div>
     </section>

     {/* DEVELOPERS AND EMPLOYERS SECTION */}
     <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold'>For Developers</h2>
            <p className='mt-2 mb-4'>Browse our React jobs and start your career today</p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              Browse Jobs
            </a>
          </div>

          <div className='bg-indigo-100 p-6 shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-2 mb-4'>List your job to find the perfect developer for the role</p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg py-2 px-4 hover:bg-indigo-600">
              Add Job
            </a>
          </div>
        </div>
      </div>
     </section>

     {/* BROWSE JOBS SECTION */}
     <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-center text-indigo-500 mb-6'>Browse Jobs</h2>
        <div>
          {/* Job Listing 1 */}
          <div>
            <div>
              <div>
                <div>Full-Time</div>
                <h3>Senior React Developer</h3>
              </div>

              <div>
                We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3>$70 - $80K / Year</h3>

              <div></div>

              <div>
                <div>
                  <i></i>
                  Boston, MA
                </div>
                <a>
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Job Listing 2 */}
          <div>
            <div>
              <div>
                <div>Full-Time</div>
                <h3>Senior React Devloper</h3>
              </div>

              <div>
                We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3>$70 - $80K / Year</h3>

              <div></div>

              <div>
                <div>
                  <i></i>
                  Boston, MA
                </div>
                <a>
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Job Listing 3 */}
          <div>
            <div>
              <div>
                <div>Full-Time</div>
                <h3>Senior React Devloper</h3>
              </div>

              <div>
                We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3>$70 - $80K / Year</h3>

              <div></div>

              <div>
                <div>
                  <i></i>
                  Boston, MA
                </div>
                <a>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     {/* FOOTER */}

    </>
  )
};

export default App;