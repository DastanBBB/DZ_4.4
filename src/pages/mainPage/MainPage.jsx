import React, {useState, useEffect,} from 'react';
import styles from "./mainPage.module.css";

function MainPage({user}) {
    const [state, setState] = useState({name: "", lastname: ""})

    useEffect(() => {
        setState(user)
    }, [user]);

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>
                Добро пожаловать {state.name} {state.lastname}, мы тебя ждали!
            </h1>
        </div>
    );
}

export default MainPage;