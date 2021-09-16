import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  // colors: {
  //   brandWhite: '#EDF1F7',
  //   brandPrimary: '#3366FF',
  //   brandInfo: '#0095FF',
  //   brandSuccess: '#00D68F',
  //   brandWarning: '#FFAA00',
  //   brandDanger: '#FF3D71',
  //   brandBackground: '#151A30',
  // },
  // styles: {
  //   global: (props) => ({
  //     body: {
  //       // fontFamily: "body",
  //       // color: mode("gray.800", "whiteAlpha.900")(props),
  //       bg: mode('#EDF2F7', '#151A30')(props),
  //       // lineHeight: "base",
  //     },
  //   }),
  // },
});

export default theme;
