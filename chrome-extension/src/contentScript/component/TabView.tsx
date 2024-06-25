import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AutoModeIcon from '@mui/icons-material/AutoMode';



export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className=' mt-auto'>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon tabs example"
      centered  // To center the tabs
      indicatorColor="primary"  // Indicator color
      textColor="primary"       // Text color
      variant="fullWidth"       // Tabs should cover full width
      sx={{ borderBottom: 1, borderColor: 'divider' }} // Border styling
    >
         <Tab
        label="Prospets"
        icon={<PersonPinIcon sx={{ fontSize: 25  }} />} // Increase icon size
        aria-label="person"
        sx={{ flexDirection: 'column', alignItems: 'center' }} // Align icon and label vertically
      />
      <Tab
        label="Automation"
        icon={<AutoModeIcon sx={{ fontSize: 25 }} />} // Increase icon size
        aria-label="phone"
        sx={{ flexDirection: 'column', alignItems: 'center' }} // Align icon and label vertically
      />
      <Tab
        label="More"
        icon={<MoreHorizIcon sx={{ fontSize: 25  }} />} // Increase icon size
        aria-label="favorite"
        sx={{ flexDirection: 'column', alignItems: 'center' }} // Align icon and label vertically
      />
     
    </Tabs>
    </div>
  );
}
