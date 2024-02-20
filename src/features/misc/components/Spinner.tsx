export const Spinner = () => {
  return (
    <div className="h-32 w-32">
      <div className="trinity-rings-spinner relative flex justify-center items-center w-full h-full p-0.5 overflow-hidden">
        <div
          className="
      circle
      absolute
      block
      rounded-1/2
      border-solid
      border-red-500
      border-opacity-100
      border-[3px]
      h-[100%]
      w-[100%]
      "
        />
        <div
          className="circle
      absolute
      block
      rounded-1/2
      border-solid
      border-red-500
      border-opacity-100
      border-[2px]
      h-[calc(100%_*_0.65)]
      w-[calc(100%_*_0.65)]
      "
        />
        <div
          className="circle
      absolute
      block
      rounded-1/2
      border-solid
      border-red-500
      border-opacity-100
      h-[calc(100%_*_0.1)]
      w-[calc(100%_*_0.1)]
      border-[1px]"
        />
      </div>
    </div>
  );
};
