import styles from "./style.module.scss";

const PaginationComponent = ({
  totalResults,
  resultsPerPage,
 
  pageLocation,
  changePages,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const maxButtons = 10; // Total number of buttons to display
  const sideButtons = Math.floor((maxButtons - 1) / 2); // Number of buttons on each side of the current page

  // Determine the range of pages to display
  const getPageRange = () => {
    let startValue, endValue;
    if (totalPages <= maxButtons) {
      startValue = 1;
      endValue = totalPages;
    } else {
      if (pageLocation <= sideButtons + 1) {
        startValue = 1;
        endValue = maxButtons;
      } else if (pageLocation >= totalPages - sideButtons) {
        startValue = totalPages - maxButtons + 1;
        endValue = totalPages;
      } else {
        startValue = pageLocation - sideButtons;
        endValue = pageLocation + sideButtons;
      }
    }

    // Ensure the range does not go out of bounds
    if (startValue < 1) startValue = 1;
    if (endValue > totalPages) endValue = totalPages;

    return Array.from(
      { length: endValue - startValue + 1 },
      (_, i) => startValue + i
    );
  };

  const pageRange = getPageRange();

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => changePages(Number(pageLocation - 1))}
        disabled={pageLocation === 1}
      >
        {`>`}
      </button>
      {pageRange.map((v) => {
        return (
          <button
            style={pageLocation === v ? { color: "black" } : { color: "red" }}
            key={v}
            onClick={() => changePages(Number(v))}
          >
            {v}
          </button>
        );
      })}
      <button
        onClick={() => changePages(Number(pageLocation + 1))}
        disabled={pageLocation === totalPages}
      >
        {`<`}
      </button>
    </div>
  );
};

export default PaginationComponent;
