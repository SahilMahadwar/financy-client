import { Icon, Box } from '@chakra-ui/react';

import {
  RiArrowDownSLine,
  RiNumbersFill,
  RiHomeSmile2Line,
  RiSettings3Line,
  RiQuestionLine,
  RiUser3Line,
  RiFileTextLine,
  RiMoneyDollarBoxLine,
  RiCloseCircleLine,
  RiCloseFill,
} from 'react-icons/ri';

export function HomeIcon({ color }) {
  return <Icon w="18px" h="18px" color="currentColor" as={RiHomeSmile2Line} />;
}

export function InvoiceIcon({ color }) {
  return <Icon w="18px" h="18px" color="currentColor" as={RiFileTextLine} />;
}

export function ClientsIcon({ color }) {
  return <Icon w="18px" h="18px" color="currentColor" as={RiUser3Line} />;
}

export function EstimatesIcon({ color }) {
  return (
    <Icon w="18px" h="18px" color="currentColor" as={RiMoneyDollarBoxLine} />
  );
}

export function SettingsIcon({ color }) {
  return <Icon w="18px" h="18px" color="currentColor" as={RiSettings3Line} />;
}

export function HelpIcon({ color }) {
  return <Icon w="18px" h="18px" color="currentColor" as={RiQuestionLine} />;
}

export function DropdownArrowIcon({ color }) {
  return <Icon w="18px" h="18px" color={color} as={RiArrowDownSLine} />;
}

export function CloseIcon({ color }) {
  return <Icon w="22px" h="22px" color={color} as={RiCloseFill} />;
}

export function LogoIcon({ color }) {
  return <Icon w="24.17px" h="24.17px" color={color} as={RiNumbersFill} />;
}
