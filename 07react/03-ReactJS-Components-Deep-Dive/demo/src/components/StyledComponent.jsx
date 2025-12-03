import styles from './StyledComponent.module.css';

export default function StyledComponent() {
    return (
        <section>
            <h2>Styled Component</h2>

            <p className={styles['fancy-text']}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio tempore quas quam ratione ad hic rem unde molestias tempora itaque!</p>
        </section>
    );
}
