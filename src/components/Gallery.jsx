import { Grid, Box } from "@mui/material";
import invitationData from "../data/invitationData";


const Gallery = () => {
return (
<Box sx={{ p: 2 }}>
<Grid container spacing={2}>
{invitationData.gallery.map((img, idx) => (
<Grid item xs={6} key={idx}>
<Box
component="img"
src={img}
alt="gallery"
sx={{ width: "100%", borderRadius: 2 }}
/>
</Grid>
))}
</Grid>
</Box>
);
};


export default Gallery;