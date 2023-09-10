import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - Present</h3>
            <p className="timeline-company text-uppercase">frontend developer | freelance</p>
            <p>● Performed several projects using markup languages;<br/>● Mastered writing structure code in a concise, logical and readable manner;<br/>● Utilized a variety of markup languages to write web pages;<br/>● Insured web-design is optimized for smartphones</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-Present</h3>
            <p className="timeline-company">SENIOR CONSULTANT | PwC</p>
            <p>● Collected and analyzed technical and financial data to perform appraisal of capital assets and prepare valuation reports;<br/>● Applied Microsoft’s programming language VBA to build and perform assets value estimations;<br/>● Reviewed third party valuation reports to identify potential misstatements and other issues</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2019</h3>
            <p className="timeline-company text-uppercase">data analyst | erg</p>
            <p>● Developed Web Portal (web app built on Microsoft SharePoint platform) along with the IT Team which reduced the time needed for data processing by 50% and validation from 2 to 1 week;<br/>● Analyzed data from 30 active users and used outputs to develop and implement math check algorithms into Web Portal;<br/>● Established long-term and value-added relationship with colleagues from technical and financial departments to integrate Web Portal into day-to-day business operations of the company;<br/>● Assisted in monthly updates of the corporate cash flow model which included 9 cash generating units in 3 countries</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2016</h3>
            <p className="timeline-company text-uppercase">senior consultant | kpmg</p>
            <p>● Performed over 10 projects in valuation of capital equipment;<br/>● Reviewed third party valuation reports to identify potential misstatements and other issues</p>
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  )
}

export default Experience; 