import { ThemeConfig } from "antd/es/config-provider/context";

const controlHeightLG = 52;
const controlHeight = 52;

const token: ThemeConfig["token"] = {
  colorPrimary: "#0EA5E9",
  borderRadius: 8,
  colorLink: "#0EA5E9",
  fontFamily: "",
};

const components: ThemeConfig["components"] = {
  Button: {
    controlHeight,
    colorText: "#333",
    // defaultHoverBg: "#F23E90",
    fontSize: 20,
    defaultColor: "#fff",
    defaultBorderColor: "transparent",
    defaultBg: "#F23E79",
    borderRadius: 16,
    borderRadiusLG: 16,
  },

  Card: {
    paddingLG: 16,
  },

  Drawer: {
    paddingLG: 16,
  },

  Form: {
    labelFontSize: 16,
    controlHeightLG: 8,
    fontWeightStrong: 500,
    itemMarginBottom: 5,
  },

  Input: {
    // padding: 12,
    paddingBlock: 15,
    // controlHeightLG
    // controlHeight,
    colorTextDisabled: "#02053D",
    colorBorder: "transparent",
    borderRadius: 16,
    hoverBorderColor: "red",
  },

  DatePicker: {
    controlHeightLG,
    controlHeight,
    borderRadius: 12,
  },

  Layout: {
    bodyBg: "#f8fafc",
    headerBg: "#fff",
    headerPadding: 24,
  },

  Menu: {
    // itemColor: "#94A3B8",
    // itemActiveBg: "#4880FF",
    itemSelectedBg: "#4880FF",
    itemSelectedColor: "#FFD1DC",
  },

  Select: {
    controlHeight: 40,
    controlHeightLG,
    padding: 0,
    borderRadius: 12,
    colorTextPlaceholder: "black",
  },

  List: {
    itemPaddingLG: "16px 0",
  },

  Tabs: {
    fontSize: 16,
    padding: 4,
    colorBorderSecondary: "#EBEBEF",
    cardBg: "#fff",
  },

  Checkbox: {
    controlInteractiveSize: 20,
  },

  Radio: {
    radioSize: 20,
    dotSize: 10,
    colorPrimary: "#00E28D",
  },

  Tag: {
    marginXS: 0,
  },

  Skeleton: {
    borderRadiusSM: 8,
  },

  Switch: {
    colorPrimary: "#F23E79",
    colorPrimaryHover: "#F23E79",
  },

  Typography: {
    fontSize: 16,
  },

  Segmented: {
    itemSelectedBg: "#0ea5e9",
    itemSelectedColor: "#fff",
  },

  Steps: {
    dotSize: 25,
  },

  Divider: {
    marginLG: 15,
    colorText: "var(--gray)",
    colorSplit: "#CBD5E1",
    lineHeight: 2,
  },

  Pagination: {
    itemActiveBg: "#0EA5E9",
    borderRadius: 50,
  },

  Table: {
    headerBg: "#fff",
    headerSplitColor: "#fff",
    headerColor: "#64748b",
  },
  Badge: {
    indicatorHeight: 17,
  },
};

export const lightTheme = {
  token,
  components,
};
