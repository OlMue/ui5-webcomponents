import { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

type Themes = {
  [name: string]: string;
};

export const useOptions: DecoratorFunction = (StoryFn) => {
  const [{ theme, rtl, density }] = useGlobals();

  const themes: Themes = {
    MorningHorizon: "sap_horizon",
    EveningHorizon: "sap_horizon_dark",
    QuartzLight: "sap_fiori_3",
    QuartzDark: "sap_fiori_3_dark",
    HorizonHighContrastBlack: "sap_horizon_hcb",
    HorizonHighContrastWhite: "sap_horizon_hcw",
    QuartzHighContrastBlack: "sap_fiori_3_hcb",
    QuartzHighContrastWhite: "sap_fiori_3_hcw",
  };

  useEffect(() => {
    const Conf = window["sap-ui-webcomponents-bundle"].configuration;
    const currentTheme: string =
      themes[theme.replace(/ /g, "") as keyof Themes];

    Conf.setTheme(currentTheme);

    document.body.setAttribute("dir", rtl === "RTL" ? "rtl" : "ltr");
    document.body.setAttribute("data-ui5-theme", currentTheme);

    document.body.classList.remove("sapUiSizeCozy");
    document.body.classList.remove("sapUiSizeCompact");
    document.body.classList.add("sapUiSize" + density);
  }, [theme, rtl, density]);

  return StoryFn();
};