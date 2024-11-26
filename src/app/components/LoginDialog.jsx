"use client"

import styles from "./logindialog.module.css";
import { useEffect, useRef } from 'react';

export default function LoginDialog( { isOpen, onClick } ) {
    const ref = useRef();

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        const dialog = ref.current;
        dialog.showModal();
        return () => {
            dialog.close();
        };
    }, [isOpen]);

    return (
        <dialog ref={ref} className={styles.loginDialog}>
            <div className={styles.loginFormContainer}>
                <div className={styles.dialogHeader}>
                    <span>Sign In to SEX 2.0</span>
                    <button onClick={onClick} aria-label="Close"><i className="bi bi-x"></i></button>
                </div>
                <form method="GET">
                    <div>
                        <label htmlFor="username"></label>
                        <input id="username" name="username" placeholder="Username" required></input>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input id="password" name="password" placeholder="Password" required></input>
                    </div>
                    <div className={styles.dialogFooter}>
                        <button type="submit">Log In</button>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};