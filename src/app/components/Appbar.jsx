import styles from './appbar.module.css';
import { usePathname } from 'next/navigation';

export default function Appbar() {
    const pathname = usePathname();
    const pathParts = pathname.split('/');

    return (
        <header className={styles.appbar} role="banner">
            <h1>
                {pathParts.map((part, index) => (
                    <span key={index}>
                        {part}
                        {index < pathParts.length - 1 && <span className={styles.separator}> / </span>}
                    </span>
                ))}
            </h1>
        </header>
    );
}