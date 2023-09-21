import Image from "next/image";

const Form = ({
  handleChange,
  submitData,
  optionForm,
  submitting,
  isLoading,
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
                className="flex items-center  w-full justify-between p-2 border-2 rounded-lg border-gray-400 cursor-pointer"
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
                className="flex items-center  w-full justify-between p-2 border-2 rounded-lg border-gray-400 cursor-pointer"
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
                className="flex items-center  w-full justify-between p-2 border-2 rounded-lg border-gray-400 cursor-pointer"
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
                  className="hidden"
                  id={val.id}
                  type="radio"
                  name="service"
                  value={val.title}
                  onChange={handleChange}
                />
                <label
                  className="flex items-center  w-full justify-between p-2 border-2 rounded-lg border-gray-400 cursor-pointer"
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
          className="border-gray-400 border-2 py-3 px-5 rounded-lg cursor-pointer"
          name="package"
          id="package"
          onChange={handleChange}>
          <option>Sub Paket</option>
          {isLoading
            ? null
            : optionForm.sub_category.map((val: any, index: any) => (
                <option key={index} value={val.title}>
                  {val.title}
                </option>
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
              className="border-2 border-gray py-3 px-5 rounded-lg "
              type="text"
              name="nama"
              id="nama"
              required
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="flex flex-col w-full">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              placeholder="email"
              className="border-2 border-gray py-3 px-5 rounded-lg "
              type="text"
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
            placeholder="Jurusan"
            className="border-2 border-gray py-3 px-5 rounded-lg "
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
            placeholder="Whatsapp"
            className="border-2 border-gray py-3 px-5 rounded-lg "
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
            className="border-2 border-gray py-3 px-5 rounded-lg block"
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
            className="border-2 border-gray py-3 px-5 rounded-lg block"
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
