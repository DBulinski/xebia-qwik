import { component$, useSignal } from "@builder.io/qwik";
import styles from "./items.module.css";

const page = new Array(5000).fill("");

export default component$(() => {
  const selectedItem = useSignal<number | null>(null);

  return (
    <>
      {selectedItem.value !== null && (
        <strong>Last item selected: {selectedItem.value + 1}</strong>
      )}
      <div class={styles.itemsContainer}>
        {page.map((_, index) => (
          <div class={styles.item} key={index}>
            <button
              disabled={selectedItem.value === index}
              onClick$={() => (selectedItem.value = index)}
            >
              Item {index + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
});
