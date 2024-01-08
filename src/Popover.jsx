import * as Popover from '@radix-ui/react-popover';
import "./App.css";

export default function Popovers() {
  return (
    <Popover.Root>
      <Popover.Trigger className="popover">Press</Popover.Trigger>

      <Popover.Content className="popoverContent">
        <div className="popoverTop">
          <p>
            <span className="popoverName">shadcn</span>
            <br />
            <span className="popoverMail">m@example.com</span>
          </p>
        </div>
        <div className="popoverTitle">
          <p className="popoverThing">Profile</p>
          <p className="popoverLetter">#P</p>
        </div>
        <div className="popoverTitle">
          <p className="popoverThing">Billings</p>
          <p className="popoverLetter">#B</p>
        </div>
        <div className="popoverTitle">
          <p className="popoverThing">Settings</p>
          <p className="popoverLetter">#S</p>
        </div>
        <div className="popoverTitle">
          <p className="popoverThing">New Team</p>
        </div>
        <div className="popoverTitle logout">
          <p className="popoverThing">Log out</p>
          <p className="popoverLetter">#Q</p>
        </div>

        {/* Arrow for the popover */}
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Root>
  );
}
  


