"use client";
import { AlertDialog, Button } from "@heroui/react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export function LogoutConfirmation({ setDropdownOpen }) {
  const router = useRouter();

  const logout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully");
          router.refresh();
        },
      },
    });
  };

  return (
    <AlertDialog>
      {/* Trigger */}
      <Button className="max-w-full w-full min-w-0 text-left px-3 py-2 text-[13px] text-[#999] rounded-xl hover:bg-black/[0.04] transition-colors bg-white">
        <FiLogOut className="w-3.5 h-3.5" />
        Log out
      </Button>

      {/* Dialog */}
      <AlertDialog.Backdrop className="bg-black/30 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-white border border-black/[0.1] rounded-none shadow-[0_24px_64px_rgba(0,0,0,0.12)] max-w-[400px] w-full p-0 overflow-hidden">
            <AlertDialog.CloseTrigger className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-[#aaa] hover:text-black transition-colors" />

            {/* Header */}
            <div className="px-6 pt-8 pb-5 border-b border-black/[0.06]">
              <div className="w-10 h-10 border border-red-100 bg-red-50 flex items-center justify-center mb-4">
                <FiLogOut className="w-4 h-4 text-red-500" />
              </div>
              <AlertDialog.Heading className="text-[17px] font-medium text-black tracking-[-0.03em] mb-1">
                Log out of your account?
              </AlertDialog.Heading>
              <AlertDialog.Body>
                <p className="text-[13.5px] text-[#888] tracking-[-0.01em] leading-relaxed">
                  Are you sure you want to log out? You will need to enter your
                  credentials again to access your dashboard.
                </p>
              </AlertDialog.Body>
            </div>

            {/* Footer */}
            <AlertDialog.Footer className="flex items-center justify-end gap-2 px-6 py-4">
              <Button
                onClick={() => setDropdownOpen(false)}
                slot="close"
                className="min-w-0 h-auto min-h-0 rounded-none bg-white text-[13px] text-[#555] tracking-[-0.01em] border border-black/[0.12] px-5 py-2.5 hover:border-black/25 hover:text-black transition-all"
              >
                Cancel
              </Button>
              <Button
                onClick={() => logout()}
                slot="close"
                className="min-w-0 h-auto min-h-0 rounded-none bg-black text-[13px] text-white font-medium tracking-[-0.01em] px-5 py-2.5 hover:bg-red-500 transition-all"
              >
                Log out
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
