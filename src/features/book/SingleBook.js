import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SingleBook = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // Define the navigate function

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = (_id) => {
    // Navigate to the "AllBooks" page
    navigate(`/books/${_id}`);
    
    // Do something with the clicked book's ID
    console.log('Clicked book ID:', _id);
  };
  

  return (
    <Card
      sx={{
        maxWidth: 345,
        direction: "rtl",
        backgroundColor: "transparent",
        border: "solid",
        borderWidth: "2px",
        borderColor: "#164a59"
      }}
      // Pass the _id to the handleCardClick function
    >
      <CardHeader
        title={props.book.name || "לא ידוע"}
        style={{ color: "#164a59" }}
        onClick={() => handleCardClick(props.book._id)} 
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <img src={props.book.picUrl} alt="the book's pic"  onClick={() => handleCardClick(props.book._id)} />
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ color: "#164a59" }}onClick={() => handleCardClick(props.book._id)} >
          {props.book.description && props.book.description.length > 90
            ? `${props.book.description.substring(0, 40)}...`
            : props.book.description}
             
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ color: "#164a59" }}>
          {props.book.price || ""}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip
          title={isFavorite ? "הסרה מספרים מועדפים" : "הוספה לספרים מועדפים"}
          placement="bottom-start"
          PopperProps={{
            disablePortal: true,
          }}
        >
          <IconButton aria-label="favorite" onClick={handleFavoriteClick}>
            {isFavorite ? (
              <FavoriteIcon sx={{ color: '#a93679' }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: '#a93679' }} />
            )}
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default SingleBook;
