import Image from "next/image";

function SidebarRow({ Icon, src, title }) {
  return (
    <div className="flex items-center mb-4 p-4 cursor-pointer hover:bg-gray-200 rounded-xl">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={20}
          height={20}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500 " />}
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  );
}

export default SidebarRow;
