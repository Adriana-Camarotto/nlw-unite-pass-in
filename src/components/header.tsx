import nlwUniteIcon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={nlwUniteIcon} />
      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-300">
          Events
        </a>
        <a href="" className="font-medium text-sm">
          Attendees
        </a>
      </nav>
    </div>
  );
}
