import { StepperProps, StepperStatus } from "../../types/stepper.ts";
import StepperIcon from "./StepperIcon.tsx";

const Stepper = ({ steps }: { steps: StepperProps }) => (
  <div className={"grid place-items-center my-8"}>
    <ul className="relative flex flex-col md:flex-row gap-2">
      {steps.map(({ title, subtitle, status }) => (
        <li
          className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
          key={title}
        >
          <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span
              className={`size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium rounded-full dark:bg-gray-700 dark:text-white ${status === StepperStatus.IN_PROGRESS || status === StepperStatus.COMPLETED ? "text-purple-700 dark:text-purple-800" : "text-gray-800 dark:text-white"}`}
              style={{
                border: `${status === StepperStatus.IN_PROGRESS || status === StepperStatus.COMPLETED ? "1px solid rgb(126 34 206)" : ""}`,
                boxShadow: `${status === StepperStatus.IN_PROGRESS || status === StepperStatus.COMPLETED ? "0 0 0 2px rgb(243 244 246)" : ""}`,
              }}
            >
              {<StepperIcon status={status} />}
            </span>
            <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
          </div>
          <div className="grow md:grow-0 md:mt-3 pb-5">
            <span
              className={`block text-sm font-medium ${status === StepperStatus.IN_PROGRESS ? "text-purple-700 dark:text-purple-800" : "text-gray-800 dark:text-white"}`}
            >
              {title}
            </span>
            <p
              className={`text-sm text-gray-500 ${status === StepperStatus.IN_PROGRESS ? "text-purple-700 dark:text-purple-800" : "text-gray-800 dark:text-white"}`}
            >
              {subtitle}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Stepper;
