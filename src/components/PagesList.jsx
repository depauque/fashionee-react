import leftPagingArrow from "../assets/icons/left_paging_arrow.svg";
import rightPagingArrow from "../assets/icons/right_paging_arrow.svg";

function PagesList({ nums, handlePage, currentPage }) {
  return (
    <div className="pagination">
      <div className="button-left">
        <img
          src={leftPagingArrow}
          onClick={() => handlePage(currentPage - 1)}
        />
      </div>
      <div className="pages">
        {nums.map((num) => (
          <div
            key={num}
            className={num === currentPage ? "page active" : "page"}
            onClick={() => handlePage(num)}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="button-right">
        <img
          src={rightPagingArrow}
          onClick={() => handlePage(currentPage + 1)}
        />
      </div>
    </div>
  );
}

export default PagesList;
