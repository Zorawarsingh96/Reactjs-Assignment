import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InfoPannel } from './InfoPannel';
import {TableOfContent} from './PrivacyPolicy/TablleOfContent';
import Content from './PrivacyPolicy/Content';
import { TermsTableOfContent } from './Terms&Conditions/TablleOfContent';
import TermsContent from './Terms&Conditions/TermsContent';
import {
  View,
  Grid,
  useTheme,
} from "@aws-amplify/ui-react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function BasicTabs(props:any) {
  const [value, setValue] = React.useState(0);
  const { tokens } = useTheme();


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}
         onChange={handleChange}
         textColor="inherit"
         TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54"
          }
        }}
         aria-label="basic tabs example">
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="FAQ" {...a11yProps(1)} />
          <Tab label="Complements and Feedbacks" {...a11yProps(2)} />
          <Tab label="Privacy Policy" {...a11yProps(3)} />
          <Tab label="Terms & Conditions" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InfoPannel/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
          templateRows={{ base: "repeat(4, 10rem)", large: "repeat(3, 8rem)" }}
          gap={tokens.space.xl}
        >
      <View columnSpan={[1, 1, 1, 2]} rowSpan={{ base: 3, large: 4 }}>
         <Content
         dummyText={props.dummyText}
         openBasicModal={props.openBasicModal}
         />
      </View>
      <View rowSpan={{ base: 1, large: 4 }}>
         <TableOfContent
         />
      </View>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
          templateRows={{ base: "repeat(4, 10rem)", large: "repeat(3, 8rem)" }}
          gap={tokens.space.xl}
        >
      <View columnSpan={[1, 1, 1, 2]} rowSpan={{ base: 3, large: 4 }}>
         <TermsContent
         dummyText1={props.dummyText1}
         openBasicModal={props.openBasicModal}
         />
      </View>
      <View rowSpan={{ base: 1, large: 4 }}>
         <TermsTableOfContent/>
      </View>
        </Grid>
      </TabPanel>
    </Box>
  );
}
