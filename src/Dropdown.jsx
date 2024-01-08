import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./App.css";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="dropdown">
        Alicia Koch
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdownContent">
          <DropdownMenu.Item className="dropSearch">
            <input type="text" placeholder="Search team..." />
          </DropdownMenu.Item>

          <DropdownMenu.Group>
            <DropdownMenu.Item className="dropTitle">
              Personal Account
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropName">
              Alicia Koch
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Group>
            <DropdownMenu.Item className="dropTitle">Teams</DropdownMenu.Item>
            <DropdownMenu.Item className="dropName">
              Acme Inc.
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropName monster">
              Monsters Inc.
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.CheckboxItem className="create">
            <DropdownMenu.ItemIndicator />
            Create Team
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
