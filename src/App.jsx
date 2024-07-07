import React from "react";
import { Layout, Card } from "antd";
import { Typography } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const App = () => {
  return (
    <main className="min-h-screen w-full border-black overflow-hidden">
      <div
        className="w-[90%] h-[80vh] border
      m-auto mt-20 max-md:h-auto"
      >
        {/* text section */}
        <section>
          <div className="text-[#121212] flex flex-col justify-center p-4">
            <h1 className="text-2xl font-medium">
              Connect with all applications
            </h1>
            <p className="font-normal text-sm">
              Everything you need in an easy customizable dashboard
            </p>
          </div>
        </section>

        <div className="w-full h-auto grid grid-cols-4 gap-4 p-4 max-md:flex max-md:flex-wrap">
          <Card
            key={1}
            hoverable
            className="w-full h-[24vh] bg-white group hover:bg-sky-300 group:"
          >
            <RightCircleOutlined className="custom-icon" />
            <div className="flex flex-col">
              <img alt="Logo" className="mb-4 group-hover:hidden" />
              <p className="pt-10 text-right group-hover:-translate-y-[8vh] ">Safety Systems</p>
            </div>
          </Card>
          <Card
            key={1}
            hoverable
            className="w-full h-[24vh] bg-white group hover:bg-sky-300 group:"
          >
            <RightCircleOutlined className="custom-icon" />
            <div className="flex flex-col">
              <img alt="Logo" className="mb-4 group-hover:hidden" />
              <p className="pt-10 text-right group-hover:-translate-y-[8vh] ">Safety Systems</p>
            </div>
          </Card>
          <Card
            key={1}
            hoverable
            className="w-full h-[24vh] bg-white group hover:bg-sky-300 group:"
          >
            <RightCircleOutlined className="custom-icon" />
            <div className="flex flex-col">
              <img alt="Logo" className="mb-4 group-hover:hidden" />
              <p className="pt-10 text-right group-hover:-translate-y-[8vh] ">Safety Systems</p>
            </div>
          </Card>
          <Card
            key={1}
            hoverable
            className="w-full h-[24vh] bg-white group hover:bg-sky-300 group:"
          >
            <RightCircleOutlined className="custom-icon" />
            <div className="flex flex-col">
              <img alt="Logo" className="mb-4 group-hover:hidden" />
              <p className="pt-10 text-right group-hover:-translate-y-[8vh] ">Safety Systems</p>
            </div>
          </Card>
          <Card
            key={1}
            hoverable
            className="bg-white group hover:bg-sky-300 group:"
          >
            <RightCircleOutlined className="custom-icon" />
            <div className="flex flex-col">
              <img alt="Logo" className="mb-4 group-hover:hidden" />
              <p className="pt-10 text-right group-hover:-translate-y-[8vh] ">Safety Systems</p>
            </div>
          </Card>

          
        </div>
      </div>
    </main>
  );
};
export default App;
