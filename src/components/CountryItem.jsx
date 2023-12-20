import styles from "./CountryItem.module.css";

function CountryItem(prop) {
  const { country, emoji } = prop.country;

  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <h3>{country}</h3>
    </li>
  );
}

export default CountryItem;
