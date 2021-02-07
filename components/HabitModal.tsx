import { Transition } from '@headlessui/react';
import { FC, useEffect } from 'react';
import Modal from 'react-modal';

interface HabitModal {
    modalOpen: boolean;
    toggleModal: () => void;
}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
    },
};
export const HabitModal: FC<HabitModal> = ({ modalOpen, toggleModal }) => {
    if (!modalOpen) {
        return <></>;
    }
    return (
        <Modal isOpen={modalOpen} style={customStyles}>
            <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg
                            className="h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                        <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                        >
                            Add a note
                        </h3>
                        <div className="mt-2">
                            <div>
                                <div className="mt-1">
                                    <textarea
                                        id="note"
                                        name="note"
                                        rows={3}
                                        className="shadow-sm outline-black focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-72 md:w-96 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="I hit my target of 22 push ups."
                                    ></textarea>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Take note of your progress!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    >
                        Save
                    </button>
                    <button
                        onClick={toggleModal}
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};
