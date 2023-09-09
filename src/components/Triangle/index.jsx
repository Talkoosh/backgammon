import styles from './triangle.module.css';

export const Triangle = ({ rowIndex, triangle, triangleIndex, setMoveFrom, moveFrom, setMoveTo }) => {
    const triangleHeight = Math.floor(window.innerHeight / 3);

    const onSelectTriangle = () => {
        if (!moveFrom) {
            setMoveFrom({
                rowIndex,
                triangleIndex,
            });
        } else {
            setMoveTo({
                rowIndex,
                triangleIndex,
            });
        }
    };

    return (
        <div onClick={onSelectTriangle} style={rowIndex === 0 ? { borderTopWidth: triangleHeight } : { borderBottomWidth: triangleHeight }} className={`${rowIndex === 0 ? styles.triangleDown : styles.triangleUp} ${styles.triangle}`}>
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
