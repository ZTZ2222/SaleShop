import Link from "next/link";
import styles from "./BrandCard.module.scss";

interface BrandCardProps{
    img?:string,
    title?:string
}

const BrandCard:React.FC<BrandCardProps> = ({img,title}) => {
  return (
    <li className={styles.brand}>
      <Link href={"/brand"}>
        <div>
          <img className={styles.brand_image}
            src={
                img ? img : 'https://content.asos-media.com/-/media/homepages/unisex/events-2023/november/black-friday/main-phase/prime/cyber-monday-moments/moments-2/fr-de/2023_homepage_moment-2_ww_870x1110_bf_vertical2_fr_de.jpg'
            }
            alt=""
          />
        </div>
        <div className={styles.brand_text}>
           <p className={styles.brand_title}> {title ? title : 'Nike'}</p>
        </div>
      </Link>
    </li>
  );
};

export default BrandCard;
