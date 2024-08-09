import { formatDistanceToNow } from "date-fns"

const ForumPost = (props) => {
    return ( 
        /* From Uiverse.io by JohnnyCSilva */ 
<div className="card">
  <div className="img"></div>
  <div className="textBox">
    <div className="textContent">
      <p className="h1">{props.username}: {props.title}</p>
      <span className="span">{formatDistanceToNow(new Date(props.createdAt), {addSuffix: true})}</span>
    </div>
    <p className="p">{props.body}</p>
  <div>
</div></div></div>
     );
}
 
export default ForumPost;