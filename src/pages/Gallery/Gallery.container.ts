import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { isNil } from "lodash";
import getArtwork from "../../hooks/getArtwork";
import Gallery, { ArtDetails, PageSizes } from "./Gallery";

const GalleryContainer = () => {
  const [artData, setArtData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(100);
  const [pageSize, setPageSize] = useState<PageSizes>("12");
  const [search, setSearch] = useState("");
  const baseImgUrl = "https://www.artic.edu/iiif/2/";

  useEffect(() => {
    const searchUrl = isNil(search) ? "?" : `search?q=${search}&`;
    const url = `https://api.artic.edu/api/v1/artworks/${searchUrl}fields=id,title,artist_title,thumbnail,config,data,image_id&page=${currentPage}&size=${pageSize}`;
    getArtwork(url).then((response: any) => {
      setArtData(response.data);
      setLastPage(response.pagination.total_pages);
    });
  }, [currentPage, pageSize, search]);

  /** Elush- Grabbing the details of the artwork to display in a frosted glass over it */
  function getArtDetails(art: any): ArtDetails {
    const artConfigUrl = "full/843,/0/default.jpg";
    const id = art.id;
    const alt = isNil(art.thumbnail)
      ? "no-alt-available"
      : art.thumbnail.alt_text;
    const src = isNil(art.image_id)
      ? ""
      : `${baseImgUrl}/${art.image_id}/${artConfigUrl}`;
    const title = art.title;
    const artist = art.artist_title;

    return {
      id,
      alt,
      src,
      title,
      artist,
    };
  }

  function handlePage(newPage: number) {
    setCurrentPage(newPage);
  }

  function handlePageSize(e: MouseEvent) {
    const input = e.target as HTMLElement;
    const newPageSize = (input.textContent as PageSizes) || "12";
    setPageSize(newPageSize);
  }

  /** Elush- I restart the current page with a new search term */
  function handleSearch(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    const newSearch = input.value || "";
    setSearch(newSearch);
    setCurrentPage(1);
  }

  return Gallery({
    artData,
    getArtDetails,
    currentPage,
    lastPage,
    handlePage,
    pageSize,
    handlePageSize,
    search,
    handleSearch,
  });
};

export default GalleryContainer;
