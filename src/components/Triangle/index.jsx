import styles from './triangle.module.css';

export const Triangle = ({ rowIndex, triangle }) => {
    const triangleHeight = Math.floor(window.innerHeight / 3);

    return (
        <div style={rowIndex === 0 ? { borderTopWidth: triangleHeight } : { borderBottomWidth: triangleHeight }} className={`${rowIndex === 0 ? styles.triangleDown : styles.triangleUp} ${styles.triangle}`}>
            <div className={rowIndex === 0 ? styles.checkersContainerTop : styles.checkersContainerBottom}>
                {Array(triangle?.amount || 0)
                    .fill(0)
                    .map(() => (
                        <div className={styles.checker} style={{ backgroundColor: triangle.type }}></div>
                    ))}
            </div>
        </div>
    );
};
