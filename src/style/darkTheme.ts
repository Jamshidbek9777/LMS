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
    colorText: "#FFF",
    defaultHoverBg: "#F23E90",
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
    colorIcon: "white",
    colorBgElevated: "#333",
    colorText: "white",
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
    activeBg: "#333",
  },

  DatePicker: {
    controlHeightLG,
    controlHeight,
    borderRadius: 12,
  },

  Layout: {
    bodyBg: "black",
    headerBg: "black",
    headerPadding: 24,
  },

  Menu: {
    // itemColor: "#94A3B8",
    darkItemBg: "#333",
    itemSelectedBg: "#4880FF",
    itemSelectedColor: "#fff",
    darkSubMenuItemBg: "#333",
    colorSplit: "grey",
    // darkSubMenuItemBg: "red",
    darkPopupBg: "red",
    itemHoverColor: "red",
  },

  Select: {
    controlHeight: 40,
    controlHeightLG,
    padding: 0,
    borderRadius: 12,
    // optionActiveBg: "#E7F6FD",
    colorBgContainer: "#4880FF",
    colorBorder: "transparent",
    colorText: "white",
    optionSelectedBg: "#4880FF",
    colorBgElevated: "#333",
    colorTextPlaceholder: "white",
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
    colorPrimary: "#4880FF",
    colorPrimaryHover: "#4880FF",
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

  Dropdown: {
    colorBgElevated: "#333",
    colorText: "#fff",
  },
  Badge: {
    indicatorHeight: 17,
  },
};

export const darkTheme = {
  token,
  components,
};
