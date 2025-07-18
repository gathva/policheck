import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">About PoliCheck</p></div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              PoliCheck's mission is to empower citizens with the tools and knowledge to navigate the complex landscape of political information. We strive to foster a more
              informed and engaged electorate by providing accessible, reliable, and unbiased analysis of political claims and narratives.
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Vision</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We envision a future where political discourse is grounded in facts and evidence, where misinformation is effectively countered, and where citizens can confidently
              participate in democratic processes. PoliCheck aims to be a leading force in this transformation, setting the standard for accuracy and transparency in political
              information analysis.
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Values</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At PoliCheck, we are guided by the following core values: * **Accuracy:** We are committed to providing precise and verifiable information, ensuring that our analyses
              are based on rigorous research and evidence. * **Objectivity:** We maintain a neutral and unbiased stance, presenting information in a fair and balanced manner, free
              from political influence. * **Transparency:** We are open about our methodologies and sources, allowing users to understand how our analyses are conducted and to
              assess their validity. * **Accessibility:** We strive to make our platform user-friendly and accessible to all, regardless of their technical expertise or background.
              * **Empowerment:** We aim to empower citizens with the knowledge and tools they need to critically evaluate political information and make informed decisions.
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet the Team</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our team comprises experts in political science, data analysis, artificial intelligence, and journalism, united by a shared commitment to combating misinformation and
              promoting informed civic engagement.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcGP_lZboj-NXnbPdwRX_IOpJxr2_d-AOWWMEe7gaMnYGRh8T0OyPTc1VOJgaycbXFkScUfG5LU94eVfVrrFKNlWbPBq-Tql31-nr8UdSdaFXrjkUpMIM1uvmcyHcT8AFljfX0ATlIEkvvAQCL-WptUUgUTwzqWwej-1kz1QS5XlI_2HFEBEBi7wVn2xIBShzn64pwxZhSBTCLOqbKy7EQVB1oPrfDH2hHfMqAIIGPG9WiwY89F4ZZdhxE04-QVDdHQdLkFMfKxjox")'}}
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Dr. Amelia Harper</p>
                  <p className="text-[#637588] text-sm font-normal leading-normal">Lead Political Analyst</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClIBkPWg3Q6aLmJjsfyXP2f9JniB_qybfso39-iQq44F-Q1tQjX52kRZ6eWhY11mDutkWAjVXcRmsFFfGYzz5IN12lw7i-QnuJpwmHcQSJ18cVQeGpfEx9exnZVp2kMP5c_wqm_gTRVr1oFm_0y2r_EE5C7bqrNhLsP75_uFJ5dK1knNuy7l_Ou7lZ8Cz8tfR9p6ediL1_7d1Ts3qSlog6wVt5z8ANj0RzmmeeaGHnHLOHO1ebg_QIS7jY0TzkCpiZ_iV5ONNaE3jL")'}}
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Dr. Ethan Carter</p>
                  <p className="text-[#637588] text-sm font-normal leading-normal">Chief Data Scientist</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmg481PegEvGlETCPTxLslPBbkyDDL6KIEpcmScy6ZVXvfQ3bst1Cx57KoZMPZgN0Kc7_GnQ45SviRBy13eTD1-azgQvH7ZYfEXAe9KKXU2vGbu3IT2lS5gmc2yDFUkfU-ySx1EofwJjnc7U-Fabk9kiJh34vG2GYRl3kMWS4DCT5sJ-K7gxwC8iXfPQBjWtZBp0mAIEGiC58OiYRB0SWYyUznGtiwU4PMWGItIFShUztHd_VyQbn_T4Qz3tH4_6khiashwtW2FIgH")'}}
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Ms. Olivia Bennett</p>
                  <p className="text-[#637588] text-sm font-normal leading-normal">Head of Communications</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGWJPlMCxrQEmnm_TJVwNEOBMBG4Mja6vJ3tZWey_GIUFk5Hw6HO8tU4O9d5co8s_Ctv3q8o7xxHBlvwautXjgzNU0uVjOcNt_WI5oMe3yT7sJw2_EPqBdwSFHmk9jcg6h3qXZ0r5_eyct1x9HcUOv2rhfmA90W5OkDUQbiig-o6RPGLJxcKWQeP7Ta86hB3eOQQz5adOHcgvPWnJrMYXwSPV4iw8UVJCFXH3vECK-d4klIheqVjoIoJwMWf36CH2kHN4boWjyl3Gc")'}}
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Mr. Noah Thompson</p>
                  <p className="text-[#637588] text-sm font-normal leading-normal">Technology Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;