import React from "react";

const Loading: React.FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col">
        <div className="flex space-x-24">
          <div className="container space-y-10 relative">
            <div className="container space-y-10 relative">
              <div className="flex flex-col">
                <div className="flex flex-row space-x-4">
                  <div
                    className="w-12 h-12 rounded-full animate-spin
                    border-4 border-dashed border-green-500 border-t-transparent"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
