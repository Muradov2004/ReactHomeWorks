let Comment = ({arr}) => {
  return (
    <div>
      <h1>Comment</h1>
      <ul>
        {arr.map((item) => {
          return (
            <li>{item.body}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default Comment;