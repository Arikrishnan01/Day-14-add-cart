import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function AddCart({ increase}) {
  return (
    <div className='addcart'>
      <IconButton aria-label="add to shopping cart">
        <p className='addIcon'>Cart {increase}</p>
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}
