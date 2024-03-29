import vacation1 from "../../images/vacation-1.jpg";
import vacation2 from "../../images/vacation-2.jpg";
import vacation3 from "../../images/vacation-3.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styles from "./cssFiles/imageList.module.css";

export default function MyImageList() {
  return (
    <ImageList className={styles.list} gap={4} cols={3} rowHeight={500}>
      {myImages.map((img) => (
        <ImageListItem key={img}>
          <img
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"Some vacation"}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const myImages: Array<string> = [vacation1, vacation2, vacation3];
