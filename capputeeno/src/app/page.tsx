
import styles from "./page.module.css";
import FilterBar from "@/components/filter-bar";


export default function Home() {
  return (
    <div className={styles.main}>
      <FilterBar/>

    </div>
  );
}
