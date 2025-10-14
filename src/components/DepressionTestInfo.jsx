import React from 'react';
import MinimalIcon from "../assets/TestInfoIcons/minimal.png"
import MildIcon from "../assets//TestInfoIcons/Mild.png"
import Moderate from "../assets//TestInfoIcons/Moderate.png"
import Moderately_severe from "../assets//TestInfoIcons/Moderately_severe.png"
import Severe from "../assets/TestInfoIcons/Severe.png"

const TestInfo = () => {
  return (
    <>
      <div className='mt-10'>
        <div className="flex flex-col gap-6 p-2 lg:p-20">
        <p className="font-semibold text-3xl">How Does It Work ?</p>
        <p className='text-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-50 rounded-md p-4 text-justify text-gray-700'>
          A Patient Health Questionnaire (PHQ) score is calculated by summing the responses to its questions, 
          resulting in a total score ranging from 0 to 27. These scores are categorized to assess the severity 
          of depression as follows: minimal (0–4), mild (5–9), moderate (10–14), moderately severe (15–19), 
          and severe (20–27). A score of 5 or higher indicates symptoms that may warrant further clinical 
          evaluation and possible treatment, with higher scores suggesting a greater need for intervention. 
          Importantly, a “yes” response to the ninth question—regarding suicidal thoughts—requires immediate 
          risk assessment by a qualified clinician.
        </p>
        </div>
        <div className='flex flex-wrap justify-center lg:justify-between mt-10 lg:mt-0 items-center px-2 lg:px-60'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-25 lg:w-30 h-auto' src={MinimalIcon} alt="emojiIcon" />
                <p className='flex '>Minimal</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-25 lg:w-30 h-auto' src={MildIcon} alt="emojiIcon" />
                <p className='flex '>Mild</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-25 lg:w-30 h-auto' src={Moderate} alt="emojiIcon" />
                <p className='flex '>Moderate</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-25 lg:w-30 h-auto' src={Moderately_severe} alt="emojiIcon" />
                <p className='flex '>Moderately Severe</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-25 lg:w-30 h-auto' src={Severe} alt="emojiIcon" />
                <p className='flex '>Severe</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default TestInfo;
