import { FaMinus, FaPlus } from "react-icons/fa";
import styles from './styles.module.scss';
import Link from "next/link";
import B from "./B";

export const IconsPM = () => (
    <>
        <FaMinus className={styles.minus} />
        <FaPlus className={styles.plus} />
    </>
);

export default function A({ childrensData, margin = 10 }) {


    return (
        <ul className={styles.container}>
            {childrensData.map((child, index) => (
                <li key={child._id || child.id || index}>
                    <details >
                        <summary className={styles.title} style={{ paddingRight: `${margin}%` }}>
                            {child.children.length ? <IconsPM /> : <div className={styles.placeHolderIcon} />}
                            <Link href={`/category/${child._id}`}> {child.name}</Link>
                        </summary>
                        {child.children.length > 0 && (
                            <B margin={margin + 4} childrensData={child.children} />
                        )}
                    </details>
                </li>
            ))}
        </ul>
    );
}
