import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Body3 from '../../containers/Body/Body3'
import Body4 from '../../containers/Body/Body4'
import Body5 from '../../containers/Body/Body5'
import './Tabs.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SmallBody() {
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
            <Tab label="Просмотренные" value="1" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            <Tab label="Выбор редакции" value="2" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            <Tab label="Сниженн цены" value="3" className="tab-items" style={{color: "#9B9B9B", fontSize: "18px"}}/>
            
          </TabList>
        </AppBar>
        <TabPanel value="1"><Body3/></TabPanel>
        <TabPanel value="2"><Body4/></TabPanel>
        <TabPanel value="3"><Body5/></TabPanel>
       
      </TabContext>
    </div>
  );
}