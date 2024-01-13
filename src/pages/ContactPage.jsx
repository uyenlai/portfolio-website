import Layout from "../components/Layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <Layout id="#contact" title="Contact">
      <div className="p-10 flex items-center justify-start gap-4 overflow-hidden rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
        <div>
          <FaLocationDot className="text-2xl mr-2" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-teal-500">Address</h3>
          <p className="my-2 rounded-md font-medium text-2xl">
            Lahti, Finland
          </p>
        </div>
      </div>

      <div className="mt-10 p-10 flex items-center justify-start gap-4 overflow-hidden rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
        <div>
          <FaPhoneVolume className="text-2xl mr-2" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-teal-500">Phone number</h3>
          <p className="my-2 rounded-md font-medium text-2xl">
            +(358) 413119700
          </p>
        </div>
      </div>

      <div className="mt-10 p-10 flex items-center justify-start gap-4 overflow-hidden rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
        <div>
          <MdEmail className="text-2xl mr-2" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-teal-500">Email</h3>
          <p className="my-2 rounded-md font-medium text-2xl">
            Uyenlai6@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
}
