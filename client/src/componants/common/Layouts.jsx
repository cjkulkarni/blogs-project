import { Link } from "react-router-dom";

const Button = (props) => {

    var classes = "px-5 py-3 border-2 border-white rounded-lg text-white h-auto " + props.className;
    var link = "#";
    if (props.link != null && props.link !== "") { link = props.link }
    
  return (
    <Link to={link } className={classes} >{props.text} </Link>
  );
}

export { Button }