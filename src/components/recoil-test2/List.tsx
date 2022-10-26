import { useRecoilValueLoadable } from "recoil"
import { instagramSelector } from "modules/recoil/list"

export default function List() {
  const { state, contents } = useRecoilValueLoadable(instagramSelector);

  return (
    <div className="list-container">
      {state === "loading" && <div>Loading...</div>}
      <ul className="list">
        {state === "hasValue" && contents.length > 0 && contents.map((item: any) => (
          <li key={item.id} className="list-item">
            <img src={item.media_url} alt="instagram_feed" />
          </li>
        ))}
      </ul>
    </div>
  )
}