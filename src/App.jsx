import React from 'react'
import Card from './components/card' 

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "Research Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$120/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "3 weeks ago",
      post: "Autopilot Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "1 week ago",
      post: "GPU Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      datePosted: "2 weeks ago",
      post: "AI Research Scientist",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "New York, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/samsung.com",
      companyName: "Samsung Research",
      datePosted: "9 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Seoul, South Korea"
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      companyName: "Intel",
      datePosted: "3 weeks ago",
      post: "Chip Design Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Portland, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/linkedin.com",
      companyName: "LinkedIn",
      datePosted: "5 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Sunnyvale, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "12 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Stockholm, Sweden"
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "7 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/atlassian.com",
      companyName: "Atlassian",
      datePosted: "3 weeks ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hr",
      location: "Sydney, Australia"
    },
    {
      brandLogo: "https://logo.clearbit.com/stripe.com",
      companyName: "Stripe",
      datePosted: "4 days ago",
      post: "Software Engineer (Payments)",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Dublin, Ireland"
    },
    {
      brandLogo: "https://logo.clearbit.com/tiktok.com",
      companyName: "TikTok",
      datePosted: "6 days ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hr",
      location: "Singapore"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}> 
          <Card brandLogo={elem.brandLogo} company={elem.companyName} post={elem.post} datePosted={elem.datePosted} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2}/>
        </div>
        })}
    </div>
  )
}

export default App