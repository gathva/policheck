
import React from 'react';

const AnalisisPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Analysis Results</p></div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f0f2f4]">
                <p className="text-[#111418] text-base font-medium leading-normal">Veracity Score</p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">75%</p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Bias Analysis</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#dce0e5] p-6">
                <p className="text-[#111418] text-base font-medium leading-normal">Bias Distribution</p>
                <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                  <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">Left</p>
                  <div className="h-full flex-1"><div className="border-[#637588] bg-[#f0f2f4] border-r-2 h-full" style={{width: '90%'}}></div></div>
                  <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">Center</p>
                  <div className="h-full flex-1"><div className="border-[#637588] bg-[#f0f2f4] border-r-2 h-full" style={{width: '100%'}}></div></div>
                  <p className="text-[#637588] text-[13px] font-bold leading-normal tracking-[0.015em]">Right</p>
                  <div className="h-full flex-1"><div className="border-[#637588] bg-[#f0f2f4] border-r-2 h-full" style={{width: '0%'}}></div></div>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Logical Fallacies</h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dce0e5] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Fallacy</th>
                      <th className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Ad Hominem
                      </td>
                      <td className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Attacking the person instead of the argument.
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Straw Man
                      </td>
                      <td className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Misrepresenting an opponent's argument.
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        False Dilemma
                      </td>
                      <td className="table-cca99468-61cc-4762-964d-f1543c8ceaed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        Presenting only two options when more exist.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Model Comparison</h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dce0e5] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Model</th>
                      <th className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Veracity Score
                      </th>
                      <th className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-360 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Bias</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">Model A</td>
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">70%</td>
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">Center</td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">Model B</td>
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">80%</td>
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">Left</td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">Model C</td>
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">75%</td>
                      <td className="table-7612f08b-c4c7-4ddc-9218-cbba6f0e3c1e-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">Center</td>
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

export default AnalisisPage;
