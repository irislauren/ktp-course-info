
import styles from "./index.module.css";

// const capitalize = (str) =>
//   str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const Filter = ({
  title,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={{ backgroundColor: `${isActive ? "lavender" : "white"}` }}
    >
      <div
        className={styles.circle}
        style={{
          borderColor: `${
            title === "draft"
              ? "gold"
              : title === "rejected"
              ? "tomato"
              : "limegreen"
          }`,
        }}
      ></div>
      <h3 className={styles.title}>{(title)}</h3>
    </div>
  );
};

export default Filter