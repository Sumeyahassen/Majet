function Input({ value }) {
  return (
    <div className=" bg-gray-100 py-32 px-32 mx-auto justify-between border-black border-[15px] rounded-t-3xl max-w-sm">
      <input
        type="text"
        id="inputField"
        readOnly
        value={""}
        required
        placeholder="Hi"
        className="bg-yellow-50 focus:outline-none border-none w-full rounded-2xl py-5 placeholder:text-center"
        size={100}
      />
    </div>
  );
  d;
}

export default Input;
