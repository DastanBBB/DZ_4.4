import React, {useState, useEffect,} from 'react';
import styles from "./errorPage.module.css"

function ErrorPage({user}) {
    const [state, setState] = useState({ name: "", lastname: ""});

    useEffect(() => {
        setState(user);
    }, [user]);

    return (
        <div className={styles.container}>
            <h1 className={styles.error}>
                Тебе сюда нельзя - {state.name} {state.lastname}.
            </h1>
        </div>
    );
}

export default ErrorPage;