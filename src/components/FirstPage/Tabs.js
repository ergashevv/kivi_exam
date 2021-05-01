import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Body from '../../containers/Body/Body'
import Body2 from '../../containers/Body/Body2'
import './Tabs.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" className="appbar" style={{backgroundColor:"white", boxShadow:"0 0 0 0"}}>
          <TabList onChange={handleChange} aria-label="simple tabs example"
          className="tablist" style={{color: "red"}}>
            <Tab label="Новые объявления" value="1" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px", width:"900px" }}/>
            <Tab label="Лучщие предложение" value="2" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            
          </TabList>
        </AppBar>
        <TabPanel value="1"><Body/></TabPanel>
        <TabPanel value="2"><Body2/></TabPanel>
       
      </TabContext>
    </div>
  );
}