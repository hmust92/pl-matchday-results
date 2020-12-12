import Image from 'next/image'
import styles from "./MatchDay.module.css";
import images from '../images.json';

const MatchDay = ({
    id,
    homeTeamName,
    awayTeamName,
    status,
    homeTeamScore,
    awayTeamScore,
}) => {
    return (
        <div className={styles.card}>
            <div style={{ display: "flex", justifyContent: "center", padding: 16 }}>
                <Image src={images[homeTeamName]} height={40} width={40} />
                <div style={{ marginLeft: 16, marginRight: 16, alignSelf: 'center' }}>vs</div>
                <Image src={images[awayTeamName]} height={40} width={40} />
            </div>
            <div style={{ padding: 16, backgroundColor: '#f5f8fb' }}>
                <div style={{ textAlign: 'center' }}>Winner:</div>
                <div style={{ textAlign: 'center' }}>Brighton Hove and Albion</div>
            </div>
        </div>
    );
};

export default MatchDay;
