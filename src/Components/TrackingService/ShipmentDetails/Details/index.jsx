import Message from "Components/Global/Message";

import { formatDate } from "functions/time";
import { parseStatus } from "functions/trackShipment";

import styles from "./style.module.scss";

import detailsConfig from "./config";

const { title, data } = detailsConfig;

const Table = ({ transitEvents }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>{data?.branch}</th>
                    <th>{data?.date}</th>
                    <th>{data?.time}</th>
                    <th>{data?.details}</th>
                </tr>
            </thead>
            <tbody>
                {transitEvents?.map((event) => (
                    <tr key={event?.timestamp}>
                        <td>{event?.hub}</td>
                        <td>
                            {formatDate({
                                date: new Date(event?.timestamp),
                                type: "date",
                            })}
                        </td>
                        <td>
                            {formatDate({
                                date: new Date(event?.timestamp),
                                type: "time",
                            })}
                        </td>
                        <td className={styles.stateAndReason}>
                            <p className={styles.state}>
                                {parseStatus(event?.state)}
                            </p>
                            <p className={styles.reason}>{event?.reason}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Details = ({ transitEvents }) => {
    return (
        <div className={styles.details}>
            <h6 className={styles.title}>{title}</h6>
            {transitEvents?.length > 0 ? (
                <Table transitEvents={transitEvents} />
            ) : (
                <Message text={data?.noDetails} />
            )}
        </div>
    );
};

export default Details;
