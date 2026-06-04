const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-[#525252] text-white">
      <div className="flex items-center justify-center px-4 py-4">
        <p className="text-center text-[15px]">
          Copyright © {year} AAloka. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
