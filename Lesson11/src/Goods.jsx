import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchContentGoods} from "./store/reducerGoods";
import {ThreeDots} from "react-loader-spinner";

function Goods() {
  let goods = useSelector((state) => state.goods.goodsArr);
  let loading = useSelector((state) => state.goods.isLoading)
  let error = useSelector((state) => state.goods.error)

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContentGoods())
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
    <div className="Goods">
      <ul>
        {
          goods.map((item, index) => {
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

export default Goods;
