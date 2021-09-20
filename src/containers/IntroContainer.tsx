import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProfileCard from "../components/detail/ProfileCard";
import { req } from "../lib/axios";

const IntroContainer = () => {
  const [villains, setVillains] = useState([]);
  useEffect(() => {
    if (villains.length == 0) {
      req("/api/character/", "get", (res) => {
        console.log(res.data);
        setVillains(res.data);
      });
    }
  }, [villains]);
  return (
    <>
      <Grid item xs={12}>
        <h1 className='villain-name bottom'>MVTI의 서비스는..?</h1>
        <p>
          <span style={{ color: "#c33764" }}>My Villain Type Indicator Test</span>
          <br />
          <span style={{ color: "#1d2671" }}>Movie Villain Type Indicator</span>
          <br />
          <span className='mvti' style={{ fontSize: "2.0rem" }}>
            *
          </span>
          <span className='mvti' style={{ fontSize: "1.5rem" }}>
            12
          </span>
          명의 영화 빌런들의 대사에 기반한 감정 데이터 분석 결과를 토대로 만들어진 심리테스트입니다.
        </p>
        <p>
          <span className='mvti' style={{ fontSize: "2.0rem" }}>
            *
          </span>
          주요 감정 레이블은{" "}
          <span className='mvti' style={{ fontSize: "1.5rem" }}>
            10
          </span>
          개로 다음과 같습니다. <br />
          "Anger, Anticipation, Disgust, Fear, Joy, Negative, Positive, Sadness, Surprise, Trust"
        </p>
        <p>
          <span className='mvti' style={{ fontSize: "2.0rem" }}>
            *
          </span>
          이 주요 감정 레이블 중, 저희는{" "}
          <span className='mvti' style={{ fontSize: "1.5rem" }}>
            8
          </span>
          가지 감정레이블에 주목해보았고 MVTI Type을 다음과 같이 설정해보았습니다.
        </p>
        <div>
          <span className='mvti' style={{ fontSize: "1rem" }}>
            N / P
          </span>{" "}
          : 부정형(Negative) / 긍정형(Positive)
        </div>
        <div>
          <span className='mvti' style={{ fontSize: "1rem" }}>
            S / J
          </span>{" "}
          : 비애형(Sadness) / 쾌락형(Joy)
        </div>
        <div>
          <span className='mvti' style={{ fontSize: "1rem" }}>
            A / T
          </span>{" "}
          : 분노형(Anger) / 신뢰형(Trust)
        </div>
        <div>
          <span className='mvti' style={{ fontSize: "1rem" }}>
            F / A
          </span>{" "}
          : 근심형(Fear) / 기대형(Anticipation)
        </div>
        <p>
          아래에 각 빌런의 카드의 자세히 보기🔍를 통해 분석 결과를 보실 수 있습니다. 더 자세한 내용은&nbsp;
          <a href='https://www.notion.so/5-6a6a1afddb704d8d8697de6ba3b52c44'>여기</a>를 참조하세요!
        </p>

        {villains.map((v: any) => (
          <ProfileCard key={v.id} name={v.name} imgurl={v.character_img_url} />
        ))}
      </Grid>
    </>
  );
};

IntroContainer.defaultProps = {};

export default IntroContainer;
