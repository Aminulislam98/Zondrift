"use client";
import Image from "next/image";
import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteDestination({ dest }) {
  const router = useRouter();
  const handleDelete = async (dest) => {
    const res = await fetch(`http://localhost:4000/destination/${dest._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(`${dest.name} deleted successfully`);
      router.refresh();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <AlertDialog>
      {/* Trigger */}
      <Button className="flex items-center gap-1 text-[12px] text-[#636366] border border-black/[0.1] px-2.5 py-1.5 rounded-lg hover:border-black/20 hover:text-red-500 bg-white transition-all w-full">
        <FiTrash2 className="w-3.5 h-3.5" />
        Delete
      </Button>

      {/* Dialog */}
      <AlertDialog.Backdrop className="bg-black/30 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-white border border-black/[0.1] rounded-none shadow-[0_24px_64px_rgba(0,0,0,0.12)] max-w-[400px] w-full p-0 overflow-hidden">
            <AlertDialog.CloseTrigger className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-[#aaa] hover:text-black transition-colors" />

            {/* Header */}
            <div className="px-6 pt-8 pb-5 border-b border-black/[0.06]">
              <div className="w-10 h-10 border border-red-100 bg-red-50 flex items-center justify-center mb-4">
                <FiTrash2 className="w-4 h-4 text-red-500" />
              </div>
              <AlertDialog.Heading className="text-[17px] font-medium text-black tracking-[-0.03em] mb-1">
                Delete destination?
              </AlertDialog.Heading>
              <AlertDialog.Body>
                <p className="text-[13.5px] text-[#888] tracking-[-0.01em] leading-relaxed">
                  This will permanently delete this destination and all its
                  data. This action{" "}
                  <span className="text-black font-medium">
                    cannot be undone.
                  </span>
                </p>
              </AlertDialog.Body>
            </div>

            {/* Destination preview */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-black/[0.06] bg-black/[0.01]">
              <div className="relative w-14 h-10 shrink-0 overflow-hidden bg-black/[0.05]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  quality={70}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[13.5px] font-medium text-black tracking-[-0.02em]">
                  {dest.name}
                </p>
                <p className="text-[12px] text-[#aaa] tracking-[-0.01em]">
                  {dest.country} · {dest.category}
                </p>
              </div>
            </div>

            {/* Footer */}
            <AlertDialog.Footer className="flex items-center justify-end gap-2 px-6 py-4">
              <Button
                slot="close"
                className="min-w-0 h-auto min-h-0 rounded-none bg-white text-[13px] text-[#555] tracking-[-0.01em] border border-black/[0.12] px-5 py-2.5 hover:border-black/25 hover:text-black transition-all"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(dest)}
                slot="close"
                className="min-w-0 h-auto min-h-0 rounded-none bg-black text-[13px] text-white font-medium tracking-[-0.01em] px-5 py-2.5 hover:bg-red-500 transition-all"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
