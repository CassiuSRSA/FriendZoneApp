import { Typography, useTheme } from "@mui/material";
import FlexBetween from "src/components/FlexBetween";
import WidgetWrapper from "src/components/WidgetWrapper";

const baseUrl = import.meta.env.BASE_URL;

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <Typography color={dark} variant="h5" fontWeight="500">
        Sponsored
      </Typography>

      <img
        width="100%"
        height="auto"
        alt="advert"
        src="${baseUrl}/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Ultimate Tours</Typography>
        <Typography color={medium}>ultimatetours.co.za</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Escape the ordinary whilst embarking on the journey of a lifetime.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
