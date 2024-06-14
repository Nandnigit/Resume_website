import React from 'react';
import Resume_Guide_Detail from './Resume_guide_Detail';

function Course(props) {
  const course =[
    
    {
        img:"https://cdn.create.microsoft.com/catalog-assets/en-us/d68df550-2dce-4601-ac59-22b431043ee8/thumbnails/616/social-media-marketing-resume-blue-modern-simple-1-1-ec5f2f560fde.webp",title:"Social Media Marketer Resume"
    },
    { img:"https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",title:"Academic Resume"},
    { img:"https://d25zcttzf44i59.cloudfront.net/official-resume-template.png",title:"Freelance Writer Resume Examples and Guide"},
    { img:"https://d.novoresume.com/images/doc/skill-based-resume-template.png",title:"Sales Associate Resume"},
    { img:"https://cdn-images.resumelab.com/pages/free_templates_zety_us_professional_templates_5.jpg",title:"Investigator Resume"},
    { img:"https://www.myperfectresume.com/wp-content/uploads/2024/03/resume-template-professional.svg",title:"Professional Resume"},
    { img:"https://cdn-images.zety.com/pages/high_school_resume_templates_4.jpg",title:"Fresher Resume"},
    { img:"https://piktochart.com/wp-content/uploads/2023/02/large-97-600x848.jpg",title:"Business Accountant Resume"},
    { img:"https://cdn-images.zety.com/images/zety/landings/templates/general-resume-template@3x.jpg",title:"Business Analyst Resume"},
    { img:"https://www.jobhero.com/resources/wp-content/uploads/2023/07/tutor-template-resume-JH.svg",title:"Senior Associate Resume"},
    { img:"https://cdn-blog.novoresume.com/articles/resume-certifications/Certified-Medical-Assistant-Resume-Example.png",title:"Software Developer Resume"},
    { img:"https://piktochart.com/wp-content/uploads/2023/02/large-9-600x848.jpg",title:"Interior Designer Resume"},
    
    
  ];
  return (
    <>
      <Resume_Guide_Detail course={course} id='course' />
    </>
  )
}

export default Course
