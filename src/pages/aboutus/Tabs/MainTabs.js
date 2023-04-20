import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { PrivacyPolicyMain } from 'components/Aboutus/Tabs/PrivacyPolicy/PrivacyPolicyMain';
import { PrivacyPolicyMainContent } from 'components/Aboutus/Tabs/PrivacyPolicy/PrivacyPolicyMainContent';
import { TermsCondtionMain } from 'components/Aboutus/Tabs/TermsConditons/TermsCondtionMain';
import { TermsConditonMainContent } from 'components/Aboutus/Tabs/TermsConditons/TermsConditionMainContent';
import { HandleInfoTab } from 'components/Aboutus/Tabs/InfoTab/index';

const style = {
    maxWidth: '700px',
    padding: '16px',
    borderRadius: '8px',
    marginLeft: '8px',
    overflow: 'hidden',
    maxHeight: '50vh'
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export function AssignmentTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#D97D54'
                        }
                    }}
                >
                    <Tab label="Info" {...a11yProps(0)} />
                    <Tab label="FAQ" {...a11yProps(1)} />
                    <Tab label="Compliment and feedback" {...a11yProps(2)} />
                    <Tab label="Privacy Policy" {...a11yProps(3)} />
                    <Tab label="Terms & Conditions" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <HandleInfoTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <h1 style={style}>
                            Your Privacy Matters
                            <IconButton color="error" id="privacy" name="privacy" onClick={(e) => props.openBasicModal(e)}>
                                <EditIcon />
                            </IconButton>
                        </h1>
                        <PrivacyPolicyMainContent dummyText={props.dummyText} />
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: '-1%', marginLeft: '-2%' }}>
                        <PrivacyPolicyMain />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <h1 style={style}>
                            Terms and Conditions
                            <IconButton color="error" id="terms" name="terms" onClick={(e) => props.openBasicModal(e)}>
                                <EditIcon />
                            </IconButton>
                        </h1>
                        <TermsConditonMainContent dummyText1={props.dummyText2} />
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: '-1%', marginLeft: '-2%' }}>
                        <TermsCondtionMain />
                    </Grid>
                </Grid>
            </TabPanel>
        </Box>
    );
}
