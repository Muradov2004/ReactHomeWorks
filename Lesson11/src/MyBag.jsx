import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchContentBag} from "./store/reducerBag";
import {ThreeDots} from "react-loader-spinner";

function MyBag() {
  let myBag = useSelector((state) => state.myBag.myBagArr);
  let loading = useSelector((state) => state.myBag.isLoading)
  let error = useSelector((state) => state.myBag.error)

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContentBag())
  }, [dispatch]);

  if (loading === true) {
    return (<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <ThreeDots
        height="80"
        width="80"
        color="black"
        ariaLabel="threedots-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>);
  }
  if (error === true) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <h1>404 Error</h1>
      </div>)
  }
  return (
    <div className="MyBag">
      <ul>
        {
          myBag.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.product_name}</p>
              </div>);
          })
        }
      </ul>
    </div>
  );
}

export default MyBag;
