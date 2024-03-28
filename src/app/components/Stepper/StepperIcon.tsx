import { StepperStatus } from "../../types/stepper.ts";
import CheckSVG from "../SVG/CheckSVG.tsx";
import DotSVG from "../SVG/DotSVG.tsx";

const StepperIcon = ({ status }: { status: StepperStatus }) => {
  if (status === StepperStatus.COMPLETED) {
    return <CheckSVG />;
  }

  return <DotSVG />;
};

export default StepperIcon;
