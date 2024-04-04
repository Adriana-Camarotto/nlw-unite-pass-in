import nlwUniteIcon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <>
      <div className="flex">
        <img src={nlwUniteIcon} />
      </div>
      <nav>
        <a href="">Events</a>
        <a href="">Attendees</a>
      </nav>
    </>
  );
}
