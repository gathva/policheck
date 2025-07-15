
import React from 'react';

const PerfilPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALZSUlEQMWqHlIUVgBezMurBgB5z5AdgghQ02t25eVPI8FmHDPNeRhxn45Bz7Z11_gSzqclbGqifh-Ndyznh_gVSMEaaKCAijd8JN-aL9TBJI2R3BzxPX790BgIyYkDQWB8xFCu3gFvxVN-f3tLifP4lEEUrrtQP76Ng3AGKYHS6ldfmZuOFyorXFFNDTh9Vo-7wl5YQ9Sp0sJcy_ZPiRSzonUEQZSUa-1ulzYmyxDQu8Ghkh8OYPppnrN8nXEtGORGh73cx3yIYy-")'}}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Senator Olivia Carter</p>
                    <p className="text-[#637588] text-base font-normal leading-normal">Democrat</p>
                    <p className="text-[#637588] text-base font-normal leading-normal">Average Veracity Score: 85%</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Community Sources</h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dce0e5] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Source</th>
                      <th className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Type</th>
                      <th className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-360 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Submitted By
                      </th>
                      <th className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-480 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Date</th>
                      <th className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-600 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Votes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Article: Senator Carter's Stance on Climate Change
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        News Article
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Ethan Harper
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-480 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-20
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-600 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">125</td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Video: Town Hall Meeting with Senator Carter
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">Video</td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Sophia Bennett
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-480 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-15
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-600 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">98</td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Transcript: Senator Carter's Speech at the Conference
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Transcript
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Liam Foster
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-480 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-10
                      </td>
                      <td className="table-011a0830-cf7a-49c5-bf57-0513e308a957-column-600 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">76</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Analysis History</h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dce0e5] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Statement/Content
                      </th>
                      <th className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Date</th>
                      <th className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-360 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Veracity Score
                      </th>
                      <th className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-480 px-4 py-3 text-left text-[#111418] w-60 text-[#637588] text-sm font-medium leading-normal">
                        Analysis Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Senator Carter's tweet on economic policy
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-25
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">92%</td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-480 h-[72px] px-4 py-2 w-60 text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">
                        View
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Interview on national security
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-22
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">78%</td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-480 h-[72px] px-4 py-2 w-60 text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">
                        View
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Speech at the political convention
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-18
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">88%</td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-480 h-[72px] px-4 py-2 w-60 text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">
                        View
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Press release on healthcare reform
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-12
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">85%</td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-480 h-[72px] px-4 py-2 w-60 text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">
                        View
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Town hall discussion on education
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        2024-07-05
                      </td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">80%</td>
                      <td className="table-47eceeb7-8ed0-47dd-9845-235fa76e77ec-column-480 h-[72px] px-4 py-2 w-60 text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">
                        View
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
