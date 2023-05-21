import { Link } from "react-router-dom"

// the footer
export default function Footer() {
  return (
    <footer className="mt-5 pb-3 text-center">
      <span>
        This site is not affiliated with Future Pastimes or Fantasy Flight Games.
        <br />
        Thanks to Bill Eberle, Jack Kittredge, Bill Norton & Peter Olotka for this amazing game.
        <br />
        Kevin Wilson for curating it the FFG edition that we play today.
        <br />
        Jack Reda for The Warp - <Link to="http://warp.redamedia.com/" target="_blank" rel="external">the original Cosmic Encounter fan site</Link> - as well as for his continued work on Cosmic Encounter.
        <br />
        Bill Martinson for the Cosmodex, which this site started upon.
        <br />
        Last updated 2023-May-21 7:35pm AEST
      </span>
    </footer>
  );
}
