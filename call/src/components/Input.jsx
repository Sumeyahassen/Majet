function Input({ value }) {
  return (
    <div className=" bg-gray-100 py-32 px-32 mx-auto items-center justify-between border-black border-[15px] rounded-t-3xl max-w-sm">
      <input
        type="text"
        id="inputField"
        readOnly
        value={""}
        required
        placeholder="ሰላም"
        className="bg-gray-50 focus:outline-none  px-5 py-2 border-none w-full rounded-md placeholder:text-center placeholder:font-bold "
      />
    </div>
  );
  d;
}

export default Input;
