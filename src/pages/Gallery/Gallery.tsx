import { FunctionComponent, KeyboardEvent, MouseEvent, Suspense } from "react";
import DefaultTemplate from "../DefaultTemplate";
import { Dropdown } from "../../components/Dropdown";
import { PageNav } from "../../components/PageNav";
import { SearchBar } from "../../components/SearchBar";
import "./Gallery.scss";

export type ArtDetails = {
  id: string;
  alt: string;
  src: string;
  title: string;
  artist: string;
};
export type PageSizes = "12" | "24" | "36";

interface IGalleryProps {
  artData: any[];
  getArtDetails: (art: any) => ArtDetails;
  currentPage: number;
  lastPage: number;
  handlePage: (e: any) => void;
  pageSize: string;
  handlePageSize: (e: MouseEvent) => void;
  search: string;
  handleSearch: (e: KeyboardEvent) => void;
}

const pageSizeOptions: PageSizes[] = ["12", "24", "36"];

const Gallery: FunctionComponent<IGalleryProps> = ({
  artData = [],
  getArtDetails,
  currentPage,
  lastPage,
  handlePage,
  pageSize,
  handlePageSize,
  search,
  handleSearch,
}) => (
  <DefaultTemplate>
    <div className="galleryWrapper">
      <h1 className="title" onClick={handlePage}>
        {`Gallery`}
      </h1>
      {/* Elush- Banner bar houses all the API parameters to allow the user to search, filter, and paginate results */}
      <div className="bannerBar">
        <div className="left-banner">
          <SearchBar
            placeholder={"Search"}
            value={search}
            handleSearch={handleSearch}
          />
        </div>

        <div className="right-banner">
          <PageNav
            handleClick={handlePage}
            currentPage={currentPage}
            lastPage={lastPage}
          />
          <Dropdown
            handleClick={handlePageSize}
            title={`Items Per Page: ${pageSize}`}
            options={pageSizeOptions}
          />
        </div>
      </div>
      {/* Elush- Content is displayed after the fetching has completed  */}
      <Suspense
        fallback={
          <h3 className="title">
            {"Searching for images. Grab yourself a deep dish :) "}
          </h3>
        }
      >
        <div className="content">
          {artData.length === 0 ? (
            <h3>{"No images found. Grab yourself a deep dish :) "}</h3>
          ) : (
            artData.map((art, idx) => {
              const artDetails: ArtDetails = getArtDetails(art);
              if (!artDetails.src) {
                return <div key={idx}></div>;
              }
              return (
                <div
                  key={`img-wrapper-${artDetails.id}`}
                  className="img-wrapper"
                >
                  <img
                    key={`img-${artDetails.id}`}
                    alt={artDetails.alt || "none yet"}
                    src={artDetails.src}
                    loading={"lazy"}
                  />
                  {/* Elush- Frosted glass effect to show basic artwork details */}
                  <div
                    key={`img-details-${artDetails.id}`}
                    className="img-details"
                  >
                    <p className="art-title">{artDetails.title || "Unknown"}</p>
                    <p>{artDetails.artist || "Unknown"}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Suspense>
    </div>
  </DefaultTemplate>
);

export default Gallery;
