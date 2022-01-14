import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cell } from "../grid/Cell";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    So funktioniert’s
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Errate das WORTLE in 6 Versuchen. Nach jedem Versuch
                      zeigen dir die Farben der Kacheln an, wie nah du dem
                      gesuchten Wort kamst.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="A" status="correct" />
                      <Cell value="U" status="absent" muted />
                      <Cell value="T" status="absent" muted />
                      <Cell value="O" status="absent" muted />
                      <Cell value="R" status="absent" muted />
                    </div>
                    <p className="text-sm text-gray-500">
                      Grün: Der Buchstabe A kommt im Wort vor und steht an der
                      richtigen Stelle.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="A" status="correct" muted />
                      <Cell value="B" status="absent" muted />
                      <Cell value="E" status="present" />
                      <Cell value="N" status="present" />
                      <Cell value="D" status="absent" muted />
                    </div>
                    <p className="text-sm text-gray-500">
                      Orange: Die Buchstaben E und N kommen im Wort vor, stehen aber
                      noch nicht an der richtigen Stelle.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="A" status="correct" muted />
                      <Cell value="F" status="absent" />
                      <Cell value="F" status="absent" />
                      <Cell value="E" status="correct" muted />
                      <Cell value="N" status="correct" muted />
                    </div>
                    <p className="text-sm text-gray-500">
                      Grau: Der Buchstabe F kommt an keiner Stelle im Wort vor.
                    </p>
                  </div>
                  <hr className="mt-2" />
                  <div className="mt-2">
                  <p className="text-sm text-gray-800">
                      Es wird jeden Tag ein neues Wortle gesucht – aber immer nur eins pro Tag!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
