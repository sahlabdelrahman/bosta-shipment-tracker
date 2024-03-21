import { useEffect, useRef, useState } from "react";

import MachineIcon from "Components/Icons/MachineIcon";
import DeliveredIcon from "Components/Icons/DeliveredIcon";

import styles from "./style.module.scss";

import detailsHeaderConfig from "../config";
const { stepper } = detailsHeaderConfig;

const stepsConfig = [
    {
        name: stepper?.shipmentCreated,
    },
    {
        name: stepper?.shipmentReceived,
    },
    {
        name: stepper?.shipmentOutForDelivery,
        Icon: <MachineIcon />,
    },
    {
        name: stepper?.shipmentDelivered,
        Icon: <DeliveredIcon />,
    },
];

const Stepper = ({ currentStep, color }) => {
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });
    const stepRef = useRef([]);

    useEffect(() => {
        setMargins({
            marginRight: stepRef.current[0].offsetWidth / 2,
            marginLeft: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
        });
    }, [stepRef]);

    if (!stepsConfig.length) {
        return <></>;
    }

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    };

    return (
        <>
            <div className={styles.stepper}>
                {stepsConfig.map((step, index) => {
                    return (
                        <div
                            key={step.name}
                            ref={(el) => (stepRef.current[index] = el)}
                            className={styles.step}
                        >
                            <div
                                className={styles.stepNumber}
                                style={{
                                    backgroundColor:
                                        currentStep >= index + 1 ? color : "",
                                    color: "#fff",
                                }}
                            >
                                {currentStep > index + 1 ||
                                currentStep === stepsConfig?.length ? (
                                    <span>&#10003;</span>
                                ) : (
                                    step?.Icon
                                )}
                            </div>
                            <p className={styles.stepName}>{step.name}</p>
                        </div>
                    );
                })}

                <div
                    className={styles.progressBar}
                    style={{
                        width: `calc(100% - ${
                            margins.marginLeft + margins.marginRight
                        }px)`,
                        marginLeft: margins.marginLeft,
                        marginRight: margins.marginRight,
                    }}
                >
                    <div
                        className={styles.progress}
                        style={{
                            width: `${calculateProgressBarWidth()}%`,
                            backgroundColor: color,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Stepper;
