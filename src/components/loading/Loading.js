import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from "../../styles/loading.module.css"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={styles.container}>
            <div className={styles.orb}></div>
            <div className={styles.orb}></div>
            <div className={styles.orb}></div>
            <div className={styles.orb}></div>
            <div className={styles.orb}></div>
        </div>

    )
}