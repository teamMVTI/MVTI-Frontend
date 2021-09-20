import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Profile from "../components/detail/Profile";
import Result from "../components/detail/Result";
import Counter from "../components/sentiment_test/Counter";
import VillainRelation from "../components/sentiment_test/VillainRelation";
import { req } from "../lib/axios";

const DetailContainer = () => {
  const path = useLocation().pathname.split("/");
  const cname = path[path.length - 1];
  const [villain, setVillain] = useState<any>({
    id: 0,
    name: "",
    wc_url: "",
    bar_url: "",
    best_talk: "",
    character_img_url: "",
    mvti_type: "",
    partner: "",
    rival: "",
    sentiment: `[]`,
  });

  const { name, wc_url, best_talk, character_img_url, mvti_type, partner, rival, sentiment, count } = villain;

  const sdata = Object.entries(sentiment)
    .sort(([a], [b]) => {
      if (a < b) return -1;
      else return 1;
    })
    .map(([, val]) => Math.round(Number(val) * 10));

  useEffect(() => {
    req(`/api/character/${cname}`, "get", (res) => {
      setVillain({ ...res.data, sentiment: JSON.parse(res.data.sentiment.replace(/'/g, '"')) });
    });
  }, []);

  return (
    <Grid item xs={12}>
      <Profile name={name} script={best_talk} mvti={mvti_type} imgurl={character_img_url} />
      <Result url={wc_url} sdata={sdata} type={1} />
      <Counter cnt={count} type={1} />
      <VillainRelation partner={partner} rival={rival} />
    </Grid>
  );
};

DetailContainer.defaultProps = {};

export default DetailContainer;
