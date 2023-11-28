let Post = ({arr}) => {
  return (
    <div>
      <h1>Post</h1>
      <ul>{arr.map((item) => {
        return (<li>{item.title}</li>)
      })}</ul>
    </div>

  );
}

export default Post;