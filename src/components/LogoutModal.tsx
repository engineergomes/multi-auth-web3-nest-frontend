import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ArrowLeft from "@/assets/ArrowLeft";

interface LogoutModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	onLogout: () => {};
}

function LogoutModal({ isOpen, setIsOpen, onLogout }: LogoutModalProps) {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
									<div className="flex flex-col gap-y-4 w-full px-8 pb-10 pt-6 overflow-hidden text-left align-middle transition-all transform bg-[#1c1c1c] shadow-xl rounded-2xl ">
										<button
											className="flex mt-4 font-medium text-[#afafaf] fill-[#afafaf] stroke-[#afafaf] text-xs focus:outline-none items-center justify-center gap-2 hover:text-[#afafaf]/70 hover:fill-[#afafaf]/70 hover:stroke-[#afafaf]/70"
											onClick={() => setIsOpen(false)}
										>
											<ArrowLeft /> Go Back
										</button>

										<h2 className="font-[Avenir] font-bold text-center text-lg mt-2">
											Are you sure you want to logout?
										</h2>

										<div className="font-[Avenir] flex gap-x-5">
											<button
												className="bg-[#434343] hover:bg-[#434343]/70 w-full pb-3 pt-4 px-12 rounded-lg  flex items-center justify-center"
												onClick={() => onLogout()}
											>
												Yes
											</button>
											<button
												className="bg-[#434343] hover:bg-[#434343]/70 w-full pb-3 pt-4 px-12 rounded-lg  flex items-center justify-center"
												onClick={() => setIsOpen(false)}
											>
												No
											</button>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default LogoutModal;
