import Image from "next/image";
import images from "../images.json";
import colors from "../colors.json";

const MatchDay = ({
    id,
    homeTeamName,
    awayTeamName,
    status,
    homeTeamScore,
    awayTeamScore,
}) => {
    return (
        <>
            <div className="container">
                <div className="match">
                    <Image src={images[homeTeamName]} height={40} width={40} />
                    <div className="vs">vs</div>
                    <Image src={images[awayTeamName]} height={40} width={40} />
                </div>
                <div className="result textCenter">
                    {status === "NS" && (
                        <div className="textCenter">
                            The match has not started
                        </div>
                    )}
                    {status === "FT" && (
                        <>
                            <div className="bold">Full Time</div>
                            {homeTeamScore !== awayTeamScore && (
                                <>
                                    <div>Winner:</div>
                                    <div className="winner">
                                        {homeTeamScore > awayTeamScore
                                            ? homeTeamName
                                            : awayTeamName}
                                    </div>
                                </>
                            )}
                            {homeTeamScore === awayTeamScore && <div>Draw</div>}
                        </>
                    )}
                    {status !== "NS" && status !== "FT" && (
                        <>
                            <div className="bold">In Progress</div>
                            {homeTeamScore !== awayTeamScore && (
                                <>
                                    <div>Winning:</div>
                                    <div className="winner">
                                        {homeTeamScore > awayTeamScore
                                            ? homeTeamName
                                            : awayTeamName}
                                    </div>
                                </>
                            )}
                            {homeTeamScore === awayTeamScore && (
                                <div>The score is currently tied</div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 240px;
                    background-color: white;
                    border-radius: 8px;
                    margin: 16px;
                    overflow: hidden;
                    box-shadow: 0 0 5px #b4b4b4;
                }
                .match {
                    display: flex;
                    justify-content: center;
                    padding: 16px;
                }
                .vs {
                    margin-left: 16px;
                    margin-right: 16px;
                    align-self: center;
                }
                .result {
                    background-color: #f5f8fb;
                    padding: 16px;
                    height: 52px;
                }
                .textCenter {
                    text-align: center;
                }
                .winner {
                    color: ${colors[
                        homeTeamScore > awayTeamScore
                            ? homeTeamName
                            : awayTeamName
                    ]};
                }
                .bold {
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default MatchDay;
