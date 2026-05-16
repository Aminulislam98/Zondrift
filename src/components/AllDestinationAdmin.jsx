import Image from "next/image";
import Link from "next/link";
import { FiEdit2, FiMapPin, FiStar, FiTrash2 } from "react-icons/fi";
import { DeleteDestination } from "./buttons/DeleteDestination";

const DestinationAdminCard = ({ dest }) => {
  return (
    <>
      {/* ── Desktop — matches header grid exactly ── */}
      {/* header: grid-cols-[64px_1fr_120px_100px_100px_120px] gap-4 px-4 */}
      <div className="hidden md:grid grid-cols-[64px_1fr_120px_100px_100px_120px] gap-4 px-4 py-3.5 hover:bg-black/[0.02] transition-colors group">
        {/* Photo — 64px */}
        <div className="relative w-[64px] h-11 shrink-0 overflow-hidden bg-black/[0.05]">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            quality={70}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Destination — 1fr */}
        <div className="flex flex-col gap-0.5 min-w-0 justify-center">
          <span className="text-[13.5px] font-medium text-black tracking-[-0.02em] truncate">
            {dest.name}
          </span>
          <div className="flex items-center gap-1.5">
            <FiMapPin className="w-3 h-3 text-[#ccc] shrink-0" />
            <span className="text-[12px] text-[#999] tracking-[-0.01em]">
              {dest.country}
            </span>
          </div>
        </div>

        {/* Category — 120px */}
        <div className="flex items-center">
          <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#999] bg-black/[0.04] px-2 py-0.5 whitespace-nowrap">
            {dest.category}
          </span>
        </div>

        {/* Price — 100px */}
        <div className="flex items-center">
          <span className="text-[13.5px] font-medium text-black tracking-[-0.02em] whitespace-nowrap">
            ${dest.price.toLocaleString()}
          </span>
        </div>

        {/* Rating — 100px */}
        <div className="flex items-center gap-1.5">
          <FiStar className="w-3 h-3 text-[#999]" />
          <span className="text-[13px] text-[#999] tracking-[-0.01em]">
            {dest.rating}
          </span>
        </div>

        {/* Actions — 120px */}
        <div className="flex flex-col items-center justify-end gap-1.5">
          <Link
            href={`/admin/edit-destination/${dest._id}`}
            className="flex items-center justify-center gap-1.5 text-[12px] text-[#555] tracking-[-0.01em] border border-black/10 w-full py-2 hover:border-black/25 hover:text-black transition-all whitespace-nowrap"
          >
            <FiEdit2 className="w-3 h-3" />
            Edit
          </Link>
          <DeleteDestination dest={dest} />
        </div>
      </div>

      {/* ── Mobile — simple clean row ── */}
      <div className="md:hidden flex items-center gap-3 px-4 py-3.5 hover:bg-black/[0.02] transition-colors group">
        {/* Thumbnail */}
        <div className="relative w-12 h-10 shrink-0 overflow-hidden bg-black/[0.05]">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            quality={70}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Name + meta */}
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <span className="text-[13.5px] font-medium text-black tracking-[-0.02em] truncate">
            {dest.name}
          </span>
          <div className="flex items-center gap-1.5">
            <FiMapPin className="w-3 h-3 text-[#ccc] shrink-0" />
            <span className="text-[12px] text-[#999]">{dest.country}</span>
            <span className="text-[#e8e8e8]">·</span>
            {/* <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#999] bg-black/[0.04] px-1.5 py-0.5 whitespace-nowrap">
              {dest.category}
            </span> */}
          </div>
        </div>

        {/* Price */}
        <span className="text-[13px] font-medium text-black tracking-[-0.02em] whitespace-nowrap shrink-0">
          ${dest.price.toLocaleString()}
        </span>

        {/* Actions */}
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <Link
            href={`/admin/edit-destination/${dest._id}`}
            className="flex items-center  justify-center
             gap-1 text-[12px] text-[#555] border border-black/[0.1] w-full py-1.5 hover:text-black transition-all"
          >
            <FiEdit2 className="w-3 h-3" />
            Edit
          </Link>
          <DeleteDestination dest={dest} />
        </div>
      </div>
    </>
  );
};

export default DestinationAdminCard;
