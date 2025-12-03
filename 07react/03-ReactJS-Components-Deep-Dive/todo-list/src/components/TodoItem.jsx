import styles from './TodoItem.module.css';

export default function TodoItem({
    _id,
    title,
    completed,
    onClick,
}) {
    const classes = [styles['todo-item']]

    if (completed) {
        classes.push(styles['todo-completed'])
    }

    return (
        <li onClick={() => onClick(_id)} className={classes.join(' ')}>{title}</li>
        // <li onClick={onClick.bind(null, _id)} className={classes.join(' ')}>{title}</li>
    );
}
