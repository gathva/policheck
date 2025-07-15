
import React from 'react';

const ModelIaAnaliticalPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">AI Models and Analytical Methods</p>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              PoliCheck employs a suite of advanced AI models and analytical methods to provide users with comprehensive insights into the veracity of political information. Our
              approach integrates multiple layers of analysis, ensuring a robust and nuanced assessment of each piece of content. Below, we detail the key components of our
              analytical framework.
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Core AI Models</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our platform leverages several state-of-the-art AI models, each specializing in a different aspect of information analysis. These models work in concert to deliver a
              holistic evaluation of the content.
            </p>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="FileText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Fact Extraction Model</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  This model focuses on identifying factual claims within a text and assessing their verifiability. It uses natural language processing (NLP) techniques to parse
                  sentences and extract statements that can be checked against reliable sources.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Source Reliability Model</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  The Source Reliability Model evaluates the credibility of the sources cited in a text. It considers factors such as the source's reputation, history of accuracy,
                  and potential biases to assign a reliability score.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div
                className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                data-icon="PresentationChart"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Argument Analysis Model</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  This model analyzes the logical consistency and coherence of the arguments presented in a text. It identifies fallacies, contradictions, and other logical flaws
                  that may undermine the validity of the claims.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="Eye" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Bias Detection Model</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  The Bias Detection Model assesses the presence of subjective language, emotional appeals, and other indicators of bias in a text. It helps users understand how
                  the presentation of information may influence their perception.
                </p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Integration and Workflow</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              The AI models are integrated into a seamless workflow that processes information in several stages. This multi-stage approach ensures that each aspect of the content
              is thoroughly examined.
            </p>
            <div className="flex w-full grow bg-white @container py-3">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdIekj63pmIFydVB3QpiCUo3n6ZnijalqZaJYKZh8hi8RJ3_qLI8GUF213Kv0SZcDd-hIYXSpjOc2skPuj879mT8HfLGsEoovANC22UDy2Ph6qs8kgb25Tp-z2yy9dSE_h9Ul_5DhnRn_UEeS1ddpEyzzMVQXSCcGQi_omOgHu90M_1kU4tVvJRdPZaFPH02mNHqsnVTiXRSarxd_ZBpTo98p76F8E0hTr6ta7ZyLxQQsC8yflzS8Su-BO9q8iyCzaWCJR3jnM-bhc")'}}
                ></div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Assessment Criteria</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              PoliCheck uses a set of well-defined criteria to assess the information. These criteria are designed to provide a clear and consistent framework for evaluating the
              content's accuracy and reliability.
            </p>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="Check" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Factual Accuracy</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  The extent to which the claims in the text are supported by credible evidence. This includes verifying facts against reliable sources and assessing the strength
                  of the evidence.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="Shield" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56l160,0Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Source Reliability</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  The reliability and trustworthiness of the sources cited in the text. This involves evaluating the source's reputation, history of accuracy, and potential biases.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="ListChecks" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Logical Coherence</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  The logical consistency and coherence of the arguments presented in the text. This includes identifying fallacies, contradictions, and other logical flaws.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="Eye" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Bias Assessment</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  The presence of bias, subjective language, or emotional appeals that may influence the reader's perception. This involves identifying indicators of bias and
                  assessing their potential impact.
                </p>
              </div>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              By combining these AI models and assessment criteria, PoliCheck provides users with a comprehensive and transparent analysis of political information, empowering them
              to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelIaAnaliticalPage;
