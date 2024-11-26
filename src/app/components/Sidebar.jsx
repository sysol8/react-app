import Link from 'next/link'
import Image from 'next/image'
import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Image
                className={styles.logo}
                src="/logo.svg"
                width={160}
                height={160}
                alt='Logo'
            />
            <nav>
                <ul>
                    <li>
                        <Link className={styles.navLink} href="/profile">
                            <i className="bi bi-123"></i>
                            <span>Username</span>
                        </Link>
                    </li>
                    <div className={styles.divider}></div>
                    <li>
                        <Link className={styles.navLink} href="/">
                            <i className="bi bi-house"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href="/tasks">
                            <i className="bi bi-file-earmark"></i>
                            <span>Tasks</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href="/messenger">
                            <i className="bi bi-chat"></i>
                            <span>Messenger</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href="/calendar">
                            <i className="bi bi-calendar"></i>
                            <span>Calendar</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.divider}></div>
            <button className={styles.loginButton} type="button">
                <i className="bi bi-box-arrow-in-left"></i>
                <span>Log In</span>
            </button>
        </aside>
    )
}