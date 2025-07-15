
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6JUWIxHuOlTUKmdU1x7goarvTaVYC1Vpo97UGxkqKOYCz_9JfFYhFs97nfo05Xo92F7R23M0gxDPit6sNDxREzioFiD_Xq_pRB_4GRgun45YjJJQNIfcYUgy9aOAE2kynHGU7x-vArkZI7cjJ34ZSPrnnLEQuzsl_IXjs0wF7ljyabEnRgCFwFuqvpysXydz7W3pTY_MoPjXWvspaS9kOkehIIc176vy2ZWvnOahXWheNUGuHVa94RXYErJCU6qyXfTbtxVxpxbgs")'}}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Verify the Truth in Politics
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Analyze statements, articles, and social media posts to uncover the facts behind political discourse.
                    </h2>
                  </div>
                  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                      <div
                        className="text-[#637588] flex border border-[#dce0e5] bg-white items-center justify-center pl-[15px] rounded-l-lg border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Enter text or URL to analyze"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-full placeholder:text-[#637588] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        defaultValue=""
                      />
                      <div className="flex items-center justify-center rounded-r-lg border-l-0 border border-[#dce0e5] bg-white pr-[7px]">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#197fe5] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span className="truncate">Analyze</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Politician Rankings</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBy5x6saRu8UbaaVLRomq-pTBYvZ0iaMPrp-913d2JZCQ1oFvFQSIqrusoFzpCLIocOozk9019KJb8trvecdcH1Z_MCSt3l804g8HkMKYJwCJnAPgHcmdBz93QSJhoi2tIJiEsNpnb5G8FLhjhuqrBFyZr_n3swcyt23skf-7aJxGV2kOUOXNwwFlNjPLGi1NLIil7EXcxaXr4z2Xvlk4oF_e1BkiC6J5HZYK6HzTrsU6WPIDE5dCESkwWz39QTPohdXJDY5HaqrL-g")'}}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">Rep. Alex Thompson</p>
                    <p className="text-[#637588] text-sm font-normal leading-normal">85% Truthfulness</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDATd8ibcTIMZEjV4-DpPfSDPNfnFdPwh9MTBU2cWraUSRcIQFr87diyatgEL27ZYb_grhhAsc6CIjhQfxDQnrFFcwmei05U6896v31-U8fr7igEVe5IGQQtUUCShmCoiCiW3jtacp38wWH3Q39wYl_ZzyhbvJ--JHwV3BtdXiHg-FB4zaxRCDfnVo-kJi2HyhLqGhHK4UjMVNgA46DJk_eUacTY0GRcRXMIXJUkF-OGKNfvruqMYP-UGEk0FNG2ZufBJPJEI8ovs-a")'}}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">Sen. Olivia Carter</p>
                    <p className="text-[#637588] text-sm font-normal leading-normal">78% Truthfulness</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZqofeGQoVtNIf4aknuuVKovACUStFfz9rO-6oMjuz5ew8GpkSYeHjc2lPcY-Ss8JJi3JUMrfaZoxs9UKzTTtG1jWLOtglEdbUTe3UReR8AGzsznvOOpHOMJzPfeAn7imV5k8VPEEQghTvxwpxMzFnV-OVcOK23iQLdx1DcY9E25YPyKtAVlND2qIwI4jbBEjjXcaehQ3Y_nlMhQyOZyB0wyfE07t5Cym_Q2SkTgwRPo5XRnCGWlmw8lrKl95bBwEWK-foIQ9kfFSj")'}}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">Gov. Marcus Evans</p>
                    <p className="text-[#637588] text-sm font-normal leading-normal">65% Truthfulness</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Trending Topics</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Healthcare Reform</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Climate Change Policies</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Economic Stimulus</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Immigration Debate</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Education Funding</p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Community Activity</h2>
            <div className="flex gap-4 bg-white px-4 py-3">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="FileText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal">Recent Submission</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Analysis of recent policy statement by Rep. Thompson</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Submitted by Sarah Miller</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white px-4 py-3">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="FileText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal">Recent Submission</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Fact-check on a social media post about economic policies</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Submitted by David Lee</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white px-4 py-3">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="FileText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal">Recent Submission</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Analysis of a news article on climate change initiatives</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Submitted by Emily Chen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
