"use client";

import Form from "@components/Form";
import { steps } from "@constant";
import { getOptionform } from "@utils/helper";
import Image from "next/image";
import { useState, useEffect } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Offering() {
  const [inputData, setInputData] = useState({
    package: "",
    service: "",
    nama: "",
    email: "",
    jurusan: "",
    whatsapp: "",
    deadline: "",
    catatan: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [optionForm, setOptionForm] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  const getOption = async () => {
    const option = await getOptionform();
    const { data } = option;
    setOptionForm(data);
    setIsloading(false);
  };
  useEffect(() => {
    getOption();
  }, []);

  const handleChange = (e: any) => {
    if (e.target.name === "deadline") {
      setInputData({
        ...inputData,
        deadline: moment(e.target.value).format("YYYY-MM-DD"),
      });
    }
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitData = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("service", `${inputData.service} | ${inputData.package}`);
      formData.append("nama", inputData.nama);
      formData.append("email", inputData.email);
      formData.append("jurusan", inputData.jurusan);
      formData.append("whatsapp", inputData.whatsapp);
      formData.append("deadline", inputData.deadline);
      formData.append("catatan", inputData.catatan);
      const response = await fetch(
        `${process.env.ENDPOINT}${process.env.POST_FORM}${process.env.KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        toast.success("Data sudah dikirim!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Terjadi kesalahan!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="flex flex-col max-container">
        <div className="flex flex-col md:flex-row items-center justify-between padding-x pt-5 md:pt-10">
          <div className="md:text-start text-center flex flex-col w-full max-w-[400px]">
            <p className="desc_text text-blue-light">Warung Tugas & Skripsi</p>
            <h1 className="head_text">Layanan Kami</h1>
            <p className="head_subtext">
              Lihat berbagai layanan yang kami sediakan untuk masa depan kamu
            </p>
          </div>
          <Image
            src="/customer-offering.png"
            alt="hero-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[250px]"
          />
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center padding-x pb-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex gap-4 border rounded-xl shadow-xl w-full max-w-md px-6 py-3">
              <p className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white bg-blue-light">
                {step.id}
              </p>
              <div className="flex flex-col">
                <p className="font-bold">{step.title}</p>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Form
          handleChange={handleChange}
          submitData={submitData}
          optionForm={optionForm}
          submitting={submitting}
          isLoading={isLoading}
          handleTabClick={handleTabClick}
          activeTab={activeTab}
        />
        <ToastContainer />
      </section>
    </>
  );
}
