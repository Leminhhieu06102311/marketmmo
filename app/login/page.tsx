
import FormLogin from "./components/FormLogin";
export default async function Login() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-white">
    <div className="flex flex-row max-w-xxs mx-auto items-center h-full lg:m-0 lg:items-stretch truncate lg:h-screen lg:max-w-7xl md:max-w-3xl md:m-auto">
      <section className="hidden lg:w-[450px] lg:grow-0 lg:block  ">
        <div className="lg:h-full lg:flex lg:flex-col lg:justify-between">
          <video
            playsInline
            className="lg:w-full lg:h-full lg:object-cover lg:overflow-clip"
            src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
      <section className="flex flex-col flex-1 overflow-auto w-full  ">
        <div className=" flex justify-center items-center grow m-0 p-0  pt-8  ">
          <FormLogin />
        </div>
      </section>
    </div>
  </div>
  );
}