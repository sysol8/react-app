import styles from "./buttons.module.css"

export function SidebarButton({ onClick }) {
    return (
            <button onClick={onClick} className={styles.sidebarButton}>
                <i className="bi bi-list"></i>
            </button>
    );
}

export function MenuButton() {
    return (
        <button className={styles.menuButton}>
            <i className="bi bi-gear"></i>
        </button>
    )
}