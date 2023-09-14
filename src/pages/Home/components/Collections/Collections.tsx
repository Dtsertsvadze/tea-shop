import { CollectionsAPI } from "../../../../API/CollectionsAPI";
import "./Collections.css";
export default function Collections() {
  return (
    <section className="collections">
      <h1>Our Collections</h1>
      <div className="collection-list container">
        {CollectionsAPI.map((e) => (
          <div className="collection">
            <img src={e.image} alt="" />
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
