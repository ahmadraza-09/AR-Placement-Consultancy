import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../css/oppeningjobs.css';

const OppeningJobsComp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Region');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredJobOpenings, setFilteredJobOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    showTop();
  }, []);

  const showTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setTimeout(() => {
      setFilteredJobOpenings(jobOpenings);
      setLoading(false);
    }, 2000); 
  }, []);

  const jobOpenings = [
    { id: 1, title: 'Bussiness Manager', region: 'India', category: 'Finance', experience: '0-3 Yrs', startingSalary: '10k', endingSalary: '30k', qualification: 'Bachelors or Masters degree in Computer Science, Engineering, or a related', skills: 'Java, C++, Visual Studio Code. Unity3D, Csharpc, Game Development, Games', postedTime: '1 Day Ago' },
    { id: 2, title: 'Bank Manager', region: 'Canada', category: 'Banking', experience: '3-5 Yrs', startingSalary: '20k', endingSalary: '40k', qualification: 'Bachelor’s degree in finance, accounting, economics, or related field', skills: 'Financial Management, Leadership, Banking Operations', postedTime: '2 Days Ago' },
    { id: 3, title: 'Web Developer', region: 'India', category: 'IT Software', experience: '2-4 Yrs', startingSalary: '15k', endingSalary: '35k', qualification: 'Bachelor’s degree in Computer Science or related field', skills: 'HTML, CSS, JavaScript, React.js, Node.js', postedTime: '3 Days Ago' },
    { id: 4, title: 'Software Developer', region: 'India', category: 'IT Software', experience: '1-2 Yrs', startingSalary: '12k', endingSalary: '30k', qualification: 'Bachelor’s degree in Computer Science or related field', skills: 'Java, Python, SQL, Git', postedTime: '4 Days Ago' },
    { id: 5, title: 'Web Developer', region: 'Nepal', category: 'IT Software', experience: '0-2 Yrs', startingSalary: '10k', endingSalary: '25k', qualification: 'Bachelor’s degree in Computer Science or related field', skills: 'HTML, CSS, JavaScript, React.js', postedTime: '5 Days Ago' },
    { id: 6, title: 'Software Developer', region: 'Canada', category: 'IT Software', experience: '3-5 Yrs', startingSalary: '25k', endingSalary: '45k', qualification: 'Bachelor’s degree in Computer Science or related field', skills: 'C#, .NET, ASP.NET, SQL Server', postedTime: '6 Days Ago' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredJobs = jobOpenings.filter(job => {
      return (
        (selectedRegion === 'All Region' || job.region === selectedRegion) &&
        (selectedCategory === 'All Categories' || job.category === selectedCategory) &&
        (job.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredJobOpenings(filteredJobs);
  };

  return (
    <>
      <div className="oppening-jobs-section">
        <div className="job-search-form">
          <div className="overlay">
            <h1>Find Your <span>Dream Job</span></h1>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder='What are you looking for ?'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="All Region">All Region</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Nepal">Nepal</option>
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All Categories">All Categories</option>
                <option value="Finance">Finance</option>
                <option value="Banking">Banking</option>
                <option value="IT Software">IT Software</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="job-oppening-data">
          <h2>Opening Jobs List</h2>
          <div className="jobs-data">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div className="job-card" key={index}>
                  <Skeleton className='job-title' height={20} width="100%"/>
                  <Skeleton className='job-category ' height={20} width={150} />
                  <Skeleton height={20} width={100}/>
                  <div className="job-exp-salery">
                    <div className="job-exp">
                      <Skeleton height={20} width={100} />
                    </div>
                    <div className="job-salery">
                      <Skeleton height={20} width={100} />
                    </div>
                  </div>
                  <div className="job-qualification">
                    <Skeleton height={20} width="560px" />
                  </div>
                  <div className="job-skills">
                    <Skeleton height={20} width={300} />
                  </div>
                  <div className="job-posted-time">
                    <Skeleton height={20} width={100} />
                  </div>
                  <div className="job-apply-button">
                    <Skeleton height={40} width={120} />
                  </div>
                </div>
              ))
            ) : (
              filteredJobOpenings.length > 0 ? (
                filteredJobOpenings.map(job => (
                  <div className="job-card" key={job.id}>
                    <h2 className="job-title">{job.title}</h2>
                    <h3 className='job-category'>{job.category}</h3>
                    <p className='job-region'>{job.region}</p>
                    <div className="job-exp-salery">
                      <div className="job-exp">
                        <i className="fa-solid fa-briefcase"></i>
                        <span>{job.experience}</span>
                      </div>
                      <div className="job-salery">
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        <div className="salery">
                          <div className="starting-salery">{job.startingSalary}</div>
                          -
                          <div className="ending-salery">{job.endingSalary}</div>
                        </div>
                      </div>
                    </div>
                    <div className="job-qualification">
                      <i className="fa-solid fa-file-lines"></i>
                      <p>{job.qualification}</p>
                    </div>
                    <div className="job-skills">
                      <p>{job.skills}</p>
                    </div>
                    <div className="job-posted-time">
                      <span>{job.postedTime}</span>
                    </div>
                    <div className="job-apply-button">
                      <button>Apply Now</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-data-message">No Data Found!</p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default OppeningJobsComp;
