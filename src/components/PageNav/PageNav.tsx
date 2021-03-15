import { FunctionComponent } from "react";
import "./PageNav.scss";

interface IPageNavProps {
  handleClick: (e: number) => any;
  currentPage: number;
  lastPage: number;
  firstPage?: number;
}

const PageNav: FunctionComponent<IPageNavProps> = ({
  handleClick,
  currentPage,
  lastPage,
  firstPage = 1,
}) => {
  function isLastPage() {
    return !!(currentPage !== lastPage);
  }

  function isFirstPage() {
    return !!(currentPage !== firstPage);
  }

  return (
    <div className="pageNav-wrapper">
      {isFirstPage() && (
        <div onClick={() => handleClick(--currentPage)} className="round">
          &#8249;
        </div>
      )}
      <div className="pages">
        <p className="current-page">{`${currentPage}`}</p>
      </div>
      {isLastPage() && (
        <div onClick={() => handleClick(++currentPage)} className="round">
          &#8250;
        </div>
      )}
    </div>
  );
};

export default PageNav;
