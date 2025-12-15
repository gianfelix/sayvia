import { Box, Typography } from "@mui/material";
import invitationData from "../data/invitationData";


const EventDetails = () => {
const { event } = invitationData;
return (
<Box sx={{ p: 4, textAlign: "center" }}>
<Typography variant="h5" gutterBottom>
Akad & Resepsi
</Typography>
<Typography>{new Date(event.date).toLocaleString()}</Typography>
<Typography>{event.venue}</Typography>
<Typography>{event.address}</Typography>
</Box>
);
};


export default EventDetails;