import Image from "next/image";
import React from "react";

const Form = ({
  handleChange,
  submitData,
  optionForm,
  submitting,
  isLoading,
  handleTabClick,
  activeTab,
}: any) => {
  return (
    <section className="w-full max-container padding-x py-5 flex items-center justify-center flex-col">
      <form
        onSubmit={submitData}
        className="flex flex-col w-full px-5 md:px-10 py-5 gap-4 border shadow-xl rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {isLoading ? (
            <>
              <input
                className="hidden"
                id=""
                type="radio"
                name="service"
                value=""
                onChange={handleChange}
              />
              <label
                className="flex items-center  w-full justify-between p-2 border rounded-lg border-gray-400 cursor-pointer"
                htmlFor="">
                <span className="text-xs font-semibold uppercase">
                  Paket Pilihan
                </span>
                <Image
                  src="/icon/analisa.svg"
                  width={25}
                  height={25}
                  alt="icon"
                  className="bg-slate-700 rounded-lg"
                />
              </label>
              <input
                className="hidden"
                id=""
                type="radio"
                name="service"
                value=""
                onChange={handleChange}
              />
              <label
                className="flex items-center  w-full justify-between p-2 border rounded-lg  border-gray-400 cursor-pointer"
                htmlFor="">
                <span className="text-xs font-semibold uppercase">
                  Paket Pilihan
                </span>
                <Image
                  src="/icon/analisa.svg"
                  width={25}
                  height={25}
                  alt="icon"
                  className="bg-slate-700 rounded-lg"
                />
              </label>
              <input
                className="hidden"
                id=""
                type="radio"
                name="service"
                value=""
                onChange={handleChange}
              />
              <label
                className="flex items-center  w-full justify-between p-2 border rounded-lg border-gray-400 cursor-pointer"
                htmlFor="">
                <span className="text-xs font-semibold uppercase">
                  Paket Pilihan
                </span>
                <Image
                  src="/icon/analisa.svg"
                  width={25}
                  height={25}
                  alt="icon"
                  className="bg-slate-700 rounded-lg"
                />
              </label>
            </>
          ) : (
            optionForm.category.map((val: any, index: any) => (
              <div key={index}>
                <input
                  className="hidden checked:border-blue-light"
                  id={val.id}
                  type="radio"
                  name="service"
                  value={val.title}
                  onChange={handleChange}
                  onClick={() => {
                    handleTabClick(val.id);
                  }}
                />
                <label
                  className="flex items-center  w-full justify-between p-2 border rounded-lg border-gray-400 cursor-pointer"
                  htmlFor={val.id}>
                  <span className="text-xs font-semibold uppercase">
                    {isLoading ? "waiting" : val.title}
                  </span>
                  <Image
                    src="/icon/analisa.svg"
                    width={25}
                    height={25}
                    alt="icon"
                    className="bg-slate-700 rounded-lg"
                  />
                </label>
              </div>
            ))
          )}
        </div>
        {/* Select Option */}
        <select
          className="border-gray-400 border py-3 px-5 rounded-lg cursor-pointer focus-within:border-blue-light active:border-blue-light"
          name="package"
          id="package"
          onChange={handleChange}>
          <option>Sub Paket</option>
          {isLoading
            ? null
            : optionForm.sub_category.map((val: any, index: any) => (
                <React.Fragment key={index}>
                  {activeTab === val.category_id && (
                    <option key={index} value={val.title}>
                      {val.title}
                    </option>
                  )}
                </React.Fragment>
              ))}
        </select>
        {/* Nama dan Email */}
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-4 md:gap-20">
          {/* Nama */}
          <div className="flex flex-col w-full">
            <label className="font-bold" htmlFor="nama">
              Nama
            </label>
            <input
              placeholder="Nama"
              className="border border-gray py-3 px-5 rounded-lg focus:border-blue-light focus:outline-none disabled:border-slate-200  focus: focus:invalid:ring-red-600"
              type="text"
              name="nama"
              id="nama"
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="flex flex-col w-full">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              placeholder="example@email.com"
              className="border border-gray py-3 px-5 rounded-lg focus:border-blue-light focus:outline-none "
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Jurusan */}
        <div className="flex flex-col w-full">
          <label className="font-bold" htmlFor="jurusan">
            Jurusan
          </label>
          <input
            placeholder="Jurusan Teknologi Informatika"
            className="border border-gray py-3 px-5 rounded-lg focus:border-blue-light focus:outline-none "
            type="text"
            name="jurusan"
            id="jurusan"
            required
            onChange={handleChange}
          />
        </div>
        {/* Whatsapp */}
        <div className="flex flex-col w-full">
          <label className="font-bold" htmlFor="whatsapp">
            Whatsapp
          </label>
          <input
            placeholder="08xx-xxxx-xxxx"
            className="border border-gray py-3 px-5 rounded-lg focus:border-blue-light focus:outline-none "
            type="text"
            name="whatsapp"
            id="whatsapp"
            required
            onChange={handleChange}
          />
        </div>
        {/* Deadline */}
        <div className="flex flex-col w-full">
          <label className="font-bold" htmlFor="deadline">
            Deadline
          </label>
          <input
            className="border border-gray py-3 px-5 rounded-lg block focus:border-blue-light focus:outline-none "
            type="date"
            name="deadline"
            id="deadline"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold" htmlFor="catatan">
            Pesan
          </label>
          <textarea
            className="border border-gray py-3 px-5 rounded-lg block focus:border-blue-light focus:outline-none s"
            name="catatan"
            id="catatan"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="flex self-end justify-between w-fit text-white py-1.5 px-4 gap-2 bg-blue-light rounded-full hover:scale-95 transition-all ease-lineart duration-300">
          <span>{submitting ? "Submitting..." : "Submit"}</span>
          <Image src="/send.png" width={24} height={24} alt="icon" />
        </button>
      </form>
    </section>
  );
};

export default Form;
