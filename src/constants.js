export const DEFAULT_ID_HERO = 1;
export const BASE_URL = "https://api.opendota.com/api/";
export const NO_AVATAR_IMAGE =
  "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg";
export const KEYS_FOR_CHART = [
  {
    key: "kills",
    name: "Убийств"
  },
  {
    key: "deaths",
    name: "Смертей"
  },
  {
    key: "assists",
    name: "Помощь"
  },
  {
    key: "tower_kills",
    name: "Разрушено башен"
  },
  {
    key: "courier_kills",
    name: "Убито курьеров"
  }
];
export const BAR_CHART_SETTINGS = {
  keys: KEYS_FOR_CHART.map(item => item.key),
  indexBy: "name",
  margin: { top: 50, right: 50, bottom: 50, left: 60 },
  padding: 0.3,
  colors: { scheme: "category10" },
  defs: [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "#38bcb2",
      size: 4,
      padding: 1,
      stagger: true
    },
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "#eed312",
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }
  ],
  fill: [
    {
      match: {
        id: "fries"
      },
      id: "dots"
    },
    {
      match: {
        id: "sandwich"
      },
      id: "lines"
    }
  ],
  borderColor: { from: "color", modifiers: [["darker", 1.6]] },
  axisTop: null,
  axisRight: null,
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Статистика",
    legendPosition: "middle",
    legendOffset: 32
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "",
    legendPosition: "middle",
    legendOffset: -40
  },
  labelSkipWidth: 12,
  labelSkipHeight: 12,
  labelTextColor: { from: "color", modifiers: [["darker", 1.6]] },
  animate: true,
  motionStiffness: 90,
  motionDamping: 15
};
